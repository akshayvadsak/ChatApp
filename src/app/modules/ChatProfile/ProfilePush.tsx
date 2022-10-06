import React, { useEffect, useState } from 'react'
import { KTSVG } from '../../../_metronic/helpers'
import { Collapse } from 'react-bootstrap-v5'
import CountriesV2 from '../../../client/system/CountriesV2'
import { Profile, ProfileModel } from '../../../client/user/Profile'
import { Utils } from '../../../client/system/Utils'
import { useHistory } from 'react-router-dom'
import { SessionHandler, SessionKeys } from '../../../client/system/SessionHandler'

type Props = {
    className: string
}

const ProfilePush: React.FC<Props> = ({ className }) => {
    const history = useHistory();

    const [globalCheck, setGlobalCheck] = useState<boolean>(false);
    const [domainsList, setDomainsList] = useState<string[]>([]);
    const [pushList, setPushList] = useState<string[]>([]);

    const [open, filterOpen] = useState(false);
    const [profiles, setProfiles] = useState<ProfileModel[]>([]);
    const [filteredProfiles, setFilteredProfiles] = useState<ProfileModel[]>([]);

    const [filter, setFilter] = useState<Map<string, any>>(new Map<string, any>());

    const [filterActive, setFilterActive] = useState<boolean>(false);

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

    const handleGlobalCheck = (checkedState: boolean) => {
        setGlobalCheck(checkedState);

        if (checkedState) {
        const list = [...pushList];
        filteredProfiles.map((e) => {
            list.push(e.id);
        })
        setPushList(list);
        } else {
            setPushList([])
        }
        
    }

    const toggleProfileForSitePush = (checkedState: boolean, id: string) => {
        let pendingList = [...pushList];
        if (checkedState)
        {
            if (!pendingList.includes(id))
                pendingList.push(id);
            else
                pendingList[pendingList.indexOf(id)] = id;
        } else 
        {
            if (pendingList.includes(id))
            {
                let index = pendingList.indexOf(id);
                if (index > -1)
                    pendingList.splice(index, 1);
            }
        }

        setPushList(pendingList);
    }

    const toggleDomainsForSitePush = (checkedState: boolean, id: string) => {
        let pendingList = [...domainsList];

        if (checkedState) {
            if (!pendingList.includes(id))
                pendingList.push(id);
            else
                pendingList[pendingList.indexOf(id)] = id;
        } else {
            if (pendingList.includes(id)) {
                let index = pendingList.indexOf(id);
                if (index > -1)
                    pendingList.splice(index, 1);
            }
        }

        setDomainsList(pendingList);
    }

    const checkSelectionState = (profile_id: string): boolean => {
        let exists = false;

        if (pushList.includes(profile_id))
            exists = true;

        return exists;
    }

    const checkDomainSelectionState = (id: string): boolean => {
        let exists = false;

        if (domainsList.includes(id))
            exists = true;

        return exists;
    }

    const pushToSites = () => {
        if (pushList.length <= 0)
        {
            alert("No Profiles Selected");
            return;
        }

        let successCount = 0;
        
        let readers: any[] = [];
        let sites: string[] = [];

        sites.push("chat-hub-users");
        sites.push("localhost");
        sites.push("flirtybum");

        pushList.forEach((id) => {
            let promise = Profile.PushToSite(id, sites).then(() => {
                successCount++;
            })
            readers.push(promise);
        })

        Promise.all(readers).then((values) => {
            setTimeout(waitForPush, 100);
        })

        const waitForPush = () => {
            if (successCount !== pushList.length)
                setTimeout(waitForPush, 100);
            else 
            {
                alert("Succesfully pushed profiles to sites!");
                Utils.RefreshPage();
            }
        }
    }

    const editProfile = (profileId: string) => {
        SessionHandler.SetItem(SessionKeys.SESSION_EDIT_PROFILE_PREV_LOCATION, history.location.pathname);
        history.push(`/profile-edit/${profileId}`);
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
                if (!location.pathname.includes("/profile-push")) {
                    Profile.StopListeningForProfiles("approved");
                }

                unlisten();
            });
            
        })

        Profile.GetSitesList().then((domains) => {
            if (domains)
                setDomainsList(domains);
        });
    }, [filterActive, history])

    return (
        <>
            <div className={`card ${className}`}>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bolder fs-3 mb-1'>Profile Push</span>
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

                <div className='card-body py-3'>
                    {/* begin::Table container */}
                    <div className='table-responsive'>
                        {/* begin::Table */}
                        <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                            {/* begin::Table head */}
                            <thead>
                                <tr className='fw-bolder text-muted'>
                                    <th className='w-25px'>
                                        <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                            <input
                                                className='form-check-input'
                                                type='checkbox'
                                                checked={globalCheck}
                                                onChange={(e) => { handleGlobalCheck(e.target.checked) }}
                                                data-kt-check='true'
                                                data-kt-check-target='.widget-13-check'
                                            />
                                        </div>
                                    </th>
                                    <th className='min-w-150px'>&nbsp;</th>
                                    <th className='min-w-140px'>Gender</th>
                                    <th className='min-w-120px'>Age</th>
                                    <th className='min-w-120px'>Country</th>
                                    <th className='min-w-120px'>Appearance</th>
                                    <th className='min-w-120px'>Sexual Orientation</th>
                                    <th className='min-w-100px'>Marital Status</th>
                                    <th className='min-w-100px'>Pushed to FlirtyBum</th>
                                    <th className='min-w-50px'>Edit</th>
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
                                                <td>
                                                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                                        <input className='form-check-input widget-13-check' type='checkbox' checked={checkSelectionState(profile.id)} value={profile.id} onChange={(e) => { toggleProfileForSitePush(e.target.checked, e.target.value) }} />
                                                    </div>
                                                </td>
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
                                                <td className='text-dark fw-bolder text-hover-primary fs-6' style={{textAlign: 'center'}}>
                                                    {
                                                        profile.sites?.includes("flirtybum") ? 
                                                            <i className="bi bi-check" style={{ color: 'green', fontSize: '175%' }}></i>
                                                        :
                                                            <i className="bi bi-x" style={{ color: 'red', fontSize: '175%' }}></i>
                                                    }
                                                    
                                                </td>
                                                <td className='text-end'>
                                                    {/* <div
                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                    >
                                                        <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                                                    </div> */}
                                                    <div
                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                        onClick={() => {editProfile(profile.id)}}
                                                    >
                                                        <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                                    </div>
                                                    {/* <div className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                                        <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                                                    </div> */}
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                {/* <tr>
                                    <td>
                                        <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                            <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                                        </div>
                                    </td>
                                    <td>
                                        <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                            <img src='media/avatars/150-3.jpg' className='PushImageIcon' alt='Images' />
                                            Melody Macy
                                        </a>
                                    </td>
                                    <td>
                                        <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                            Female
                                        </a>
                                    </td>
                                    <td>
                                        <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                            23
                                        </a>
                                    </td>
                                    <td>
                                        <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                            USA
                                        </a>
                                    </td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>Skinny</td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>Straight</td>
                                    <td className='text-dark fw-bolder text-hover-primary fs-6'>Single</td>
                                    <td className='text-end'>
                                        <a
                                            href='#'
                                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                        >
                                            <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                                        </a>
                                        <a
                                            href='#'
                                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                        >
                                            <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                        </a>
                                        <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                            <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                                        </a>
                                    </td>
                                </tr> */}
                            </tbody>
                            {/* end::Table body */}
                        </table>
                        {/* end::Table */}
                    </div>
                    {/* end::Table container */}

                    <div className='TEst d-flex justify-content-end gap-5 my-5'>
                        <div className='card-toolbar'>
                            {/* begin::Menu */}
                            <button
                                type='button'
                                className='btn btn-sm bg-light btn-color-dark btn-active-light-primary'
                                data-kt-menu-trigger='click'
                                data-kt-menu-placement='bottom-end'
                                data-kt-menu-flip='top-end'
                            >
                                <span className="svg-icon svg-icon-primary svg-icon-1x">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <rect x="0" y="0" width="24" height="24" />
                                            <path d="M5,4 L19,4 C19.2761424,4 19.5,4.22385763 19.5,4.5 C19.5,4.60818511 19.4649111,4.71345191 19.4,4.8 L14,12 L14,20.190983 C14,20.4671254 13.7761424,20.690983 13.5,20.690983 C13.4223775,20.690983 13.3458209,20.6729105 13.2763932,20.6381966 L10,19 L10,12 L4.6,4.8 C4.43431458,4.5790861 4.4790861,4.26568542 4.7,4.1 C4.78654809,4.03508894 4.89181489,4 5,4 Z" fill="#000000" />
                                        </g>
                                    </svg>
                                </span>
                                Select Sites
                            </button>
                            {/* begin::Menu 2 */}
                            <div
                                className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px'
                                data-kt-menu='true'
                            >
                                {/* begin::Menu item */}
                                <div className='menu-item px-3'>
                                    <div className='menu-content fs-6 text-dark fw-bolder px-3 py-4'>Select the Sites that you would like to push the profiles to.</div>
                                </div>
                                {/* end::Menu item */}
                                {/* begin::Menu separator */}
                                <div className='separator mb-3 opacity-75'></div>
                                {/* end::Menu separator */}
                                {/* begin::Menu item */}
                                {/* <div className='menu-item px-3 mb-2'>
                                    <a href='#'>abc.com</a>
                                </div> */}
                                {
                                    domainsList?.map((domain) => {
                                        return (
                                            <div key={`domain@${Utils.GenerateRandomID()}`} className='menu-item px-3 mb-2'>
                                                <input
                                                    className='form-check-input'
                                                    type='checkbox'
                                                    checked={checkDomainSelectionState(domain)}
                                                    value={domain}
                                                    onChange={(e) => {toggleDomainsForSitePush(e.target.checked, e.target.value)} }
                                                    data-kt-check='true'
                                                    data-kt-check-target='.widget-13-check'
                                                />
                                                <p>{domain}</p>
                                            </div>
                                        )
                                    })
                                }
                                {/* <div className='menu-item px-3 mb-2'>
                                    <a href='#'>abc.com</a>
                                </div>
                                <div className='menu-item px-3 mb-2'>
                                    <a href='#'>abc.com</a>
                                </div> */}
                                {/* end::Menu item */}
                            </div>
                            {/* end::Menu 2 */}
                            {/* end::Menu */}
                        </div>
                        <button
                            type='button'
                            className='btn btn-sm bg-primary btn-text-white'
                            onClick={pushToSites}
                        >
                            Push To Sites
                        </button>
                    </div>
                </div>
                {/* begin::Body */}
            </div>
        </>
    );
}
export default ProfilePush