/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useHistory } from "react-router";
import { Chat } from "../../../client/chat/Chat";
import { Presence } from "../../../client/system/Presence";
import {
  SessionHandler,
  SessionKeys,
} from "../../../client/system/SessionHandler";
import { Utils } from "../../../client/system/Utils";
import { Profile, ProfileModel } from "../../../client/user/Profile";
import { User, UserModel, UserTag, UserTypes } from "../../../client/user/User";
import {
  FeedEntryModel,
  MessageModel,
  toAbsoluteUrl,
} from "../../../_metronic/helpers";
import { PageTitle } from "../../../_metronic/layout/core";
import { MobileView, BrowserView } from "react-device-detect";
import moment from "moment";
import ReactCountryFlag from "react-country-flag";
import { FileHandler } from "../../../client/system/FileHandler";
import { Button } from "react-bootstrap-v5";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import usePagination from "../../../hooks/usePagination";

const DashboardPage: FC = () => {
  //const roomId = Chat.CHATTER_REQUEST_FEED;

  const chatRouteBase = Chat.CHAT_CHATTER_ROOM;
  const history = useHistory();
  const dynamicClass: any = {
    "New Message": "newMessage",
    "Logged In": "loggedIn",
    "Logged Out": "loggedOut",
    "Liked Profile": "likedProfile",
    "New User": "newUser",
  };

  const [header, setHeader] = useState<string>("");
  const [viewButtonLabel, setViewButtonLabel] = useState<string>("");
  const [feedEntries, setFeedEntries] = useState<FeedEntryModel[]>([]);
  const [pages, setPages] = useState<number>(0);

  const [userModels, setUserModels] = useState<UserModel[]>([]);
  const [profileModels, setProfileModels] = useState<ProfileModel[]>([]);

  const [userModelsLoaded, setUserModelsLoaded] = useState<boolean>(false);
  const [profileModelsLoaded, setProfileModelsLoaded] =
    useState<boolean>(false);
  const [chatterId, setChatterId] = useState<string>("");
  const [chatters, setChatters] = useState<UserModel[]>([]);

  const { jumpToPage, currentData } = usePagination(feedEntries, 10);

  const getUserModelById = (
    userId: string | undefined
  ): UserModel | undefined => {
    return userModels.find((x) => {
      return x.uuid === userId;
    });
  };

  const getProfileModelById = (
    profileId: string | undefined
  ): ProfileModel | undefined => {
    return profileModels.find((x) => {
      return x.id === profileId;
    });
  };

  const getChatterById = (
    userId: string | undefined
  ): UserModel | undefined => {
    return chatters.find((x) => {
      return x.uuid === userId;
    });
  };

  useEffect(() => {
    if (User.Model?.userType === UserTypes.TYPE_CHATTER) {
      setHeader("Chat Requests");
      setViewButtonLabel("Reply");
    } else if (
      User.Model?.userType === UserTypes.TYPE_ADMIN ||
      User.Model?.userType === UserTypes.TYPE_MODERATOR
    ) {
      setHeader("Admin Feed");
      setViewButtonLabel("View");
    }

    User.GetAllUsers(UserTypes.TYPE_CHATTER).then((chatters) => {
      setChatters(chatters);
    });

    if (
      User.Model?.userType === UserTypes.TYPE_CHATTER ||
      User.Model?.userType === UserTypes.TYPE_ADMIN ||
      User.Model?.userType === UserTypes.TYPE_MODERATOR
    ) {
      Chat.ListenForFeed(25, false, (data) => {
        if (data) {
          setFeedEntries(data);
          let length = data.length;
          const pageSize = 10;
          const pageCount = Math.ceil(length / pageSize);
          setPages(pageCount);
          GetUsers(data);
          GetProfileRecepients(data);
        }
      });

      let unlisten = history.listen((location, action) => {
        if (
          !location.pathname.includes(Chat.CHAT_CHATTER_REQUESTS_FEED_ROUTE)
        ) {
          //Chat.StopListeningForChatRoomMessages(roomId);
          Chat.StopListeningForFeed();
          //Profile.StopListeningForProfiles("approved");
        }

        unlisten();
      });
    }
  }, [history]);

  async function GetUsers(feedEntries: FeedEntryModel[] | undefined) {
    //console.log(`Messages Length ${messages?.length}`);
    let uuidList: string[] = [];
    //   console.log(feedEntries);
    if (feedEntries) {
      for (let i = 0; i < feedEntries.length; i++) {
        let entry = feedEntries[i];
        let id = entry.userId;
        if (!entry.message) {
          id = entry.userId;
        } else {
          id = entry.message?.isChatter
            ? (entry.message?.recepient_id as string)
            : (entry.message?.user as string);
        }

        if (
          !uuidList.includes(id as string) &&
          id !== undefined &&
          id !== "" &&
          id !== null
        ) {
          uuidList.push(id as string);
        }
      }

      if (uuidList && uuidList.length > 0) {
        console.log(uuidList, "users arr.................", feedEntries.length);
        const res = [];
        for (let i = 0; i < uuidList.length; i += 10) {
          const chunk = uuidList.slice(i, i + 10);
          res.push(chunk);
        }
        let usersArr: UserModel[] = [];
        for (let i = 0; i < res.length; i++) {
          let result = await User.GetUsersByIds(res[i]);
          if (result) {
            result.forEach((item) => {
              usersArr.push(item);
            });
            setUserModels(usersArr);
          }
        }
        setUserModelsLoaded(true);
      }
    }
  }

  async function GetProfileRecepients(
    feedEntries: FeedEntryModel[] | undefined
  ) {
    let uuidList: string[] = [];
    if (feedEntries) {
      for (let i = 0; i < feedEntries.length; i++) {
        let entry = feedEntries[i];
        let id = entry.userId;
        if (!entry.message) {
          id = entry.userId;
        } else {
          id = entry.message?.isChatter
            ? (entry.message?.user as string)
            : (entry.message?.recepient_id as string);
        }

        if (!uuidList.includes(id as string)) {
          uuidList.push(id as string);
        }
      }

      if (uuidList && uuidList.length > 0) {
        const res = [];
        for (let i = 0; i < uuidList.length; i += 10) {
          const chunk = uuidList.slice(i, i + 10);
          res.push(chunk);
        }
        let usersArr: ProfileModel[] = [];
        for (let i = 0; i < res.length; i++) {
          let result = await Profile.GetProfilesByIds(res[i]);
          if (result) {
            result.forEach((item) => {
              usersArr.push(item);
            });
            setProfileModels(usersArr);
          }
        }
        setProfileModelsLoaded(true);
      }
    }
  }

  function GoToProfileSelection(
    user_id: string,
    siteOfOrigin: string,
    feedRoomId: string
  ) {
    SessionHandler.SetItem(SessionKeys.SESSION_FEED_ENTRY_ROOM_ID, feedRoomId);
    history.push(`/profile-selection/${siteOfOrigin}/${user_id}`);
  }
  function ReplyAsChatter(
    profile_id: string,
    user_id: string,
    siteOfOrigin: string
  ) {
    const roomId = Chat.GetPrivateChatRoomId(profile_id, user_id);
    Chat.GetRoomStatus(roomId, siteOfOrigin).then((result) => {
      if (!result) {
        Presence.LockRoom(roomId, siteOfOrigin).then(() => {
          User.GetUserAccount(user_id).then((model) => {
            if (model) {
              User.SetChatterProfile(
                getProfileModelById(profile_id) as ProfileModel
              );

              history.push(`${chatRouteBase}/${siteOfOrigin}/${user_id}`);

              //delete chatter request
              //Chat.DeleteConversation(profile_id, user_id);
              Chat.DeleteChatterRequestEntry(roomId);
            }
          });
        });
      } else {
        alert(`This Room is currently Locked!`);
      }
    });
  }

  function ViewChatRoomAsAdmin(
    profile_id: string,
    user_id: string,
    siteOfOrigin: string
  ) {
    console.log("Try View Room as Admin");

    User.GetUserAccount(user_id).then((model) => {
      if (model) {
        User.SetChatterProfile(getProfileModelById(profile_id) as ProfileModel);

        history.push(`${chatRouteBase}/${siteOfOrigin}/${user_id}`);
      }
    });
  }

  function TryViewChatRoom(
    profile_id: string,
    user_id: string,
    siteOfOrigin: string,
    tag: string,
    roomId: string
  ) {
    switch (User.Model?.userType) {
      case UserTypes.TYPE_CHATTER:
        if (tag === UserTag.NEW_MESSAGE || tag === UserTag.LIKED_PROFILE) {
          ReplyAsChatter(profile_id, user_id, siteOfOrigin);
        } else if (
          tag === UserTag.LOGGED_IN ||
          tag === UserTag.LOGGED_OUT ||
          tag === UserTag.NEW_USER ||
          tag === UserTag.CLICKED_GET_CREDITS
        ) {
          GoToProfileSelection(user_id, siteOfOrigin, roomId);
        }
        break;
      case UserTypes.TYPE_ADMIN:
        if (tag === UserTag.NEW_MESSAGE || tag === UserTag.LIKED_PROFILE) {
          ViewChatRoomAsAdmin(profile_id, user_id, siteOfOrigin);
        } else if (
          tag === UserTag.LOGGED_IN ||
          tag === UserTag.LOGGED_OUT ||
          tag === UserTag.NEW_USER ||
          tag === UserTag.CLICKED_GET_CREDITS
        ) {
          GoToProfileSelection(user_id, siteOfOrigin, roomId);
        }
        break;
      case UserTypes.TYPE_MODERATOR:
        if (tag === UserTag.NEW_MESSAGE || tag === UserTag.LIKED_PROFILE) {
          ViewChatRoomAsAdmin(profile_id, user_id, siteOfOrigin);
        } else if (
          tag === UserTag.LOGGED_IN ||
          tag === UserTag.LOGGED_OUT ||
          tag === UserTag.NEW_USER ||
          tag === UserTag.CLICKED_GET_CREDITS
        ) {
          GoToProfileSelection(user_id, siteOfOrigin, roomId);
        }
        break;
    }
  }

  function TryDeleteEntry(roomId: string) {
    Chat.DeleteChatterRequestEntry(roomId);
    Chat.DeleteAdminFeedEntry(roomId);
  }
  const handleChange = (event: any, value: any) => {
    jumpToPage(value);
  };

  return (
    <>
      <div className={`card`}>
        {/* begin::Header */}
        <div className="card-header border-0 pt-5 custom-card-header">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bolder fs-3 mb-1">{header}</span>
          </h3>

          {User.Model?.userType === UserTypes.TYPE_ADMIN && (
            <div className="adminFeed-filters">
              <select
                className="form-select bg-light"
                aria-label="Select example"
              >
                <option value={""}>Filter By Chatter</option>
                {chatters?.map((chatter) => {
                  return (
                    <option
                      key={`chatter@${Utils.GenerateRandomID()}`}
                      value={chatter.uuid}
                    >
                      {chatter.displayName}
                    </option>
                  );
                })}
              </select>

              <select
                className="form-select bg-light"
                aria-label="Select example"
              >
                <option selected disabled>
                  Filter By Tag
                </option>
                <option value="1">Messages</option>
                <option value="2">Liked Profile</option>
                <option value="3">Logged In</option>
              </select>
            </div>
          )}
        </div>
        {/* Filter Collapse Data end */}

        <div className="card-body py-3 custom-card-body">
          <MobileView>
            <div className="AdminFeed-container">
              {currentData?.map((feedEntry: any, index: any) => {
                console.log(feedEntry);
                let userId = feedEntry.userId;
                if (feedEntry.message)
                  userId = feedEntry.message?.isChatter
                    ? (feedEntry.message?.recepient_id as string)
                    : (feedEntry.message?.user as string);

                let profileId = feedEntry.message?.isChatter
                  ? feedEntry.message?.user
                  : feedEntry.message?.recepient_id;

                let user = getUserModelById(userId) as UserModel;
                console.log(user);
                let profile = getProfileModelById(profileId) as ProfileModel;
                console.log(profile);
                let userCredits = user ? user.credits : "Loading";

                let userPhoto = user
                  ? user.photoURL
                  : "/media/avatars/150-2.jpg";
                let profilePhoto = profile
                  ? profile.photoURL
                  : "/media/avatars/150-2.jpg";

                let userName = user ? user.displayName : "User";
                let profileName = profile ? profile.displayName : "Profile";
                let userLocation = user ? user.country : "Loading";
                let countryCode = user
                  ? user.geolocation?.get("countryCode")
                  : "Loading";
                let senderName = feedEntry.message?.isChatter
                  ? profileName
                  : userName;
                let senderPhoto = feedEntry.message?.isChatter
                  ? profilePhoto
                  : userPhoto;
                let senderType = feedEntry.message?.isChatter
                  ? "Profile"
                  : "User";
                let formattedDate = moment(
                  feedEntry.createdAt,
                  "MM/DD/YYYY - hh:mm:ss A"
                );
                let recepientName = feedEntry.message?.isChatter
                  ? userName
                  : profileName;
                let recepientPhoto = feedEntry.message?.isChatter
                  ? userPhoto
                  : profilePhoto;
                let recepientType = feedEntry.message?.isChatter
                  ? "User"
                  : "Profile";

                let messageTag = feedEntry.tag;
                let modifiedTag = "";

                let actionButtonLabel = "Reply";
                let showClearButton = false;
                let noRecepient = false;

                let overrideClear = false;

                if (
                  feedEntry.tag === UserTag.LOGGED_IN ||
                  feedEntry.tag === UserTag.LOGGED_OUT ||
                  feedEntry.tag === UserTag.NEW_USER ||
                  feedEntry.tag === UserTag.CLICKED_GET_CREDITS
                ) {
                  actionButtonLabel = "Send Message";
                  noRecepient = true;
                  if (feedEntry.tag !== UserTag.NEW_USER)
                    showClearButton = true;
                } else if (
                  feedEntry.tag === UserTag.NEW_MESSAGE ||
                  feedEntry.tag === UserTag.LIKED_PROFILE
                ) {
                  actionButtonLabel =
                    User.Model?.userType === UserTypes.TYPE_CHATTER
                      ? "Reply"
                      : "View";
                }

                if (feedEntry.append) {
                  if (feedEntry.tag === UserTag.NEW_USER) {
                    modifiedTag = `Signed up ${feedEntry.append}`;
                  }
                }

                if (!user && userModelsLoaded) {
                  actionButtonLabel = "User Does Not Exist";
                  showClearButton = true;
                  overrideClear = true;
                }

                let key = `feed-row@${Utils.GenerateRandomID()}`;
                if (user) {
                  return (
                    <div key={key} className="AdminFeed-grid">
                      <div className="Profile-info Recepient-info">
                        <div className="profileThumbnail">
                          {noRecepient ? (
                            <></>
                          ) : (
                            <img src={recepientPhoto} alt="" />
                          )}
                        </div>

                        <div className="Thumbnail-details">
                          <p>Recepient</p>
                          <h3>{noRecepient ? "" : recepientName}</h3>
                          <p>{noRecepient ? "" : recepientType}</p>
                        </div>
                      </div>

                      <div className="Profile-info sender-info">
                        <div className="profileThumbnail">
                          <img src={senderPhoto} alt="" />
                        </div>

                        <div className="Thumbnail-details">
                          <p>Sender</p>
                          <h3>{senderName}</h3>
                          <p>{senderType}</p>
                        </div>
                      </div>

                      <div className="infoInner">
                        <p>User Credits</p>
                        <h3>{userCredits}</h3>
                      </div>

                      <div className="infoInner">
                        <p>Received</p>
                        <h3>{formattedDate.fromNow()}</h3>
                      </div>

                      <div className="infoInner">
                        <p>User Location</p>
                        <h3>
                          {countryCode ? (
                            <ReactCountryFlag countryCode={countryCode} svg />
                          ) : (
                            ""
                          )}{" "}
                          {userLocation}
                        </h3>
                      </div>

                      <div className="infoInner TagInfo">
                        <p>Tags</p>
                        <span className="Tag-badge">{messageTag}</span>
                      </div>

                      <div className="infoBtns">
                        {showClearButton ? (
                          <button
                            className="btn btn-primary"
                            disabled={!user && !overrideClear}
                            onClick={() => {
                              TryDeleteEntry(feedEntry.roomId);
                            }}
                            type="button"
                          >
                            Clear
                          </button>
                        ) : (
                          <></>
                        )}
                        <button
                          className="btn btn-primary"
                          type="button"
                          disabled={(!noRecepient && !profile) || !user}
                          onClick={() => {
                            TryViewChatRoom(
                              profileId as string,
                              userId as string,
                              feedEntry.siteOfOrigin as string,
                              messageTag as string,
                              feedEntry.roomId
                            );
                          }}
                        >
                          {actionButtonLabel}
                        </button>
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </MobileView>

          <BrowserView>
            {/* begin::Table container */}
            <div className="table-responsive yy">
              {/* begin::Table */}
              <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                {/* begin::Table head */}
                <thead>
                  <tr className="fw-bolder text-muted">
                    <th className="min-w-150px">Recepient</th>
                    <th className="min-w-140px">Sender</th>
                    <th className="min-w-100px">User Credits</th>
                    <th className="min-w-100px">Received</th>
                    <th className="min-w-120px">User Location</th>
                    <th className="min-w-120px">Tag</th>
                    <th className="min-w-100px">Clear</th>
                    <th className="min-w-100px">Action</th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  {currentData?.map((feedEntry: any) => {
                    let userId = feedEntry.userId;
                    // console.log(feedEntry)
                    if (feedEntry.message)
                      userId = feedEntry.message?.isChatter
                        ? (feedEntry.message?.recepient_id as string)
                        : (feedEntry.message?.user as string);

                    let profileId = feedEntry.message?.isChatter
                      ? feedEntry.message?.user
                      : feedEntry.message?.recepient_id;

                    let user = getUserModelById(userId) as UserModel;

                    let profile = getProfileModelById(
                      profileId
                    ) as ProfileModel;

                    let userCredits = user ? user.credits : "Loading";

                    let userPhoto = user
                      ? user.photoURL
                      : "/media/avatars/150-2.jpg";
                    let profilePhoto = profile
                      ? profile.photoURL
                      : "/media/avatars/150-2.jpg";

                    let userName = user ? user.displayName : "User";
                    let profileName = profile ? profile.displayName : "Profile";
                    let userLocation = user
                      ? user.geolocation?.get("countryName")
                      : "Loading";
                    let countryCode = user
                      ? user.geolocation?.get("countryCode")
                      : ("Loading" as string);
                    let senderName = feedEntry.message?.isChatter
                      ? profileName
                      : userName;
                    let senderPhoto = feedEntry.message?.isChatter
                      ? profilePhoto
                      : userPhoto;
                    let senderType = feedEntry.message?.isChatter
                      ? "Profile"
                      : "User";
                    let formattedDate = moment(
                      feedEntry.createdAt,
                      "MM/DD/YYYY - hh:mm:ss A"
                    );
                    let recepientName = feedEntry.message?.isChatter
                      ? userName
                      : profileName;
                    let recepientPhoto = feedEntry.message?.isChatter
                      ? userPhoto
                      : profilePhoto;
                    let recepientType = feedEntry.message?.isChatter
                      ? "User"
                      : "Profile";

                    let messageTag = feedEntry.tag;
                    let modifiedTag = "";

                    let actionButtonLabel = "Reply";
                    let showClearButton = false;
                    let noRecepient = false;

                    let overrideClear = false;

                    if (
                      feedEntry.tag === UserTag.LOGGED_IN ||
                      feedEntry.tag === UserTag.LOGGED_OUT ||
                      feedEntry.tag === UserTag.NEW_USER ||
                      feedEntry.tag === UserTag.CLICKED_GET_CREDITS
                    ) {
                      actionButtonLabel = "Send Message";
                      noRecepient = true;
                      if (feedEntry.tag !== UserTag.NEW_USER)
                        showClearButton = true;
                    } else if (
                      feedEntry.tag === UserTag.NEW_MESSAGE ||
                      feedEntry.tag === UserTag.LIKED_PROFILE
                    ) {
                      actionButtonLabel =
                        User.Model?.userType === UserTypes.TYPE_CHATTER
                          ? "Reply"
                          : "View";
                    }

                    if (feedEntry.append) {
                      if (feedEntry.tag === UserTag.NEW_USER) {
                        modifiedTag = `Signed up ${feedEntry.append}`;
                      }
                    }

                    if (!user && userModelsLoaded) {
                      actionButtonLabel = "User Does Not Exist";
                      showClearButton = true;
                      overrideClear = true;
                    }

                    let key = `feed-row@${Utils.GenerateRandomID()}`;
                    if (user)
                      return (
                        <tr key={key}>
                          <td className="text-dark fw-bolder text-hover-primary fs-6">
                            {noRecepient ? (
                              <></>
                            ) : (
                              <table>
                                <td>
                                  <img
                                    src={recepientPhoto}
                                    className="PushImageIcon"
                                    alt="Images"
                                  />
                                </td>
                                <td>
                                  <tr>{recepientName}</tr>
                                  <tr className="text-muted">
                                    {recepientType}
                                  </tr>
                                </td>
                              </table>
                            )}
                          </td>
                          <td className="text-dark fw-bolder text-hover-primary fs-6">
                            <table>
                              <td>
                                <img
                                  src={senderPhoto}
                                  className="PushImageIcon"
                                  alt="Images"
                                />
                              </td>
                              <td>
                                <tr>{senderName}</tr>
                                <tr className="text-muted">{senderType}</tr>
                              </td>
                            </table>
                          </td>
                          <td className="text-dark fw-bolder text-hover-primary fs-6">
                            {userCredits}
                          </td>
                          <td className="text-dark fw-bolder text-hover-primary fs-6">
                            {formattedDate.fromNow()}
                          </td>
                          <td className="text-dark fw-bolder text-hover-primary fs-6">
                            {countryCode ? (
                              <ReactCountryFlag countryCode={countryCode} svg />
                            ) : (
                              ""
                            )}{" "}
                            {userLocation}
                          </td>
                          <td className="text-dark fw-bolder text-hover-primary fs-6">
                            <span
                              className={`Tag-badge ${dynamicClass[messageTag]}`}
                            >
                              {modifiedTag ? modifiedTag : messageTag}
                            </span>
                          </td>
                          <td className="text-dark fw-bolder text-hover-primary fs-6">
                            {showClearButton ? (
                              <button
                                className="btn btn-primary"
                                type="button"
                                data-kt-element="send"
                                disabled={!user && !overrideClear}
                                onClick={() => {
                                  TryDeleteEntry(feedEntry.roomId);
                                }}
                              >
                                Clear
                              </button>
                            ) : (
                              <></>
                            )}
                          </td>
                          <td className="text-dark fw-bolder text-hover-primary fs-6">
                            <button
                              className="btn btn-primary"
                              type="button"
                              data-kt-element="send"
                              disabled={(!noRecepient && !profile) || !user}
                              onClick={() => {
                                TryViewChatRoom(
                                  profileId as string,
                                  userId as string,
                                  feedEntry.siteOfOrigin as string,
                                  messageTag as string,
                                  feedEntry.roomId
                                );
                              }}
                            >
                              {actionButtonLabel}
                            </button>
                          </td>
                        </tr>
                      );
                  })}
                </tbody>

                {/* end::Table body */}
              </table>

              {/* <nav aria-label="Page navigation example" className='w-100 mb-5 mt-5'>
                      <ul className="pagination">
                      <li className={currentPage === 1 ? "page-item disabled": "page-item"}   onClick={() => goPrevious()} ><a className="page-link" href='javascript:void(0);'>Previous</a></li>
                      {pages.map((value) =>
                      { return <li className={currentPage===value ? "page-item active" : "page-item"}  ><a className="page-link" href='javascript:void(0);'  onClick={()=> goToPage(value)} >{value}</a></li>}
                       )}
                      <li className={currentPage === pages[pages.length-1]? "page-item disabled" : "page-item"}  onClick={() => goNext()}><a className="page-link" href='javascript:void(0);'>Next</a></li>
                    </ul>
                  </nav> */}
              <Stack
                spacing={2}
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  my: 5,
                }}
              >
                <Pagination
                  count={pages}
                  onChange={handleChange}
                  defaultPage={1}
                  boundaryCount={2}
                />
              </Stack>
              {/* end::Table */}
            </div>
            {/* end::Table container */}
          </BrowserView>
        </div>
        {/* begin::Body */}
      </div>
    </>
  );
};

const DashboardWrapper: FC = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: "MENU.DASHBOARD" })}
      </PageTitle>
      <DashboardPage />
    </>
  );
};

export { DashboardWrapper };
