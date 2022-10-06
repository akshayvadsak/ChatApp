/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useCallback, useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react'
import clsx from 'clsx'
import {
  toAbsoluteUrl,
  MessageModel,
} from '../../helpers'

import { useHistory } from 'react-router-dom'

import { User, UserModel, UserTag, UserTypes } from '../../../client/user/User'
import { Chat } from '../../../client/chat/Chat'
import FsLightbox from 'fslightbox-react'
import { SessionHandler, SessionKeys } from '../../../client/system/SessionHandler'
import { EmailType, Mail } from '../../../client/system/Mail'
import { Presence } from '../../../client/system/Presence'
import Drawer from '@mui/material/Drawer'
import { Box } from '@mui/material'
import { SearchContextManager } from '@giphy/react-components'
import GiphyGrid from './GiphyGrid'
import { CloseButton } from 'react-bootstrap-v5';
import { isBrowser } from 'react-device-detect';


import ResizePanel from "react-resize-panel-ts";
import stalemating from '../../assets/sass/style.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(stalemating);

type Props = {
  recepient_uuid: string
  site_of_origin: string
  status: boolean,
  ref: any
}

const IDLE_CHAT_TIMER = 120;
let time = IDLE_CHAT_TIMER;
let timerId = null as any;
declare const window: any;
window.arr = []

const ChatInner = forwardRef((props: Props, ref) => {
  const { recepient_uuid, site_of_origin, status } = props;
  const dummy = useRef<HTMLDivElement>(null);
  const MSG_ENTRIES: number = 25;

  const [roomID, setRoomID] = useState<string>("");
  const [recepientUUID, setRecepientUUID] = useState<string>("");
  const [siteOfOrigin, setSiteOfOrigin] = useState<string>("");

  const [message, setMessage] = useState<string>('')
  const [messages, setMessages] = useState<MessageModel[]>([]);

  const [userModel, setUserModel] = useState<UserModel>(null as any);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [lightboxSources, setLightboxSources] = useState<string[]>([]);
  const [toggler, setTotggler] = useState(false);
  const [gifOpen, setGifOpen] = useState<boolean>(false);
  const [doneTryDeleteFeedEntries, setDoneTryDeleteFeedEntries] = useState<boolean>(false);
  const [sendAsEmail, setSendAsEmail] = useState<boolean>(false);

  const [messageLimit, setMessageLimit] = useState<number>(1);
  const [moreEntriesExist, setMoreEntriesExist] = useState<boolean>(false);
  const [lastMessageTime, setLastMessageTime] = useState<Date>(null as any);

  const history = useHistory();

  const scrollToBottom = () => {
    if (dummy.current)
      dummy.current.scrollIntoView({ behavior: "smooth", block: 'end', inline: 'nearest' });
  }

  const returnToChatterRequestsFeed = useCallback(() => {
    history.push(Chat.CHAT_CHATTER_REQUESTS_FEED_ROUTE);
  }, [history])

  const sendGiphy = async (data: any) => {

    let messageData = {
      text: `https://i.giphy.com/media/${data.id}/100.gif`,
      uuid: User.Model?.profile.id,
      photoURL: User.Model?.profile.photoURL,
      recepient_id: recepientUUID,
      isChatter: true,
      chatter_id: User.Model?.uuid,
      contentType: `image`
    }

    await Chat.SendMessage(roomID, messageData, siteOfOrigin, "message", lastMessageTime);

    scrollToBottom();

    if (sendAsEmail) 
    {
      const link = `https://flirtybum.com/messaging-panel/${User.Model?.profile.id}`;
      let params = {
        username: userModel.displayName,
        profilepicture: User.Model?.profile.photoURL,
        profilename: User.Model?.profile.displayName,
        link: link
      }

      await Mail.SendMessageAsEmailHttp(userModel.email, EmailType.AUTOMATED_MESSAGE, "You have received a new message", params);
    }

    if (!doneTryDeleteFeedEntries) {
      setDoneTryDeleteFeedEntries(true);
      let roomId = SessionHandler.GetItem(SessionKeys.SESSION_FEED_ENTRY_ROOM_ID, "");
      await Chat.DeleteChatterRequestEntry(roomId);
      await Chat.DeleteAdminFeedEntry(roomId);
      SessionHandler.DeleteItem(SessionKeys.SESSION_FEED_ENTRY_ROOM_ID);
    }

    //Send Message to Admin Feed
    let feedEntryData = {
      message: messageData
    }

    await Chat.SendToAdminFeed(roomID, feedEntryData, siteOfOrigin, UserTag.NEW_MESSAGE);

    //Send Message to Chatter Request Feed
    if (User.Model?.userType === UserTypes.TYPE_CHATTER) {
      returnToChatterRequestsFeed()
    }
  }

  const sendMessage = async (e: any) => {
    e.preventDefault();

    let messageData = {
      text: message,
      uuid: User.Model?.profile.id,
      photoURL: User.Model?.profile.photoURL,
      recepient_id: recepientUUID,
      chatter_id: User.Model?.uuid,
      isChatter: true,
      contentType: `text`
    }

    setMessage('')

    if (!message)
      return


    await Chat.SendMessage(roomID, messageData, siteOfOrigin, "message", lastMessageTime);

    scrollToBottom();

    if (sendAsEmail) {
      const link = `https://flirtybum.com/messaging-panel/${User.Model?.profile.id}`;
      let params = {
        username: userModel.displayName,
        profilepicture: User.Model?.profile.photoURL,
        profilename: User.Model?.profile.displayName,
        link: link
      }

      await Mail.SendMessageAsEmailHttp(userModel.email, EmailType.AUTOMATED_MESSAGE, "You have received a new message", params);
    }

    if (!doneTryDeleteFeedEntries) {
      setDoneTryDeleteFeedEntries(true);
      let roomId = SessionHandler.GetItem(SessionKeys.SESSION_FEED_ENTRY_ROOM_ID, "");
      await Chat.DeleteChatterRequestEntry(roomId);
      await Chat.DeleteAdminFeedEntry(roomId);
      SessionHandler.DeleteItem(SessionKeys.SESSION_FEED_ENTRY_ROOM_ID);
    }

    //Send Message to Admin Feed
    let feedEntryData = {
      message: messageData
    }

    await Chat.SendToAdminFeed(roomID, feedEntryData, siteOfOrigin, UserTag.NEW_MESSAGE);

    //Send Message to Chatter Request Feed
    if (User.Model?.userType === UserTypes.TYPE_CHATTER) {
      returnToChatterRequestsFeed()
    }
  }

  const onEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault()
      sendMessage(e)
    }
  }

  useImperativeHandle(ref, () => ({
    onLoadMoreClicked() {
      let self_uuid = User.Model?.profile?.id;
      let roomId = Chat.GetPrivateChatRoomId(self_uuid, recepient_uuid);
      Chat.StopListeningForChatRoomMessages(roomId);
      clearInterval(timerId);

      let newLimit = messageLimit + MSG_ENTRIES;
      setMessageLimit(newLimit);
    }
  }))

  const onLoadMoreClicked = () => {
    let self_uuid = User.Model?.profile?.id;
    let roomId = Chat.GetPrivateChatRoomId(self_uuid, recepient_uuid);
    Chat.StopListeningForChatRoomMessages(roomId);
    clearInterval(timerId);

    let newLimit = messageLimit + MSG_ENTRIES;
    setMessageLimit(newLimit);
  }

  useEffect(() => {
    //Get Chat Room Settings
    let site = site_of_origin;

    time = IDLE_CHAT_TIMER;
    clearInterval(timerId)

    setSiteOfOrigin(site);

    let self_uuid = User.Model?.profile?.id;

    let roomId = Chat.GetPrivateChatRoomId(self_uuid, recepient_uuid)

    setRecepientUUID(recepient_uuid);
    setRoomID(roomId);

    Presence.LockRoom(roomId, site);

    // Chat room countdown
    if (User.Model?.userType === UserTypes.TYPE_CHATTER) {
      console.log(`Time Begin: ${time}`)
      timerId = setInterval(() => {
        if (time > 0) {
          time--;
          console.log(`Time: ${time}`);
        } else {
          console.log("Time Up!");
          returnToChatterRequestsFeed();
        }
      }, 1000);
    }

    //Initialize Chat Room
    User.GetUserAccount(recepient_uuid).then((model) => {
      if (model)
        setUserModel(model);
    })

    Chat.ListenForChatRoomMessages(roomId, site, messageLimit,async (data) => {
      if (data) {
        if (data.length > messageLimit) {
          setMoreEntriesExist(true);
          data = data.splice(0, 3);
        } else {
          setMoreEntriesExist(false);
        }

        setLastMessageTime(new Date(data[data.length - 1].time));

        for(let message of data){
          if(message.type === 'out'){
            if(message.chatter_id){
              let userDetails = await User.GetUserAccount(message.chatter_id)
              message['chatterName'] = userDetails.displayName;
            } 
          }
        }


        setMessages(data);

        // Scroll to Bottom
        scrollToBottom();

        // Change Route
        let unlisten = history.listen((location, action) => {
          Chat.StopListeningForChatRoomMessages(roomId);
          if (!location.pathname.includes(Chat.CHAT_ROUTE) || !location.pathname.includes(Chat.CHAT_CHATTER_ROOM)) {
            clearInterval(timerId)
            SessionHandler.DeleteItem(SessionKeys.SESSION_FEED_ENTRY_ROOM_ID);
            Presence.UnlockRoom(roomId, site);
            User.SignOutOfProfile();
            //TrySendLastUserMessage(data, site);
            // Chat.SendRequestToSendLastUserMessage(site, roomId, recepient_uuid, UserTag.NEW_MESSAGE);
          }

          unlisten();
        });
      }
    })
  }, [history, messageLimit, recepient_uuid, status, site_of_origin, returnToChatterRequestsFeed])

  const toggleLightbox = (toggle: boolean, index: number) => {
    setLightboxIndex(index);
    setTotggler(toggle);
  }
  
  const getChattersName = (chatter_id:any) => {
    User.GetUserAccount(chatter_id).then((model) => {
      if (model)
        return model.displayName
    })
    return '';
  }



  return (
    <div
      className='card-body p-5 stretch'
      id='kt_chat_messenger_body'
    >
      <FsLightbox
        toggler={toggler}
        sources={window.arr}
        sourceIndex={lightboxIndex}
        showThumbsOnMount={true}
      />

      <div className={cx('chatOverview')}>
        <div onMouseDown={onLoadMoreClicked}  className={cx('chatContainer')}>
          <ResizePanel  direction="s">
            <div className={cx('chatPanel')}>
              <div
                className={clsx('scroll-y me-n5 pe-5 chatPanelBox', { 'scroll-y chatPanelBox': true })}
                data-kt-element='messages'
                data-kt-scroll='true'
                data-kt-scroll-activate='{default: false, lg: true}'
                data-kt-scroll-max-height='auto'
                data-kt-scroll-dependencies='#kt_header, #kt_toolbar, #kt_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer'
                data-kt-scroll-wrappers='#kt_content, #kt_chat_messenger_body'
                data-kt-scroll-offset='-2px'
              >
                {/* {
          moreEntriesExist ?
            <button
              className='btn btn-primary justify-content-center'
              type='button'
              data-kt-element='load_more'
              onClick={onLoadMoreClicked}
              style={{ justifyContent: 'center', marginBottom: '20px' }}
            >
              Load More
            </button>
          :
            <></>
        } */}

                {messages && messages.map((message, index) => {
                  //console.log(message)
                  let incomingName = userModel ? userModel.displayName : "User";
                  const state = message.type === 'in' ? 'info' : 'primary'
                  const templateAttr = {}
                  let sourceIndex: any;
                  if (message.contentType !== 'text') {
                    let arr = [...lightboxSources];
                    arr.push(message.text)
                    //setLightboxSources(arr);
                    window.arr = arr;

                    //console.log(arr)
                    sourceIndex = arr.length - 1;
                    // updateLightBoxSouce(arr);
                  }
                  if (message.template) {
                    Object.defineProperty(templateAttr, 'data-kt-element', {
                      value: `template-${message.type}`,
                    })
                  }
                  const contentClass = `$'d-flex' justify-content-${message.type === 'in' ? 'start' : 'end'
                    } mb-10`
                  return (
                    <div
                      key={`message${index}`}
                      className={clsx('d-flex', contentClass, 'mb-10', { 'd-none': message.template })}
                      {...templateAttr}
                    >
                      <div
                        className={clsx(
                          'd-flex flex-column align-items',
                          `align-items-${message.type === 'in' ? 'start' : 'end'}`
                        )}
                      >
                        <div className='d-flex align-items-center mb-2'>
                          {message.type === 'in' ? (
                            <>
                              <div className='symbol  symbol-35px symbol-circle '>
                                <img src={userModel ? userModel.photoURL : toAbsoluteUrl('/media/avatars/150-2.jpg')} alt="Pic" />
                              </div>
                              <div className='ms-3'>
                                <a
                                  href='#'
                                  className='fs-5 fw-bolder text-gray-900 text-hover-primary me-1'
                                >
                                  {incomingName}
                                </a>
                                <span className='text-muted fs-7 mb-1'>{message.time}</span>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className='me-3'>
                                <span className='text-muted fs-7 mb-1'>{message.time}</span>
                                <a
                                  href='#'
                                  className='fs-5 fw-bolder text-gray-900 text-hover-primary ms-1'
                                >
                                  You
                                </a>
                              </div>
                              <div className='symbol  symbol-35px symbol-circle '>
                                <img alt='Pic' src={message.photoUrl ? message.photoUrl : toAbsoluteUrl('/media/avatars/150-2.jpg')} />
                              </div>
                            </>
                          )}
                        </div>

                        {message.contentType === 'text' ? (
                          <>
                          <div
                            className={clsx(
                              'p-5 rounded',
                              `bg-light-${state}`,
                              'text-dark fw-bold mw-lg-400px',
                              `text-${message.type === 'in' ? 'start' : 'end'}`
                            )}
                            data-kt-element='message-text'
                            dangerouslySetInnerHTML={{ __html: message.text }}
                          >
                          </div>
                          {message.type === 'out' && <p className='sendBy text-muted fs-7 py-2 mb-0'>Sent By - <span>{message.chatterName}</span></p>}
                          </>
                        ) : (
                          <>
                          <div
                            className={clsx(
                              'p-5 rounded',
                              `bg-light-${state}`,
                              'text-dark fw-bold mw-lg-400px',
                              `text-${message.type === 'in' ? 'start' : 'end'}`
                            )}
                            data-kt-element='message-text'
                          >
                            <img src={message.text} style={{ width: "100%", height: "100%", objectFit: "contain" }} onClick={() => toggleLightbox(!toggler, sourceIndex)} alt="Pic" loading="lazy" />

                          </div>
                          {message.type === 'out' && <p className='sendBy text-muted fs-7 py-2 mb-0'>Sent By - <span>{message.chatterName}</span></p>}
                          </>
                        )}

                      </div>
                    </div>
                  )
                })}
                <div ref={dummy}></div>
              </div>
            </div>
          </ResizePanel>

          <div className={cx('chat-textBox')}>
            <div className='card-footer py-5 px-0 border-0'>
              <textarea
                className='form-control mb-3 bg-light'
                rows={5}
                data-kt-element='input'
                placeholder='Type a message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={onEnterPress}
                autoFocus={true}
              ></textarea>

              <div className='rightFit'>
                <div className='d-flex align-items-center me-2'>
                  {/* <button
              className='btn btn-sm btn-icon btn-active-light-primary me-1'
              type='button'
              data-bs-toggle='tooltip'
              title='Coming soon'
            >
              <i className='bi bi-paperclip fs-3'></i>
            </button> */}

                </div>
                {/* TODO File Upload Test. Remove once no longer needed */}
                {/* <input id="file-input" type="file" name="name" accept="image/*" onChange={testInput}/> */}
                <div className='d-flex align-items-center justify-content-end' style={{ gap: '10px' }}>
                  <button className='btn btn-primary' onClick={() => setGifOpen(true)}>
                    GIFS
                  </button>
                  <button
                    className='btn btn-primary'
                    type='button'
                    data-kt-element='send'
                    onClick={sendMessage}
                  >
                    Send
                  </button>

                </div>
                <span className='onlineStatus'>{status ? 'User Online' : 'User Offline'}</span>
              </div>
            </div>

            <div className='form-check form-check-sm form-check-custom form-check-solid'>
              <input
                className='form-check-input'
                type='checkbox'
                checked={sendAsEmail}
                onChange={(e) => { setSendAsEmail(e.target.checked) }}
                data-kt-check='true'
                data-kt-check-target='.widget-13-check'
              />
              Send as Email?
            </div>
          </div>
        </div>
      </div>

      <Drawer className='giphDrawer'
        BackdropProps={{ invisible: true }}
        PaperProps={{
          sx: { padding: 2, bgcolor: '#24222D', width: isBrowser ? 'calc(100% - 265px)' : '100%', left: isBrowser ? 'auto' : '' },
        }}
        anchor="bottom"
        open={gifOpen}
        onClose={() => setGifOpen(false)}
      >
        <Box sx={{ height: '400px' }}>
          <Box component={'div'} className="closebtn">
            <CloseButton onClick={() => setGifOpen(false)} />
          </Box>
          <SearchContextManager shouldDefaultToTrending={true} initialTerm='' options={{ lang: 'en', limit: 10, rating: 'r' }} apiKey='egbLiNeHNt2PA2nU911kWHBeQTYkbM39'>
            <GiphyGrid onGiphySelect={(data: any) => { sendGiphy(data); setGifOpen(false) }} />
          </SearchContextManager>
        </Box>
      </Drawer>
    </div>
  )
})

export { ChatInner }
