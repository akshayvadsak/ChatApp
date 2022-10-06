import React, { useCallback, useEffect, useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { ProfileImageModel, ProfileImageReceiverModel } from '../../../../_metronic/helpers';
import { Profile } from '../../../../client/user/Profile';
import { User, UserTag, UserTypes } from '../../../../client/user/User';
import { useHistory } from 'react-router-dom';
import { Chat } from '../../../../client/chat/Chat';

import '../../../../_metronic/assets/sass/core/vendors/plugins/_fslightbox_upload.scss';

type Props = {
    recepient_uuid: string
    site_of_origin: string
    //customToolbarButtons :string
}

const ListOfPrivateImages: React.FC<Props> = ({ recepient_uuid, site_of_origin }) => {
    const [siteOfOrigin, setSiteOfOrigin] = useState<string>("");

    const [profileImages, setProfileImages] = useState<ProfileImageModel[]>([]);

    const [toggler, setToggler] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState<number>(0);
    const [lightboxSources, setLightboxSources] = useState<string[]>([]);

    const history = useHistory();

    const toggleLightbox = (toggle: boolean, index: number) => {
        setLightboxIndex(index);
        setToggler(toggle);
    }

    const returnToChatterRequestsFeed = useCallback(() => {
        history.push(Chat.CHAT_CHATTER_REQUESTS_FEED_ROUTE);
    }, [history])

    const sendImage = async () => {
        if (isImageSent(profileImages[lightboxIndex].receivedBy, recepient_uuid)) {
            alert("This image has already been sent to this user!");
            return;
        }

        let url = lightboxSources[lightboxIndex];
        //let imageId = profileImages[lightboxIndex].id;
        let messageData = {
            text: url,
            uuid: User.Model?.profile?.id,
            photoURL: User.Model?.profile?.photoURL,
            recepient_id: recepient_uuid,
            chatter_id: User.Model?.uuid,
            isChatter: true,
            contentType: `image`
        }

        let roomId = Chat.GetPrivateChatRoomId(User.Model?.profile?.id, recepient_uuid);

        //console.log(`Image Id: ${imageId} | Url: ${url}`);

        await Chat.SendMessage(roomId, messageData, siteOfOrigin).then(async () => {
            let imageId = profileImages[lightboxIndex].info.id;
            let receivers = profileImages[lightboxIndex].receivedBy
            let imageSent = isImageSent(receivers, recepient_uuid);
            if (!imageSent)
                await Profile.AddImageReceiver(User.Model?.profile?.id, imageId, recepient_uuid)

            messageData.text = "has sent an image";
            let feedEntryData = {
                message: messageData
            }
            await Chat.SendToAdminFeed(roomId, feedEntryData, siteOfOrigin, UserTag.NEW_MESSAGE);

            if (User.Model?.userType === UserTypes.TYPE_CHATTER) {
                returnToChatterRequestsFeed();
            }
        });
    }

    const isImageSent = (receivers: ProfileImageReceiverModel[] | undefined, recepient_uuid: string): boolean => {
        let isSent = false;

        let i = 0;
        if (receivers) {
            while (!isSent && i < receivers.length) {
                let receiver = receivers[i];
                if (receiver.receiver_id === recepient_uuid)
                    isSent = true;
                else
                    i++;
            }
        }

        return isSent;
    }
    // const LightBoxClose = () => {

    // }
    const onImageChange = () => {
        setTimeout(() => {
            let elements = document.getElementsByClassName("fslightbox-absoluted fslightbox-full-dimension fslightbox-flex-centered");
            for (let i = 0; i < elements?.length; i++) {
                let element = elements[i];
                let styleAtt = element.getAttribute('style');
                if (styleAtt === "transform: translate(0px, 0px);")
                    setLightboxIndex(i);
            }
        }, 300)
    }

    useEffect(() => {
        setSiteOfOrigin(site_of_origin);
        Profile.ListenForProfileImages(User.Model?.profile?.id, (images) => {
            if (images) {
                setProfileImages(images)
                let sources: string[] = [];
                images.forEach((image) => {
                    sources.push(image.info.photoURL);
                })

                setLightboxSources(sources);

                if (User.Model?.userType === UserTypes.TYPE_ADMIN) {
                    images.forEach((image) => {
                        Profile.ListenForProfileImageReceivers(User.Model?.profile?.id, image.info.id, (receivers, imageId) => {
                            if (receivers) {
                                let temp: ProfileImageModel[] = images;
                                let i = 0;
                                let found = false;
                                while (i < temp.length && !found) {
                                    if (temp[i].info.id === imageId) {
                                        temp[i].receivedBy = receivers;
                                        found = true;
                                    } else {
                                        i++;
                                    }
                                }

                                setProfileImages([]);
                                setProfileImages(temp);
                            }
                        })
                    })
                }
            }
        });

        let unlisten = history.listen((location, action) => {
            if (!location.pathname.includes(Chat.CHAT_CHATTER_ROOM)) {
                Profile.StopListeningForProfileImages(User.Model?.profile?.id)
                if (User.Model?.userType === UserTypes.TYPE_ADMIN) {
                    profileImages.forEach((image) => {
                        Profile.StopListeningForProfileImageReceivers(image.info.ownerId, image.info.id);
                    })
                }
            }

            unlisten();
        })
    }, [history, profileImages, site_of_origin])

    return (
        <>
            <div id='Private_Images' className='Scrolling-Top'>
                <div className="card card-custom shadow mb-5">
                    <div className="card-header p-5">
                        <h3 className="card-title">Private Images Of Profile</h3>
                    </div>
                    <div className="card-body p-5">
                        <div className='ScrollsPrivateImages'>
                            <ul className='AllPrivateImages'>
                                {profileImages && profileImages.map((image, index) => {
                                    let isSent = isImageSent(image.receivedBy, recepient_uuid);
                                    return (
                                        <li key={`image${index}`} className={`PrivateImages overlay`} onClick={() => toggleLightbox(!toggler, index)} >
                                            <img className={isSent ? "GreyOut" : ""} src={image.info.photoURL ? image.info.photoURL : 'media/Avaters/pexels-hannah-nelson-1065084.jpg'} alt="Pic" />

                                            <div className="overlay-layer card-rounded bg-dark bg-opacity-25 shadow">
                                                <i className="bi bi-eye-fill text-white fs-3x"></i>
                                            </div>
                                        </li>
                                    )
                                })}

                                <FsLightbox
                                    toggler={toggler}
                                    sources={lightboxSources}
                                    sourceIndex={lightboxIndex}
                                    showThumbsOnMount={true}
                                    onSlideChange={() => { onImageChange() }}
                                    customToolbarButtons={[
                                        {
                                            viewBox: '45.25 0 96.124 96.123',
                                            d: 'M4.854 51.906c1.512.932 3.723 1.707 6.05 1.707 3.452 0 5.467-1.822 5.467-4.46 0-2.442-1.396-3.839-4.924-5.196-4.266-1.513-6.902-3.724-6.902-7.407 0-4.072 3.372-7.096 8.453-7.096 2.676 0 4.615.62 5.779 1.278l-.932 2.754a10.398 10.398 0 0 0-4.964-1.241c-3.566 0-4.924 2.133-4.924 3.917 0 2.442 1.59 3.646 5.196 5.041 4.421 1.707 6.67 3.84 6.67 7.678 0 4.035-2.986 7.525-9.153 7.525-2.52 0-5.273-.738-6.669-1.668l.853-2.832zM26.465 47.254c.078 4.614 3.025 6.516 6.438 6.516 2.442 0 3.917-.427 5.196-.971l.583 2.444c-1.203.542-3.257 1.163-6.245 1.163-5.778 0-9.229-3.802-9.229-9.464 0-5.662 3.336-10.12 8.803-10.12 6.128 0 7.757 5.39 7.757 8.841 0 .698-.079 1.241-.117 1.59H26.465zm10.006-2.444c.038-2.171-.892-5.545-4.731-5.545-3.452 0-4.964 3.18-5.236 5.545h9.967zM44.005 42.327c0-1.938-.04-3.528-.155-5.079h3.025l.194 3.103h.078c.93-1.784 3.103-3.529 6.205-3.529 2.597 0 6.631 1.55 6.631 7.987v11.209H56.57v-10.82c0-3.025-1.124-5.545-4.344-5.545-2.248 0-3.994 1.59-4.576 3.49-.155.426-.232 1.009-.232 1.59v11.286h-3.413V42.327zM81.749 28.484v22.687c0 1.667.04 3.567.155 4.848h-3.063l-.155-3.258h-.077c-1.048 2.094-3.336 3.684-6.399 3.684-4.538 0-8.028-3.84-8.028-9.54-.039-6.244 3.84-10.083 8.415-10.083 2.871 0 4.809 1.356 5.664 2.869h.078V28.484h3.41zm-3.411 16.405c0-.428-.04-1.009-.157-1.435-.504-2.173-2.365-3.957-4.924-3.957-3.529 0-5.624 3.102-5.624 7.253 0 3.8 1.861 6.94 5.546 6.94 2.288 0 4.381-1.513 5.002-4.072.117-.465.157-.93.157-1.473v-3.256zM99.141 29.88v26.139h-3.374V29.88h3.374zM105.311 42.327c0-1.938-.038-3.528-.154-5.079h2.984l.155 3.025h.116c1.048-1.784 2.795-3.451 5.897-3.451 2.559 0 4.497 1.55 5.312 3.761h.076c.585-1.046 1.319-1.861 2.097-2.443 1.125-.854 2.365-1.318 4.148-1.318 2.481 0 6.164 1.627 6.164 8.144v11.052h-3.335V45.392c0-3.606-1.316-5.779-4.069-5.779-1.938 0-3.451 1.436-4.036 3.103a5.635 5.635 0 0 0-.271 1.707v11.596h-3.335V44.772c0-2.986-1.317-5.159-3.915-5.159-2.134 0-3.686 1.707-4.228 3.414-.192.503-.271 1.084-.271 1.667v11.324h-3.336V42.327zM148.067 56.019l-.273-2.365h-.116c-1.046 1.473-3.063 2.791-5.74 2.791-3.799 0-5.737-2.675-5.737-5.391 0-4.537 4.033-7.02 11.285-6.98v-.389c0-1.55-.427-4.343-4.265-4.343-1.747 0-3.569.543-4.89 1.396l-.774-2.249c1.552-1.009 3.799-1.667 6.164-1.667 5.74 0 7.137 3.916 7.137 7.678v7.021c0 1.627.079 3.218.311 4.498h-3.102zm-.505-9.581c-3.725-.077-7.947.583-7.947 4.227 0 2.21 1.47 3.259 3.217 3.259 2.444 0 3.993-1.553 4.538-3.142.116-.349.192-.738.192-1.087v-3.257zM172.545 37.249a81.47 81.47 0 0 0-.155 5.158v10.897c0 4.304-.854 6.94-2.677 8.571-1.823 1.707-4.46 2.249-6.825 2.249-2.25 0-4.731-.542-6.246-1.552l.856-2.6c1.24.777 3.18 1.476 5.508 1.476 3.488 0 6.046-1.823 6.046-6.555v-2.095h-.074c-1.048 1.746-3.063 3.141-5.972 3.141-4.654 0-7.989-3.954-7.989-9.152 0-6.359 4.148-9.965 8.453-9.965 3.259 0 5.042 1.705 5.854 3.257h.079l.155-2.831h2.987zm-3.53 7.406c0-.581-.037-1.086-.192-1.55-.621-1.979-2.289-3.607-4.771-3.607-3.256 0-5.584 2.753-5.584 7.096 0 3.686 1.859 6.75 5.545 6.75 2.094 0 3.996-1.319 4.73-3.49.195-.583.271-1.241.271-1.823v-3.376zM179.963 47.254c.079 4.614 3.023 6.516 6.438 6.516 2.445 0 3.917-.427 5.197-.971l.582 2.444c-1.203.542-3.258 1.163-6.242 1.163-5.78 0-9.23-3.802-9.23-9.464 0-5.662 3.335-10.12 8.804-10.12 6.127 0 7.755 5.39 7.755 8.841 0 .698-.079 1.241-.116 1.59h-13.188zm10.007-2.444c.037-2.171-.893-5.545-4.73-5.545-3.451 0-4.963 3.18-5.234 5.545h9.964z',
                                            width: '200px',
                                            height: '50px',
                                            title: 'Send Picture to User',
                                            onClick: () => { sendImage().then(() => setToggler(false)) }
                                        }
                                    ]}
                                />
                            </ul>
                        </div>
                        <div className='MoreImages py-4'>
                            <button type="button" className="btn btn-secondary w-100" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" title="Tooltip on top">
                                More Images
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default ListOfPrivateImages