import React, { useEffect, useState } from 'react'
import { Utils } from '../../../client/system/Utils'
import { useHistory } from 'react-router-dom'
import { User, UserModel, UserTypes } from '../../../client/user/User'

type Props = {
    className: string
}

const ProfileCreatorList: React.FC<Props> = ({ className }) => {
    const history = useHistory();

    const [profileCreators, setProfileCreators] = useState<UserModel[]>([]);
    const [forceUpdate, setForceUpdate] = useState<boolean>(false);

    const clearProfileCreatorCount = async () => {
        let readers: any[] = [];

        profileCreators.forEach((creator) => {
            if (creator.createdProfiles)
                readers.push(User.ArchiveCreatedProfiles(creator.uuid, creator.createdProfiles));
        });

        await Promise.all(readers).then(async () => {
            console.log("Success Archive");
            setForceUpdate(!forceUpdate);
        })
    }

    useEffect(() => {
        User.GetAllUsers(UserTypes.TYPE_PROFILE_CREATOR).then((models) => {
            if (models)
                setProfileCreators(models);
        })
    }, [forceUpdate])

    return (
        <>
            <div className={`card ${className}`}>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bolder fs-3 mb-1'>Profile Creator List</span>
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
                                    profileCreators?.map((profile, index) => {
                                        let key = `profileRow-${Utils.GenerateRandomID()}`
                                        return (
                                            <tr key={key}>
                                                <td className='text-dark fw-bolder text-hover-primary fs-6'>
                                                    <img src={profile?.photoURL ? profile.photoURL : 'media/avatars/150-3.jpg'} className='PushImageIcon' alt='Images' />
                                                    {profile.displayName}
                                                </td>
                                                <td className='text-dark fw-bolder text-hover-primary fs-6'>
                                                    {/* <button
                                                        className='btn btn-primary ms-auto d-flex'
                                                        type='button'
                                                        data-kt-element='send'
                                                        onClick={() => { viewProfileApprovalPage(profile) }}
                                                    >
                                                        View
                                                    </button> */}
                                                    <div>
                                                        {profile.createdProfiles? profile.createdProfiles.length : 0}
                                                    </div>
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

                <div className='TEst d-flex justify-content-end gap-5 my-5'>
                    <button
                        type='button'
                        className='btn btn-sm bg-primary btn-text-white'
                        onClick={clearProfileCreatorCount}
                    >
                        Archive Current Counts
                    </button>
                </div>
                {/* begin::Body */}
            </div>
        </>
    );
}
export default ProfileCreatorList