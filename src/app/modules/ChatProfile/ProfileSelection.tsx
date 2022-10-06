import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap-v5'
import CountriesV2 from '../../../client/system/CountriesV2'
import { Profile, ProfileModel } from '../../../client/user/Profile'
import { Utils } from '../../../client/system/Utils'
import { useHistory } from 'react-router-dom'
import { IProps } from '../../routing/PrivateRoutes'
import { Chat } from '../../../client/chat/Chat'
import { User, UserModel } from '../../../client/user/User'
import { Presence } from '../../../client/system/Presence'

import { MobileView, BrowserView } from 'react-device-detect';


const ProfileSelection: React.FC<IProps> = props => {
    const { match } = props;

    const history = useHistory();

    const [open, filterOpen] = useState(false);
    const [profiles, setProfiles] = useState<ProfileModel[]>([]);
    const [filteredProfiles, setFilteredProfiles] = useState<ProfileModel[]>([]);

    const [filter, setFilter] = useState<Map<string, any>>(new Map<string, any>());

    const [filterActive, setFilterActive] = useState<boolean>(false);

    const [user, setUser] = useState<UserModel>();
    const [userCredits, setUserCredits] = useState<number>();
    const [ageOfChattedProfilesLabel, setAgeOfChattedProfilesLabel] = useState<string>(null as any);
    const [raceOfChattedProfilesLabel, setRaceOfChattedProfilesLabel] = useState<string>(null as any);

    const getProfileModelById = (profileId: string | undefined): ProfileModel | undefined => {
        return profiles.find((x) => { return x.id === profileId });
    }

    const [userOnlineStatus, setUserOnlineStatus] = useState<boolean>(false);

    useEffect(()=>{
        let userId: string = match.params.id as string;
        User.GetUserAccount(userId).then(async (model) => {
            if(model){
                //console.log(model)
                setUser(model);

                await User.GetUserCredits(userId).then((credits) => {
                    setUserCredits(credits);
                });

                let ages = "";
                if (model.ageOfChattedProfiles) 
                {
                    model.ageOfChattedProfiles.forEach((age) => {
                        let commaAppend = ",";
                        if (model.ageOfChattedProfiles.indexOf(age) === model.ageOfChattedProfiles.length - 1)
                            commaAppend = "";

                        ages += `${age}${commaAppend}`;
                    });
                } else 
                {
                    ages = "None";
                }   


                setAgeOfChattedProfilesLabel(ages);

                let races = "";
                if (model.raceOfChattedProfiles)
                {
                    model.raceOfChattedProfiles.forEach((race) => {
                        let commaAppend = ",";
                        if (model.raceOfChattedProfiles.indexOf(race) === model.raceOfChattedProfiles.length - 1)
                            commaAppend = "";

                        races += `${race}${commaAppend}`;
                    });
                } else 
                {
                    races = "None";
                }
                setRaceOfChattedProfilesLabel(races);

                User.ListenForUserOnlineStatus(userId, (status) => {
                    setUserOnlineStatus(status);
                });
            }  
        })

       return ()=>{
        User.StopListeningForUserOnlineStatus(userId);
       }
      
    }, [match.params.id])

    const SendMessageAsProfile = (profileId: string) => {
        let userId: string = match.params.id as string;
        let siteOfOrigin: string = match.params.site as string;

        let roomId = Chat.GetPrivateChatRoomId(profileId, userId);

        console.log(`ProfileSelection - Try Room Id: ${roomId}`)
        Chat.GetRoomStatus(roomId, siteOfOrigin).then((result) => {
            console.log(`ProfileSelection - is Room Locked: ${result}`);
            if (!result) {
                Presence.LockRoom(roomId, siteOfOrigin).then(() => {
                    User.GetUserAccount(userId).then((model) => {
                        if (model) {
                            User.SetChatterProfile(getProfileModelById(profileId) as ProfileModel);

                            history.push(`${Chat.CHAT_CHATTER_ROOM}/${siteOfOrigin}/${userId}`)

                            //delete chatter request
                            Chat.DeleteConversation(profileId, userId);
                        }
                    })
                })
            } else {
                alert(`This Room is currently Locked!`);
            }
        })
    }

    const addFilter = (key: string, value: string) => {
        let temp: Map<string, any> = new Map<string, any>(filter);
        temp.set(key, value);
        setFilter(temp);
    }

    const getFilterValue = (key: string): string => {
        let value = "";
        if (filter?.has(key))
            value = filter?.get(key);

        return value;
    }

    const applyFilter = () => {    
        let filters = {
            name: filter?.get("name"),
            gender: filter?.get("gender"),
            age: filter?.get("age") as number,
            country: filter?.get("country"),
            sexualOrientation: filter?.get("sexualOrientation"),
            maritalStatus: filter?.get("maritalStatus"),
            weight: filter?.get("weight") as number,
            height: filter?.get("height") as number,
            ethnicity: filter?.get("ethnicity"),
            hairColor: filter?.get("hairColor"),
            eyeColor: filter?.get("eyeColor"),
            bodyType: filter?.get("bodyType"),
            language: filter?.get("language")
        }

        let filteredList: ProfileModel[] = profiles.filter((x) => {
            //console.log(`QQQ Display Name: ${x.displayName} | Filter Name: ${filters.name}`)
            if ((x.displayName.toLowerCase() === filters.name?.toLowerCase() || !filters.name) &&
                (x.gender === filters.gender || !filters.gender) &&
                (x.age === filters.age || !filters.age) &&
                (x.country === filters.country || !filters.country) &&
                (x.sexualOrientation === filters.sexualOrientation || !filters.sexualOrientation) &&
                (x.maritalStatus === filters.maritalStatus || !filters.maritalStatus) &&
                (x.weight === filters.weight || !filters.weight) &&
                (x.height === filters.height || !filters.height) &&
                (x.ethnicity === filters.ethnicity || !filters.ethnicity) &&
                (x.hairColor === filters.hairColor || !filters.hairColor) &&
                (x.eyeColor === filters.eyeColor || !filters.eyeColor) &&
                (x.bodyType === filters.bodyType || !filters.bodyType) &&
                (x.language === filters.language || !filters.language))
            {
                return true;
            } else {
                return false;
            }
        })

        setFilteredProfiles(filteredList);
        setFilterActive(true);
    }

    const clearFilter = () => {
        setFilterActive(false);
        setFilter(new Map<string, any>());
        setFilteredProfiles(profiles);
    }

    useEffect(() => {
        Profile.ListenForProfiles("approved", false, (models) => {
            if (models) 
            {
                setProfiles(models);
                if (!filterActive)
                    setFilteredProfiles(models);
            }

            let unlisten = history.listen((location, action) => {
                if (!location.pathname.includes("/profile-selection")) {
                    Profile.StopListeningForProfiles("approved");
                }

                unlisten();
            });
            
        })
    }, [filterActive, history])

    return (
        <>
            <div className={`card`}>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5 custom-card-header'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bolder fs-3 mb-1'>User Profile</span>
                    </h3>
                </div>

                <div className='card-body py-3 custom-card-body'>

                    <MobileView>
                        <div className='AdminFeed-container'>
                            <div className='AdminFeed-grid userProfile-grid'>

                                <div className='infoInner'>
                                    <p>Username</p>
                                    <h3>{user && user.displayName ? user.displayName : ''}</h3>
                                </div>

                                <div className='infoInner'>
                                    <p>Age</p>
                                    <h3>{user && user.age ? user.age : ''}</h3>
                                </div>

                                <div className='infoInner'>
                                    <p>Location</p>
                                    <h3>{user?.geolocation?.get("countryName") ? user?.geolocation?.get("countryName") : "No Data"}</h3>
                                </div>

                                <div className='infoInner'>
                                    <p>Paid / Free user</p>
                                    <h3>{user?.isPaidUser ? "Paid User": "Free User"}</h3>
                                </div>

                                <div className='infoInner'>
                                    <p>Credits Remaining</p>
                                    <h3>{userCredits}</h3>
                                </div>

                                <div className='infoInner'>
                                    <p>Online / Offline</p>
                                    <h3>{userOnlineStatus? 'Online':'Offline'}</h3>
                                </div>

                                <div className='infoInner'>
                                    <p>Age of profiles chatted</p>
                                    <h3>{ageOfChattedProfilesLabel}</h3>
                                </div>

                                <div className='infoInner'>
                                    <p>Race of profiles chatted</p>
                                    <h3>{raceOfChattedProfilesLabel}</h3>
                                </div>
                            </div>
                        </div>
                    </MobileView>

                    <BrowserView>
                        {/* begin::Table container */}
                        <div className='table-responsive'>
                            {/* begin::Table */}
                            <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                                {/* begin::Table head */}
                                <thead>
                                    <tr className='fw-bolder text-muted'>
                                        <th className='min-w-150px'>Username</th>
                                        <th className='min-w-140px'>Age</th>
                                        <th className='min-w-120px'>Location</th>
                                        <th className='min-w-120px'>Paid / Free user</th>
                                        <th className='min-w-120px'>Credits Remaining</th>
                                        <th className='min-w-120px'>Online / Offline</th>
                                        <th className='min-w-100px'>Age of profiles chatted</th>
                                        <th className='min-w-100px text-end'>Race of profiles chatted</th>
                                    </tr>
                                </thead>
                                {/* end::Table head */}
                                {/* begin::Table body */}
                                <tbody>
                                <tr>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>
                                        {user && user.displayName ? user.displayName : ''}
                                    </td>

                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>
                                        {user && user.age ? user.age : ''}
                                    </td>

                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>
                                        {user?.geolocation?.get("countryName") ? user?.geolocation?.get("countryName") : "No Data"}
                                    </td>

                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>
                                        {user?.isPaidUser ? "Paid User": "Free User"}
                                    </td>

                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>
                                        {userCredits}
                                    </td>

                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>
                                        {userOnlineStatus? 'Online':'Offline'}
                                    </td>

                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>
                                        {ageOfChattedProfilesLabel}
                                    </td>

                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>
                                        {raceOfChattedProfilesLabel}
                                    </td>
                                </tr>   
                                </tbody>
                                {/* end::Table body */}
                            </table>
                            {/* end::Table */}
                        </div>
                        {/* end::Table container */}
                    </BrowserView>
                </div>

                <div className='card-header border-0 pt-5  custom-card-header'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bolder fs-3 mb-1'>Profile Selection</span>
                    </h3>

                    <div className='card-toolbar'>
                        {/* begin::Menu */}
                        <div className="d-flex align-items-center position-relative me-4">
                            <span className="svg-icon svg-icon-3 position-absolute ms-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mh-50px"><rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black"></rect><path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black"></path></svg>
                            </span>
                            <input type="text" id="kt_filter_search" className="form-control form-control-white form-control-sm w-150px ps-9 bg-light" placeholder="Search Profiles" />
                        </div>

                        {/* <button type='button' className='btn btn-sm bg-light btn-color-dark btn-active-light-primary' data-kt-menu-trigger='click' data-kt-menu-placement='bottom-end' data-kt-menu-flip='top-end'>
                            <span className="svg-icon svg-icon-primary svg-icon-1x">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24" />
                                        <path d="M5,4 L19,4 C19.2761424,4 19.5,4.22385763 19.5,4.5 C19.5,4.60818511 19.4649111,4.71345191 19.4,4.8 L14,12 L14,20.190983 C14,20.4671254 13.7761424,20.690983 13.5,20.690983 C13.4223775,20.690983 13.3458209,20.6729105 13.2763932,20.6381966 L10,19 L10,12 L4.6,4.8 C4.43431458,4.5790861 4.4790861,4.26568542 4.7,4.1 C4.78654809,4.03508894 4.89181489,4 5,4 Z" fill="#000000" />
                                    </g>
                                </svg>
                            </span>
                            Filter
                        </button> */}

                        <button className='btn btn-sm bg-light btn-color-dark btn-active-light-primary FilterBtn' onClick={() => filterOpen(!open)} aria-controls="Filter-collapse" aria-expanded={open} ><i className="bi bi-funnel-fill"></i>Filter</button>
                    </div>
                </div>

                {/* Filter Collapse Data */}

                <Collapse in={open}>
                    <div id="Filter-collapse">
                        <div className='row py-5 gy-3'>
                            <div className='col-xl-2 col-lg-3 col-md-3 col-6 common-col'>
                                <input type="text" className="form-control" value={getFilterValue("name")} onChange={(e) => addFilter("name", e.target.value)} placeholder="Name"/>
                            </div>

                            <div className='col-xl-2 col-lg-3 col-md-3 col-6 common-col'>
                                <select required className="form-select" defaultValue={""} value={getFilterValue("gender")} onChange={(e) => addFilter("gender", e.target.value)} aria-label="Select Gender">
                                    <option disabled value="" >Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className='col-xl-2 col-lg-3 col-md-3 col-6 common-col'>
                                <input type="text" className="form-control" value={getFilterValue("age")} onChange={(e) => addFilter("age", e.target.value)} placeholder="Age"/>
                            </div>

                            <div className='col-xl-2 col-lg-3 col-md-3 col-6 common-col'>
                                <select required className="form-select" defaultValue={""} value={getFilterValue("country")} onChange={(e) => addFilter("country", e.target.value)} aria-label="Select Country">
                                    <option key={`country0`} disabled value="">Country</option>
                                    <CountriesV2 />
                                </select>
                            </div>

                            <div className='col-xl-2 col-lg-3 col-md-3 col-6 common-col'>
                                <select required className="form-select" defaultValue={""} value={getFilterValue("sexualOrientation")} onChange={(e) => addFilter("sexualOrientation", e.target.value)} placeholder="Sexual Orientation">
                                    <option disabled value="">Sexual Orientation</option>
                                    <option value="Straight">Straight</option>
                                    <option value="Gay">Gay</option>
                                    <option value="Lesbian">Lesbian</option>
                                    <option value="Bisexual">Bisexual</option>
                                    <option value="Pansexual">Pansexual</option>
                                    <option value="Questioning">Questioning</option>
                                </select>
                            </div>

                            <div className='col-xl-2 col-lg-3 col-md-3 col-6 common-col'>
                                <select required className="form-select" defaultValue={""} value={getFilterValue("maritalStatus")} onChange={(e) => addFilter("maritalStatus", e.target.value)} aria-label="Select MaritalStatus">
                                    <option disabled value="" >Marital Status</option>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                    <option value="Widowed">Widowed</option>
                                    <option value="Separated">Separated</option>
                                    <option value="Divorced">Divorced</option>
                                </select>
                            </div>

                            <div className='col-xl-2 col-lg-3 col-md-3 col-6 common-col'>
                                <input type="number" className="form-control" value={getFilterValue("weight")} onChange={(e) => addFilter("weight", e.target.value)} placeholder="Weight (in lb)"/>
                            </div>

                            <div className='col-xl-2 col-lg-3 col-md-3 col-6 common-col'>
                                <input type="number" className="form-control" value={getFilterValue("height")} onChange={(e) => addFilter("height", e.target.value)} placeholder="Height (in cm)"/>
                            </div>

                            <div className='col-xl-2 col-lg-3 col-md-3 col-6 common-col'>
                                <select required className="form-select" defaultValue={""} value={getFilterValue("ethnicity")} onChange={(e) => addFilter("ethnicity", e.target.value)} aria-label="Select MaritalStatus">
                                    <option disabled value="">Ethnicity</option>
                                    <option value="White">White</option>
                                    <option value="Asian">Asian</option>
                                    <option value="Latino">Latino</option>
                                    <option value="Black">Black</option>
                                </select>
                            </div>

                            <div className='col-xl-2 col-lg-3 col-md-3 col-6 common-col'>
                                <select required className="form-select" defaultValue={""} value={getFilterValue("hairColor")} onChange={(e) => addFilter("hairColor", e.target.value)} aria-label="Select MaritalStatus">
                                    <option disabled value="">Hair Color</option>
                                    <option value="Black">Black</option>
                                    <option value="Brown">Brown</option>
                                    <option value="Blonde">Blonde</option>
                                    <option value="Red">Red</option>
                                    <option value="Gray">Gray</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className='col-xl-2 col-lg-3 col-md-3 col-6 common-col'>
                                <select required className="form-select" defaultValue={""} value={getFilterValue("eyeColor")} onChange={(e) => addFilter("eyeColor", e.target.value)} aria-label="Select MaritalStatus">
                                    <option disabled value="">Eye Color</option>
                                    <option value="Brown">Brown</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Hazel">Hazel</option>
                                    <option value="Amber">Amber</option>
                                    <option value="Green">Green</option>
                                    <option value="Gray">Gray</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className='col-xl-2 col-lg-3 col-md-3 col-6 common-col'>
                                <select required className="form-select" defaultValue={""} value={getFilterValue("bodyType")} onChange={(e) => addFilter("bodyType", e.target.value)} aria-label="Select MaritalStatus">
                                    <option disabled value="">Body Type</option>
                                    <option value="Slim">Slim</option>
                                    <option value="Normal">Normal</option>
                                    <option value="Athletic">Athletic</option>
                                    <option value="Heavy">Heavy</option>
                                </select>
                            </div>

                            {/* <div className='col-xl-2 col-lg-3 col-md-3 col-6 common-col'>
                                <select required className="form-select" aria-label="Select MaritalStatus">
                                    <option disabled value="" >City</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                </select>
                            </div>

                            <div className='col-xl-2 col-lg-3 col-md-3 col-6 common-col'>
                                <select required className="form-select" aria-label="Select MaritalStatus">
                                    <option disabled value="" selected>State</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                </select>
                            </div> */}

                            <div className='col-xl-2 col-lg-3 col-md-3 col-6 common-col'>
                                <select required className="form-select" defaultValue={""} value={getFilterValue("language")} onChange={(e) => addFilter("language", e.target.value)} aria-label="Select MaritalStatus">
                                    <option disabled value="">Language</option>
                                    <option value="English">English</option>
                                    <option value="Spanish">Spanish</option>
                                    <option value="French">French</option>
                                    <option value="German">German</option>
                                    <option value="Portuguese">Portuguese</option>
                                    <option value="Italian">Italian</option>
                                    <option value="Dutch">Dutch</option>
                                    <option value="Danish">Danish</option>
                                    <option value="Finnish">Finnish</option>
                                    <option value="Norwegian">Norwegian</option>
                                    <option value="Swedish">Swedish</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* <div className='col-xl-2 col-lg-3 col-md-3 col-6 common-col'>
                                <select required className="form-select" aria-label="Select MaritalStatus">
                                    <option disabled value="" selected>Second Language</option>
                                    <option value="English">English</option>
                                    <option value="Spanish">Spanish</option>
                                    <option value="French">French</option>
                                    <option value="German">German</option>
                                    <option value="Portuguese">Portuguese</option>
                                    <option value="Italian">Italian</option>
                                    <option value="Dutch">Dutch</option>
                                    <option value="Danish">Danish</option>
                                    <option value="Finnish">Finnish</option>
                                    <option value="Norwegian">Norwegian</option>
                                    <option value="Swedish">Swedish</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div> */}

                            <div className='col-xl-2 col-lg-3 col-md-3 col-6 common-col filter-submit'>
                                <button type='submit' onClick={applyFilter} className='btn btn-primary btn-sm'>Submit</button>
                            </div>

                            <div className='col-xl-2 col-lg-3 col-md-3 col-6 common-col filter-submit'>
                                <button type='submit' onClick={clearFilter} className='btn btn-primary btn-sm'>Clear</button>
                            </div>
                        </div>
                    </div>
                </Collapse>

                {/* Filter Collapse Data end */}

                <div className='card-body py-3  custom-card-body'>

                    <MobileView>
                        <div className='AdminFeed-container'>
                        {
                                        filteredProfiles?.map((profile, index) => {
                                            let key =`profileRow-${Utils.GenerateRandomID()}`
                                            return (
                            <div key={key} className='AdminFeed-grid'>
                                <div className='Profile-info Profileselection-info'>
                                    <div className='profileThumbnail'>
                                        <img src={profile.photoURL} alt="" />
                                    </div>

                                    <div className='Thumbnail-details'>
                                        <h3>{profile.displayName}</h3>
                                    </div>
                                </div>

                                <div className='infoInner'>
                                    <p>Gender</p>
                                    <h3>{profile.gender}</h3>
                                </div>

                                <div className='infoInner'>
                                    <p>Age</p>
                                    <h3>{profile.age}</h3>
                                </div>

                                <div className='infoInner'>
                                    <p>Country</p>
                                    <h3>{profile.country}</h3>
                                </div>

                                <div className='infoInner'>
                                    <p>Appearance</p>
                                    <h3>{profile.bodyType}</h3>
                                </div>

                                <div className='infoInner'>
                                    <p>Sexual Orientation</p>
                                    <h3>{profile.sexualOrientation}</h3>
                                </div>

                                <div className='infoInner'>
                                    <p>Marital Status</p>
                                    <h3>{profile.maritalStatus}</h3>
                                </div>

                                <div className='infoBtns'>
                                    <button onClick={() => { SendMessageAsProfile(profile.id) }} className='btn btn-primary' type='button'>Send Message</button>
                                </div>
                            </div>)
                        })}
                        </div>
                    </MobileView>

                    <BrowserView>
                        {/* begin::Table container */}
                        <div className='table-responsive'>
                            {/* begin::Table */}
                            <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                                {/* begin::Table head */}
                                <thead>
                                    <tr className='fw-bolder text-muted'>
                                        <th className='min-w-150px'>&nbsp;</th>
                                        <th className='min-w-140px'>Gender</th>
                                        <th className='min-w-120px'>Age</th>
                                        <th className='min-w-120px'>Country</th>
                                        <th className='min-w-120px'>Appearance</th>
                                        <th className='min-w-120px'>Sexual Orientation</th>
                                        <th className='min-w-100px'>Marital Status</th>
                                        <th className='min-w-100px text-end'>Action</th>
                                    </tr>
                                </thead>
                                {/* end::Table head */}
                                {/* begin::Table body */}
                                <tbody>
                                    {
                                        filteredProfiles?.map((profile, index) => {
                                            let key =`profileRow-${Utils.GenerateRandomID()}`
                                            return (
                                                <tr key={key}>
                                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>
                                                        <img src={profile.photoURL} className='PushImageIcon' alt='Images' />
                                                        {profile.displayName}
                                                    </td>
                                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>
                                                        {profile.gender}
                                                    </td>
                                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>
                                                        {profile.age}
                                                    </td>
                                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>
                                                        {profile.country}
                                                    </td>
                                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>{profile.bodyType}</td>
                                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>{profile.sexualOrientation}</td>
                                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>{profile.maritalStatus}</td>
                                                    <td className='text-end'>
                                                        <button
                                                            className='btn btn-primary'
                                                            type='button'
                                                            data-kt-element='send'
                                                            onClick={() => { SendMessageAsProfile(profile.id) }}
                                                        >
                                                            Send Message
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                {/* end::Table body */}
                            </table>
                            {/* end::Table */}
                        </div>
                        {/* end::Table container */}
                    </BrowserView>

                </div>
                {/* begin::Body */}
            </div>
        </>
    );
}
export default ProfileSelection