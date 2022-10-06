import React, { useEffect, useState } from 'react'
import { Profile, ProfileModel } from '../../../client/user/Profile'
import { Utils } from '../../../client/system/Utils'
import { useHistory } from 'react-router-dom'
import { SessionHandler, SessionKeys } from '../../../client/system/SessionHandler'

type Props = {
    className: string
}

const ProfileDeclinedList: React.FC<Props> = ({ className }) => {
    const [profiles, setProfiles] = useState<ProfileModel[]>([]);

    const history = useHistory();

    const viewProfileEditPage = (model: ProfileModel) => {
        SessionHandler.SetItem(SessionKeys.SESSION_EDIT_PROFILE_PREV_LOCATION, history.location.pathname);
        history.push(`/profile-edit/${model.id}`);
    }

    useEffect(() => {
        Profile.ListenForProfiles("declined", false, (models) => {
            if (models) {
                setProfiles(models);
            }

            let unlisten = history.listen((location, action) => {
                if (!location.pathname.includes("/profile-edit-list")) {
                    Profile.StopListeningForProfiles("declined");
                }

                unlisten();
            });
        })
    }, [history])

    return (
        <>
            <div className={`card ${className}`}>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bolder fs-3 mb-1'>Profile Declined List</span>
                    </h3>
                </div>

                <div className='card-body py-3'>
                    {/* begin::Table container */}
                    <div className='table-responsive'>
                        {/* begin::Table */}
                        <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                            {/* begin::Table head */}

                            {/* end::Table head */}
                            {/* begin::Table body */}
                            <tbody>
                                {
                                    profiles?.map((profile, index) => {
                                        let key = `profileRow-${Utils.GenerateRandomID()}`
                                        return (
                                            <tr key={key}>
                                                <td className='text-dark fw-bolder text-hover-primary fs-6'>
                                                    <img src={profile?.photoURL ? profile.photoURL : 'media/avatars/150-3.jpg'} className='PushImageIcon' alt='Images' />
                                                    {profile.displayName}
                                                </td>
                                                <td className='text-dark fw-bolder text-hover-primary fs-6'>
                                                    <button
                                                        className='btn btn-primary ms-auto d-flex'
                                                        type='button'
                                                        data-kt-element='send'
                                                        onClick={() => { viewProfileEditPage(profile) }}
                                                    >
                                                        Edit
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
                </div>
                {/* begin::Body */}
            </div>
        </>
    );
}
export default ProfileDeclinedList