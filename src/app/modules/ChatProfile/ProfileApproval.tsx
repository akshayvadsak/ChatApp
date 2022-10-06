import FsLightbox from 'fslightbox-react';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Profile, ProfileModel } from '../../../client/user/Profile';
import { ProfileImageModel } from '../../../_metronic/helpers';

import '../../../_metronic/assets/sass/core/vendors/plugins/_fslightbox_default.scss';
import { IProps } from '../../routing/PrivateRoutes';
import { User, UserModel } from '../../../client/user/User';
import { Utils } from '../../../client/system/Utils';
import { SessionHandler, SessionKeys } from '../../../client/system/SessionHandler';

import CircularProgress from '@mui/material/CircularProgress';
import { FileHandler } from '../../../client/system/FileHandler';

const ProfileApproval: React.FC<IProps> = props => {
    const { match } = props;

    const [profileModel, setProfileModel] = useState<ProfileModel>(null as any);
    const [photoLoaded, setPhotoLoaded] = useState<boolean>(false);
    const [profileToggler, setProfileToggler] = useState<boolean>(false);
    const [publicToggler, setPublicToggler] = useState<boolean>(false);
    const [privateToggler, setPrivateToggler] = useState<boolean>(false);
    const [lightboxIndex, setLightboxIndex] = useState<number>(0);
    const [lightboxSources, setLightboxSources] = useState<string[]>([]);

    const [privateSources, setPrivateSources] = useState<string[]>([]);
    const [publicSources, setPublicSources] = useState<string[]>([]);

    const [imageDimensions, setImageDimensions] = useState<Map<string, any>>();
    const [imageSizes, setImageSizes] = useState<Map<string, number>>();

    const history = useHistory();

    const toggleLightbox = (index: number, imageType: string) => {
        setLightboxIndex(index);
        if (imageType === "private")
            setPrivateToggler(!privateToggler)
        else if (imageType === "public")
            setPublicToggler(!publicToggler)
        else if (imageType === "profile")
            setProfileToggler(!profileToggler)
    }

    const approveProfile = () => {
        Profile.ApproveProfile(profileModel.id, true, profileModel.creator).then(() => {
            alert(`Profile: ${profileModel.displayName} Approved!`)
            history.push("/profile-approval-list");
        })
    }

    const declineProfile = () => {
        Profile.ApproveProfile(profileModel.id, false, profileModel.creator).then(() => {
            alert(`Profile: ${profileModel.displayName} Denied!`)
            history.push("/profile-approval-list");
        })
    }

    const editProfile = () => {
        SessionHandler.SetItem(SessionKeys.SESSION_EDIT_PROFILE_PREV_LOCATION, history.location.pathname);
        history.push(`/profile-edit/${profileModel.id}`);
    }

    useEffect(() => {
        let profile_id = match.params.id as string;

        Profile.GetProfile(profile_id).then((model) => {
            setProfileModel(model);
            Profile.GetAllProfileImages(profile_id).then(async (images) => {
                let publicPics: ProfileImageModel[] = [];
                let privatePics: ProfileImageModel[] = [];

                let publicUrl: string[] = [];
                let privateUrl: string[] = [];

                if (images) {
                    images.forEach((image) => {
                        switch (image.info.type) {
                            case "public":
                                publicPics.push(image);
                                publicUrl.push(image.info.photoURL);
                                break;
                            case "private":
                                privatePics.push(image);
                                privateUrl.push(image.info.photoURL);
                                break;
                        }
                    })
                }

                model.privatePhotos = privatePics;
                model.publicPhotos = publicPics;

                setPrivateSources(privateUrl);
                setPublicSources(publicUrl);

                for (let i = 0; i < model.privatePhotos.length; i++)
                {
                    let img = model.privatePhotos[i];

                    
                    await FileHandler.GetImageMetaData(img.info.photoURL).then((data) => {
                        img.info.size = data.size / 1000;
                    })

                    const image = new Image();
                    image.src = img.info.photoURL;
                    image.onload = () => {
                        img.info.height = image.height;
                        img.info.width = image.width;
                    }
                }

                for (let i = 0; i < model.publicPhotos.length; i++) {
                    let img = model.publicPhotos[i];


                    await FileHandler.GetImageMetaData(img.info.photoURL).then((data) => {
                        img.info.size = data.size / 1000;
                    })

                    const image = new Image();
                    image.src = img.info.photoURL;
                    image.onload = () => {
                        img.info.height = image.height;
                        img.info.width = image.width;
                    }
                }

                setPhotoLoaded(true);
            }).catch((reason) => {
                console.log(`Failed to get Pictures. Reason ${reason}`);
                setProfileModel(model);
            })
        });
    }, [match])

    const getImageName = (name:any) => {
        const imageFullnameResult = name.match(/.+(\/|%2F)(.+)/);

  if (!imageFullnameResult) return null;

  const imageFullname = imageFullnameResult[2];

  const imageNameResult = imageFullname.match(
    /.+(jpg|png|svg|jpeg|webp|bmp|gif)/
  );

  if (!imageNameResult) return imageFullname;

  const imageName = imageNameResult[0];

  if (!imageName) return null;

  return imageName;
        
    }


    return (
        <>
            <FsLightbox
                toggler={publicToggler}
                sources={publicSources}
                sourceIndex={lightboxIndex}
                showThumbsOnMount={true}
            />

            <FsLightbox
                toggler={privateToggler}
                sources={privateSources}
                sourceIndex={lightboxIndex}
                showThumbsOnMount={true}
            />

            <FsLightbox
                toggler={profileToggler}
                sources={[profileModel?.photoURL]}
                sourceIndex={lightboxIndex}
                showThumbsOnMount={true}
            />
            {
                profileModel ?
                    <div className={`card`}>
                        <div className="card-body p-5">
                            <div className='row'>
                                <div className='col-lg-7'>
                                    <div className='PartHere'>
                                        <div className='UserImage'>
                                            <div className='ProfileImage overlay' onClick={() => toggleLightbox(0, "profile")}>
                                                <img src={profileModel ? profileModel?.photoURL : 'media/avatars/150-2.jpg'} alt="Pic" />

                                                <div className="overlay-layer card-rounded bg-dark bg-opacity-25 shadow">
                                                    <i className="bi bi-eye-fill text-white fs-2x"></i>
                                                </div>
                                            </div>
                                            <span className='DotOnline'></span>
                                        </div>

                                        <div className='UserName py-3'>
                                            <h6 className='m-0'>{
                                            profileModel && profileModel.photoURL!=null ? getImageName(profileModel.photoURL) : 'media/avatars/150-2.jpg'}
                                            </h6>
                                        </div>
                                        

                                    </div>

                                    <div className='UserName py-3'>
                                        <h6 className='m-0'>{`${profileModel?.displayName} ${profileModel?.age}`} </h6>
                                    </div>
                                    <div className='Male_female pb-3'>
                                        <div className='MeatsBox'>
                                            <div>
                                                <span className="svg-icon svg-icon-primary svg-icon-2x"><i className='far fa-user-circle'></i></span>
                                                <span>{profileModel?.gender}</span>
                                            </div>
                                            <div>
                                                <span className="svg-icon svg-icon-primary svg-icon-2x"><i className='fas fa-map-marker-alt'></i></span>
                                                <span>{`${profileModel?.country}`}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='CommenDrag py-4'>
                                        <h3>My Profile Details</h3>
                                    </div>
                                    <div className='CommenDrag pb-3'>
                                        <h6>About Me</h6>
                                        {/* <p>i have different comfort zones around different people so l'm not always as <br></br> open with some people as i am with other. i attempt to be funny with <br></br> sarcasm, & innuendos are my thing.</p> */}
                                        <p>{profileModel?.aboutMe}</p>
                                    </div>
                                    <div className='CommenDrag pb-3'>
                                        <h6>Looking For</h6>
                                        {/* <p>No Pressure, no rush to setttle worong . I'll wait for hime under unexplainable <br></br>
                                    cirumstances until i am sure.</p> */}
                                        {profileModel?.lookingFor}
                                    </div>
                                    <div className="separator my-5"></div>
                                    <div className='row'>
                                        <div className='col-lg-12 col-12'>
                                            <div className='row'>
                                                <div className='col-lg-3'>
                                                    <div className='InnerPros'>
                                                        <h4>Height</h4>
                                                        <p>{profileModel?.height} cm</p>
                                                    </div>
                                                </div>

                                                <div className='col-lg-3'>
                                                    <div className='InnerPros'>
                                                        <h4>Weight</h4>
                                                        <p>{profileModel?.weight} lbs</p>
                                                    </div>
                                                </div>

                                                <div className='col-lg-3'>
                                                    <div className='InnerPros'>
                                                        <h4>Hair Color</h4>
                                                        <p>{profileModel?.hairColor}</p>
                                                    </div>
                                                </div>

                                                <div className='col-lg-3'>
                                                    <div className='InnerPros'>
                                                        <h4>Eye Color</h4>
                                                        <p>{profileModel?.eyeColor}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="separator my-5"></div>

                                            <div className='row'>
                                                <div className='col-lg-4'>
                                                    <div className='InnerPros'>
                                                        <h4>Marital Status</h4>
                                                        <p>{profileModel?.maritalStatus}</p>
                                                    </div>
                                                </div>

                                                <div className='col-lg-4'>
                                                    <div className='InnerPros'>
                                                        <h4>Body Type</h4>
                                                        <p>{profileModel?.bodyType}</p>
                                                    </div>
                                                </div>

                                                <div className='col-lg-4'>
                                                    <div className='InnerPros'>
                                                        <h4>Ethnicity</h4>
                                                        <p>{profileModel?.ethnicity}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="separator my-5"></div>
                                            <div className='row'>
                                                <div className='col-lg-4'>
                                                    <div className='InnerPros'>
                                                        <h4>Language</h4>
                                                        <p>{profileModel?.language}</p>
                                                    </div>
                                                </div>

                                                {/* <div className='col-lg-4'>
                                            <div className='InnerPros'>
                                                <h4>Second Language</h4>
                                                <p>English</p>
                                            </div>
                                        </div> */}
                                            </div>
                                            <div className="separator my-5"></div>
                                            <div className='row mt-5 mb-3 gap-3'>
                                                <div className='col-lg-4'>
                                                    <button
                                                        type='button'
                                                        className='btn btn-md bg-primary btn-text-white w-100'
                                                        onClick={declineProfile}
                                                    >
                                                        Decline
                                                    </button>
                                                </div>

                                                <div className='col-lg-4'>
                                                    <button
                                                        type='button'
                                                        className='btn btn-md bg-primary btn-text-white w-100'
                                                        onClick={approveProfile}
                                                    >
                                                        Approve
                                                    </button>
                                                </div>

                                                <div className='col-lg-4'>
                                                    <button
                                                        type='button'
                                                        className='btn btn-md bg-primary btn-text-white w-100'
                                                        onClick={editProfile}
                                                    >
                                                        Edit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-5'>
                                    <div className='ImageGalley'>
                                        <div className='CommenDrag pb-4'>
                                            <h3>Public Images</h3>
                                        </div>
                                        <div className='ScrollsPrivateImages'>
                                            <ul className='AllPrivateImages withName'>
                                                {
                                                    photoLoaded ? 
                                                        profileModel?.publicPhotos?.map((image, index) => {
                                                            let size = image.info.size ? image.info.size : "N/A";
                                                            let height = image.info.height ? image.info.height : "N/A";
                                                            let width = image.info.width ? image.info.width : "N/A";
                                                            return (
                                                                <li key={`public-image@${Utils.GenerateRandomID()}`} className='PrivateImages overlay' onClick={() => toggleLightbox(index, "public")} >
                                                                    <div className='imgBox'>
                                                                        <img src={image.info.photoURL ? image.info.photoURL : 'media/avatars/150-1.jpg'} alt="Pic" />

                                                                        <div className="overlay-layer card-rounded bg-dark bg-opacity-25 shadow">
                                                                            <i className="bi bi-eye-fill text-white fs-2x"></i>
                                                                        </div>
                                                                    </div>

                                                                    <div className='nameDetails'>
                                                                        <h6>{
                                            image.info.photoURL && image.info.photoURL!=null ? getImageName(image.info.photoURL) : 'media/avatars/150-2.jpg'}</h6>
                                                                        <p>Size: {size} Kb</p>
                                                                        <p>Width: {width} px</p>
                                                                        <p>Height: {height} px</p>
                                                                    </div>
                                                                </li>
                                                            )
                                                        })
                                                    :
                                                        <div className="spinnerLoder"><CircularProgress /></div>
                                                }
                                            </ul>

                                            <div className='MoreImages py-4'>
                                                <button type="button" className="btn btn-secondary w-100">
                                                    More Images
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ImageGalley mt-5'>
                                        <div className='CommenDrag py-4'>
                                            <h3>Private Images</h3>
                                        </div>

                                        <div className='ScrollsPrivateImages'>
                                            <ul className='AllPrivateImages withName'>
                                                {
                                                    photoLoaded ?
                                                        profileModel?.privatePhotos?.map((image, index) => {
                                                            let size = image.info.size ? image.info.size : "N/A";
                                                            let height = image.info.height ? image.info.height : "N/A";
                                                            let width = image.info.width ? image.info.width : "N/A";

                                                            return (
                                                                <li key={`private-image@${Utils.GenerateRandomID()}`} className='PrivateImages overlay' onClick={() => toggleLightbox(index, "private")} >
                                                                    <div className='imgBox'>
                                                                        <img src={image.info.photoURL ? image.info.photoURL : 'media/avatars/150-1.jpg'} alt="Pic" />

                                                                        <div className="overlay-layer card-rounded bg-dark bg-opacity-25 shadow">
                                                                            <i className="bi bi-eye-fill text-white fs-2x"></i>
                                                                        </div>
                                                                    </div>

                                                                    <div className='nameDetails'>
                                                                        <h6>{
                                            image.info.photoURL && image.info.photoURL!=null ? getImageName(image.info.photoURL) : 'media/avatars/150-2.jpg'}</h6>
                                                                        <p>Size: {size} Kb</p>
                                                                        <p>Width: {width}px</p>
                                                                        <p>Height: {height}px</p>
                                                                    </div>

                                                                </li>
                                                            )
                                                        })
                                                    :
                                                        <div className="spinnerLoder"><CircularProgress /></div>
                                                }
                                            </ul>


                                            <div className='MoreImages py-4'>
                                                <button type="button" className="btn btn-secondary w-100">
                                                    More Images
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <></>
            }
        </>
    );
}
export default ProfileApproval