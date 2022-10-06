import React from 'react'
import { User } from '../../../../client/user/User';

const ProfileData: React.FC = () => {
    return (
        <>
        <div id='Profile_Data' className='Scrolling-Top'>
            <div className="card card-custom shadow mb-5">
                <div className="card-header p-5">
                    <h3 className="card-title">Profile Data</h3>
                </div>
                <div className="card-body p-5">
                    <div className='UserImage'>
                        <img src={User.Model && User.Model?.profile ? User.Model?.profile?.photoURL : 'media/avatars/150-3.jpg'} alt="Pic" />
                        <span className='DotOnline'></span>
                    </div>
                    <div className='UserName py-3'>
                        <h6 className='m-0'>{User.Model?.profile?.displayName}</h6>
                    </div>
                    <div className='Male_female pb-3'>
                        <span className="svg-icon svg-icon-primary svg-icon-2x"><i className='far fa-user-circle'></i></span>
                        <span>{User.Model?.profile?.gender}</span>
                    </div>
                    <div className='CommenDrag pb-3'>
                        <h6>Age</h6>
                        <p>{User.Model?.profile?.age}</p>
                    </div>
                    <div className='CommenDrag pb-3'>
                        <h6>About Me</h6>
                        <p>{User.Model?.profile?.aboutMe}</p>
                    </div>
                    <div className='CommenDrag pb-3'>
                        <h6>Looking For</h6>
                        <p>{User.Model?.profile?.lookingFor}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default ProfileData