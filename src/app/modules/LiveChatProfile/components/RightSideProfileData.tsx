import React, { useCallback, useEffect, useState } from 'react'
import { User, UserModel, UserTag, UserTypes } from '../../../../client/user/User';
import { Button } from '@mui/material';
import { Chat } from '../../../../client/chat/Chat';
import { useHistory } from 'react-router-dom';
import ReactCountryFlag from "react-country-flag"
import moment from 'moment'
import countryTime from 'countries-and-timezones'


type Props = {
    id: string
    site_of_origin: string
    status: boolean
    credits: number
}

const RightSideProfileData: React.FC<Props> = ({ id, site_of_origin, status, credits }) => {
    const history = useHistory();

    const [endUser, setEndUser] = useState<UserModel>(null as any);
    //const [userOnlineStatus, setUserOnlineStatus] = useState<boolean>(false);
    const [haveLikedUser, setHaveLikedUser] = useState<boolean>(false);
    const [forceUpdate, setForceUpdate] = useState<boolean>(false);

    const [geoCountry, setGeoCountry] = useState<string>("");
    const [geoState, setGeoState] = useState<string>("");
    const [geoCity, setGeoCity] = useState<string>("");
    const [countryCode, setCountryCode] = useState<string>("");

    const returnToChatterRequestsFeed = useCallback(() => {
        history.push(Chat.CHAT_CHATTER_REQUESTS_FEED_ROUTE);
    }, [history])

    const likeUser = () => {
        if (!endUser)
            return;

        if (haveLikedUser)
            return;

        User.AddToProfilesThatLikedYou(endUser.uuid, User.Model?.profile.id).then(async () => {
            setHaveLikedUser(true);
            let messageData = {
                text: `${User.Model?.profile.displayName} liked your profile ❤`,
                uuid: User.Model?.profile.id,
                photoURL: User.Model?.profile.photoURL,
                isChatter: true,
                recepient_id: endUser.uuid,
                chatter_id: User.Model?.uuid,
                contentType: `text`
            }

            let roomId = Chat.GetPrivateChatRoomId(User.Model?.profile.id, id);
            console.log("Room Id: " + roomId);

            await Chat.SendMessage(roomId, messageData, site_of_origin, "profile_like");
            let feedEntryData = {
                message: messageData
            }
            await Chat.SendToAdminFeed(roomId, feedEntryData, site_of_origin, UserTag.LIKED_PROFILE);

            //alert("Successfully Liked User Profile!");
            setForceUpdate(!forceUpdate);

        }).catch(() => {
            console.log("Failure");
        })
    }

    useEffect(() => {
        let endUserId = id;

        User.GetUserAccount(endUserId).then((user) => {
            if (user) {
                console.log('user', user)
                setEndUser(user);
                let country = user.geolocation?.get("countryName");
                let state = user.geolocation?.get("state");
                let city = user.geolocation?.get("city");
                let countryCode = user ? user.geolocation.get('countryCode') : 'Loading';

                setGeoCountry(country ? country : "");
                setGeoState(state ? state : "");
                setGeoCity(city ? city : "");
                setCountryCode(countryCode ? countryCode : "")

                if (user.profilesLikedYou?.includes(User.Model?.profile.id))
                    setHaveLikedUser(true);
                else
                    setHaveLikedUser(false);
                
                // User.ListenForUserOnlineStatus(endUserId, (status) => {
                //     setUserOnlineStatus(status);

                //     let unlisten = history.listen((location, action) => {
                //         if (!location.pathname.includes("/live-chat")) {
                //             User.StopListeningForUserOnlineStatus(endUserId);
                //         }

                //         unlisten();
                //     });
                // });
            }
        });
    }, [id, forceUpdate])

    function getTime(user: any) {
        const countryList = countryTime.getAllCountries();
        const timezone = Object.values(countryList).find(el => el.name === user?.country)?.timezones[0]
        const time = new Date().toLocaleTimeString('en-US', {timeZone: timezone})
        return time
    }

    function getAge(dob: string) {
        return dob ? moment().diff(dob, 'years',false) : <p style={{color: 'gray', fontStyle: 'italic'}}>Date of birth not found</p>
    }


    return (
        <>
            <div className="card card-custom shadow mb-5">
                <div className="card-header p-5">
                    <h3 className="card-title">End Users Profile Data</h3>
                </div>
                <div className="card-body p-5">
                    <div className='d-flex justify-content-between'>
                        <div className='UserImage'>
                            <img src={endUser?.photoURL ? endUser.photoURL : 'media/avatars/150-26.jpg'} alt="Pic" />
                            <span className={status ? 'DotOnline' : 'DotOffline'}></span>
                        </div>
                        <div className='LikeBtn'>
                            <Button variant="contained" className={`red-btn ${haveLikedUser ? "btn-disabled" : ""}`} onClick={likeUser}>Like <i className="fa fa-thumbs-up"></i></Button>
                        </div>
                    </div>
                    <div className='UserName py-3'>
                        <h6 className='m-0'>{endUser?.displayName}</h6>
                    </div>

                    
                    <div className='Male_female pb-3 mt-2'>


                    

                        <div className='MeatsBox'>
                            <div>
                                <span className="svg-icon svg-icon-primary svg-icon-2x"><i className='far fa-user-circle'></i></span>
                                <span>{status ? 'Online' : 'Offline'}</span>
                            </div>
                        </div>
                    </div>

                    <div className='Male_female pb-3'>
                        <div className='MeatsBox'>
                            <div>
                                <span className="svg-icon svg-icon-primary svg-icon-2x"><i className='far fa-user-circle'></i></span>
                                <span>{endUser?.gender}</span>
                            </div>
                            <div>
                                <span className="svg-icon svg-icon-primary svg-icon-2x"><i className='fas fa-map-marker-alt'></i></span>
                                <span>{endUser?.country}</span>
                            </div>
                        </div>
                    </div>
                    <div className='Male_female pb-3'>
                        <div className='MeatsBox'>
                            <div>
                                <span className="svg-icon svg-icon-primary svg-icon-2x"><i className='fas fa-map-marker-alt'></i></span>
                                <span>{`Users Area - ${geoCountry} ${geoState} ${geoCity}`}</span>
                                {countryCode?<ReactCountryFlag countryCode={countryCode} svg />:''}

                            </div>
                        </div>
                    </div>
                    <div className='CommenDrag pb-3'>
                        <h6>Local Time</h6>
                        <p>{getTime(endUser)}</p>
                    </div>
                    <div className='CommenDrag pb-3'>
                        <h6>Age</h6>
                        <p>{getAge(endUser?.birthday)}</p>
                    </div>
                    <div className='CommenDrag pb-3'>
                        <h6>Credits</h6>
                        <p>{credits}</p>
                    </div>
                    <div className='CommenDrag pb-3'>
                        <h6>Free / Paid User</h6>
                        <p>{endUser?.isPaidUser ? "Paid User" : "Free User"}</p>
                    </div>
                    <div className='CommenDrag pb-3'>
                        <h6>About Me</h6>
                        <p>{endUser?.aboutMe}</p>
                    </div>
                    <div className='CommenDrag pb-3'>
                        <h6>Looking For</h6>
                        <p>{endUser?.lookingFor}</p>
                    </div>
                </div>

            </div>
        </>
    );
}
export default RightSideProfileData