import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Profile, ProfileModel } from '../../../client/user/Profile';
import { ProfileImageModel } from '../../../_metronic/helpers';

import '../../../_metronic/assets/sass/core/vendors/plugins/_fslightbox_default.scss';
import { IProps } from '../../routing/PrivateRoutes';
import ReactTagInput from '@pathofdev/react-tag-input';
import CountriesV2 from '../../../client/system/CountriesV2';
import { Button, IconButton, Input, styled } from '@mui/material';
import { FileHandler } from '../../../client/system/FileHandler';
import { Utils } from '../../../client/system/Utils';
import { User } from '../../../client/user/User';
import { SessionHandler, SessionKeys } from '../../../client/system/SessionHandler';

const ProfileEdit: React.FC<IProps> = props => {
    const { match } = props;

    const [profileModel, setProfileModel] = useState<ProfileModel>(null as any);

    const [profileName, setProfileName] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [birthday, setBirthday] = useState<string>("");
    const [maritalStatus, setMaritalStatus] = useState<string>("");
    const [height, setHeight] = useState<number>();
    const [weight, setWeight] = useState<number>();
    const [bodyType, setBodyType] = useState<string>("");
    const [ethnicity, setEthnicity] = useState<string>("");
    const [hairColor, setHairColor] = useState<string>("");
    const [eyeColor, setEyeColor] = useState<string>("");
    const [sexualOrientation, setSexualOrientation] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [language, setLanguage] = useState<string>("");
    const [lookingFor, setLookingFor] = useState<string>("");
    const [aboutMe, setAboutMe] = useState<string>("");
    const [tags, setTags] = useState<string[]>([]);

    const [loader, setLoader] = useState(false);
    const [isMissingFields, setIsMissingFields] = useState<boolean>(false);

    const history = useHistory();

    const saveChanges = () => {
        let params = {
            displayName: profileName,
            gender: gender,
            birthday: birthday,
            maritalStatus: maritalStatus,
            height: height,
            weight: weight,
            bodyType: bodyType,
            ethnicity: ethnicity,
            hairColor: hairColor,
            eyeColor: eyeColor,
            sexualOrientation: sexualOrientation,
            country: country,
            language: language,
            lookingFor: lookingFor,
            aboutMe: aboutMe,
            tags: tags
        }

        Profile.UpdateProfile(match.params.id as string, params).then(() => {
            alert("Successfully Updated Profile!");
            history.push(`/profile-approval/${match.params.id as string}`);
        });
    };

    const isPreviousDeclinedList = (): boolean => {
        let fromDeclined = false;
        let backPath = SessionHandler.GetItem(SessionKeys.SESSION_EDIT_PROFILE_PREV_LOCATION, `/profile-approval/${match.params.id as string}`);
        if (backPath.includes('profile-declined-list'))
            fromDeclined = true;
        
        return fromDeclined;
    }

    const backToApproval = () => {
        history.push(`/profile-approval/${match.params.id as string}`);
    }

    const sendToPending = () => {
        Profile.SendToPending(profileModel.id).then(() => {
            alert("Profile Returned to pending");
            backToPrevious();
        })
    }

    const backToPrevious = () => {
        let backPath = SessionHandler.GetItem(SessionKeys.SESSION_EDIT_PROFILE_PREV_LOCATION, `/profile-approval/${match.params.id as string}`);
        history.push(backPath);
        SessionHandler.DeleteItem(SessionKeys.SESSION_EDIT_PROFILE_PREV_LOCATION);
    }

    const setDetails = (profile: ProfileModel) => {
        setProfileName(profile.displayName);
        setGender(profile.gender);
        setBirthday(profile.birthday);
        setMaritalStatus(profile.maritalStatus);
        setHeight(profile.height);
        setWeight(profile.weight);
        setBodyType(profile.bodyType);
        setEthnicity(profile.ethnicity);
        setHairColor(profile.hairColor);
        setEyeColor(profile.eyeColor);
        setSexualOrientation(profile.sexualOrientation);
        setCountry(profile.country);
        setLanguage(profile.language);
        setLookingFor(profile.lookingFor);
        setAboutMe(profile.aboutMe);
        setTags(profile.tags);
    };

    const getImageReference = (url: string): string => {

        console.log(`Image Url: ${url}`);
        let temp = url.replace("https://firebasestorage.googleapis.com/v0/b/chat-hub-1.appspot.com/o/", "");
        console.log(`Update: ${temp}`);
        temp = temp.replaceAll("%2F", "/");
        console.log(`Update 2: ${temp}`);
        let tempArr = temp.split("?alt");
        console.log(`Update 3: ${tempArr[0]}`);

        return tempArr[0];
    }

    const uploadProfileImage = (e: any) => {
        let files = e.target.files;

         if (!files.length)
            return;

        let onLoad = (file: any) => {
            console.log(file)
            addProfileImage(file);
        }

        FileHandler.ReadImageFile(files, onLoad);
    }
    
    const uploadPublicPhotos = (e: any) => {
        let files = e.target.files;
        let readers = [];
        let outputs: any[] = [];

        if (!files.length)
            return;

        let onLoad = (file: any) => {
            outputs.push(file);
        }

        for (let i = 0; i < files.length; i++) {
            readers.push(FileHandler.ReadImageFile(files[i], onLoad));
        }

        console.log(`Adding. Readers Length: ${readers.length}`);
        Promise.all(readers).then((values) => {
                Profile.AddProfileImages(profileModel.displayName, profileModel?.id, outputs, "public", () => {
                //("Successfully Added Photos!");
                Utils.RefreshPage();
            }, () => {
                alert("Failed to Add Photos!");
                //  openPopup("Failed to Add Public Photos", false);
            })
        })
    }

    const uploadPrivatePhotos = (e: any) => {
        let files = e.target.files;
        let readers = [];
        let outputs: any[] = [];

        if (!files.length)
            return;

        let onLoad = (file: any) => {
            outputs.push(file);
        }

        for (let i = 0; i < files.length; i++) {
            readers.push(FileHandler.ReadImageFile(files[i], onLoad));
        }

        Promise.all(readers).then((values) => {
            Profile.AddProfileImages(profileModel.displayName, profileModel.id, outputs, "private", () => {
                //alert("Successfully Added Photos!");
                Utils.RefreshPage();
            }, () => {
                alert("Failed to Add Photos!");
                // openPopup("Failed to Add Private Photos", false);
            })
        })
    }

    const removeProfileImage = () => {
        let reference = getImageReference(profileModel.photoURL);
        deleteImageFromStorage(reference, () => {
            Utils.RefreshPage();
        }, () => {
        });
    }

    const removeProfilePhoto = (imageId: string, url: string) => {
        let reference = getImageReference(url);
        deleteImageFromStorage(reference, () => {
            Profile.DeleteProfileImage(profileModel.id, imageId).then(() => {
                //alert("Successfully Deleted Image!");
                Utils.RefreshPage();
            });
        }, () => {

        });
    }

    const addProfileImage = async (file: any) => {
        await Profile.ModifyProfilePhoto(profileModel.displayName, profileModel.id, file.name, file, () => {
            //alert("Successfully Added New Profile Image!");
            Utils.RefreshPage();
        }, () => {
            alert("Failed to Upload New Profile Image!");
            // openPopup("Failed to Upload New Profile Image", false);
        })
    }

    const deleteImageFromStorage = (reference: string, onSuccess: () => void | null, onFail: () => void | null) => {
        console.log("Reference: " + reference);
        FileHandler.DeleteFile(reference, () => {
            console.log("Delete Success");
            onSuccess();
        }, () => {
            console.log("Remove Failed")
            onFail();
        });
    }

    const Input = styled('input')({
        display: 'none',
    });

    useEffect(() => {
        let profile_id = match.params.id as string;
    
        Profile.GetProfile(profile_id).then((model) => {
            Profile.GetAllProfileImages(profile_id).then((images) => {
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

                setProfileModel(model);
                setTimeout(() => {
                    setDetails(model)
                }, 1000)
            }).catch((reason) => {
                console.log(`Failed to get Pictures. Reason ${reason}`);
                setProfileModel(model);
                setTimeout(() => {
                    setDetails(model)
                }, 1000)
            })
        });
    }, [match])


    return (
        <>
            {
                profileModel ?
                    <div className={`card`}>
                        {/* {loader && <div className="customspiner"><span className="spinner-border spinner-border-lg align-middle ms-2"></span></div>} */}
                        <div className='card-header border-0 pt-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bolder fs-3 mb-1'>Profile Edit</span>
                            </h3>
                        </div>
                        <div className='card-body py-3'>
                            <form action=''>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className="mb-10">
                                            <div className='UserImage'>
                                                <div className='ProfileImage overlay' onClick={removeProfileImage}>
                                                    <img src={profileModel ? profileModel?.photoURL : 'media/avatars/150-2.jpg'} alt="Pic" />

                                                    <div className="overlay-layer card-rounded bg-dark bg-opacity-25 shadow">
                                                        <i className="bi bi-x text-white fs-2x"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <input type="file" accept="image/*" id="profileUpdate" onChange={onSelectFile} /> */}

                                        <div className='addRemove-profileBtn'>
                                            <button
                                                type='button'
                                                className='btn btn-sm bg-primary btn-text-white'
                                                onClick={uploadProfileImage}
                                            >
                                                Upload Profile Photo
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className="mb-10">
                                            <label htmlFor="exampleFormControlInput1" className="required form-label">Profile Name</label>
                                            <div className={isMissingFields && !profileName ? "MissingField" : ""}>
                                                <input type="text" className="form-control form-control-solid" value={profileName} onChange={(e) => setProfileName(e.target.value)} placeholder="Add Profile Name Here" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-lg-6 mb-5'>
                                        <label htmlFor="exampleFormControlInput1" className="required form-label">Gender</label>
                                        <div className={isMissingFields && !gender ? "MissingField" : ""}>
                                            <select className="form-select form-select-solid" value={gender} onChange={(e) => setGender(e.target.value)} aria-label="Select example">
                                                <option disabled value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className="mb-10">
                                            <label htmlFor="exampleFormControlInput1" className="required form-label">Birthday</label>
                                            <div className={isMissingFields && !birthday ? "MissingField" : ""}>
                                                <input type="date" onChange={(e) => setBirthday(e.target.value)} value={birthday} className="form-control form-control-solid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="mb-10">
                                            <label htmlFor="exampleFormControlInput1" className="required form-label">Marital Status</label>
                                            <div className={isMissingFields && !maritalStatus ? "MissingField" : ""}>
                                                <select className="form-select form-select-solid" value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} aria-label="Select example">
                                                    <option disabled value="">Select</option>
                                                    <option value="Single">Single</option>
                                                    <option value="Married">Married</option>
                                                    <option value="Widowed">Widowed</option>
                                                    <option value="Separated">Separated</option>
                                                    <option value="Divorced">Divorced</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="mb-10">
                                            <label htmlFor="exampleFormControlInput1" className="required form-label">Height (in cm)</label>
                                            <div className={isMissingFields && !height ? "MissingField" : ""}>
                                                <input type="number" min="0" className="form-control form-control-solid" value={height} onChange={(e) => {
                                                    e.target.value = (Math.abs(parseFloat(e.target.value))).toString()
                                                    setHeight(parseFloat(e.target.value))
                                                }
                                                } placeholder="Enter Height" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="mb-10">
                                            <label htmlFor="exampleFormControlInput1" className="required form-label">Weight (in lb)</label>
                                            <div className={isMissingFields && !weight ? "MissingField" : ""}>
                                                <input type="number" min="0" className="form-control form-control-solid" value={weight} onChange={(e) => {
                                                    e.target.value = (Math.abs(parseFloat(e.target.value))).toString()
                                                    setWeight(parseFloat(e.target.value))
                                                }
                                                } placeholder="Enter Weight" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="mb-10">
                                            <label htmlFor="exampleFormControlInput1" className="required form-label">Body Type</label>
                                            <div className={isMissingFields && !bodyType ? "MissingField" : ""}>
                                                <select className="form-select form-select-solid" value={bodyType} onChange={(e) => setBodyType(e.target.value)} aria-label="Select example">
                                                    <option disabled value="">Select</option>
                                                    <option value="Slim">Slim</option>
                                                    <option value="Normal">Normal</option>
                                                    <option value="Athletic">Athletic</option>
                                                    <option value="Heavy">Heavy</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="mb-10">
                                            <label htmlFor="exampleFormControlInput1" className="required form-label">Ethnicity</label>
                                            <div className={isMissingFields && !ethnicity ? "MissingField" : ""}>
                                                <select className="form-select form-select-solid" value={ethnicity} onChange={(e) => setEthnicity(e.target.value)} aria-label="Select example">
                                                    <option disabled value="">Select</option>
                                                    <option value="White">White</option>
                                                    <option value="Asian">Asian</option>
                                                    <option value="Latino">Latino</option>
                                                    <option value="Black">Black</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="mb-10">
                                            <label htmlFor="exampleFormControlInput1" className="required form-label">Hair Color</label>
                                            <div className={isMissingFields && !hairColor ? "MissingField" : ""}>
                                                <select className="form-select form-select-solid" value={hairColor} onChange={(e) => setHairColor(e.target.value)} aria-label="Select example">
                                                    <option disabled value="">Select</option>
                                                    <option value="Black">Black</option>
                                                    <option value="Brown">Brown</option>
                                                    <option value="Blonde">Blonde</option>
                                                    <option value="Red">Red</option>
                                                    <option value="Gray">Gray</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="mb-10">
                                            <label htmlFor="exampleFormControlInput1" className="required form-label">Eye Color</label>
                                            <div className={isMissingFields && !eyeColor ? "MissingField" : ""}>
                                                <select className="form-select form-select-solid" value={eyeColor} onChange={(e) => setEyeColor(e.target.value)} aria-label="Select example">
                                                    <option disabled value="">Select</option>
                                                    <option value="Brown">Brown</option>
                                                    <option value="Blue">Blue</option>
                                                    <option value="Hazel">Hazel</option>
                                                    <option value="Amber">Amber</option>
                                                    <option value="Green">Green</option>
                                                    <option value="Gray">Gray</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="mb-10">
                                            <label htmlFor="exampleFormControlInput1" className="required form-label">Sexual Orientation</label>
                                            <div className={isMissingFields && !sexualOrientation ? "MissingField" : ""}>
                                                <select className="form-select form-select-solid" value={sexualOrientation} onChange={(e) => setSexualOrientation(e.target.value)} aria-label="Select example">
                                                    <option disabled value="">Select</option>
                                                    <option value="Straight">Straight</option>
                                                    <option value="Gay">Gay</option>
                                                    <option value="Lesbian">Lesbian</option>
                                                    <option value="Bisexual">Bisexual</option>
                                                    <option value="Pansexual">Pansexual</option>
                                                    <option value="Questioning">Questioning</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="mb-10">
                                            <label htmlFor="exampleFormControlInput1" className="required form-label">Country</label>
                                            <div className={isMissingFields && !country ? "MissingField" : ""}>
                                                <select className="form-select form-select-solid" value={country} onChange={(e) => setCountry(e.target.value)} aria-label="Select example">
                                                    <option disabled value="">Select</option>
                                                    {/* {countryOptions} */}
                                                    <CountriesV2 />
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="col-lg-3">
                                <div className="mb-10">
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">City/State</label>
                                    <select className="form-select form-select-solid" defaultValue={""} onChange={(e) => setCity(e.target.value)} aria-label="Select example">
                                        <option disabled value="">Select</option>
                                        <Cities country={country} />
                                    </select>
                                </div>
                            </div> */}

                                    <div className="col-lg-3">
                                        <div className="mb-10">
                                            <label htmlFor="exampleFormControlInput1" className="required form-label">Language</label>
                                            <div className={isMissingFields && !language ? "MissingField" : ""}>
                                                <select className="form-select form-select-solid" value={language} onChange={(e) => setLanguage(e.target.value)} aria-label="Select example">
                                                    <option disabled value="">Select</option>
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
                                        </div>
                                    </div>

                                    {/* <div className="col-lg-3">
                                <div className="mb-10">
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Second Language</label>
                                    <select className="form-select form-select-solid" aria-label="Select example">
                                        <option disabled value="">Select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div> */}
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mb-10">
                                            <label htmlFor="exampleFormControlInput1" className="required form-label">Looking For</label>
                                            <div className={isMissingFields && !lookingFor ? "MissingField" : ""}>
                                                <textarea className="form-control form-control-solid h-150px" value={lookingFor} onChange={(e) => setLookingFor(e.target.value)} placeholder='Add What The Profile Is Looking For'></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mb-10">
                                            <label htmlFor="exampleFormControlInput1" className="required form-label">About Me</label>
                                            <div className={isMissingFields && !aboutMe ? "MissingField" : ""}>
                                                <textarea className="form-control form-control-solid h-150px" value={aboutMe} onChange={(e) => setAboutMe(e.target.value)} placeholder='Add About Me For the Profile'></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mb-5">
                                            <label htmlFor="exampleFormControlInput1" className="required form-label">Public images</label>
                                            <ul className='AllPrivateImages'>
                                                {
                                                    profileModel?.publicPhotos.map((image, index) => {

                                                        return (
                                                            <li key={`public-image@${Utils.GenerateRandomID()}`} className='PrivateImages overlay' onClick={() => {removeProfilePhoto(image.info.id, image.info.photoURL)}}>
                                                                <img src={image.info.photoURL ? image.info.photoURL : 'media/avatars/150-1.jpg'} alt="Pic" />

                                                                <div className="overlay-layer card-rounded bg-dark bg-opacity-25 shadow">
                                                                    <i className="bi bi-x text-white fs-2x"></i>
                                                                </div>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>

                                            <div className='view-more-btn'>
                                                <label htmlFor='uploadPhoto'>
                                                    <Input type="file" accept="image/*" multiple id="uploadPhoto" onChange={uploadPublicPhotos} />
                                                    <Button variant="contained" component="span" className="red-btn">Upload Public Photos</Button>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mb-5">
                                            <label htmlFor="exampleFormControlInput1" className="required form-label">Private images</label>
                                            <ul className='AllPrivateImages'>
                                                {
                                                    profileModel?.privatePhotos.map((image, index) => {

                                                        return (
                                                            <li key={`private-image@${Utils.GenerateRandomID()}`} className='PrivateImages overlay' onClick={() => { removeProfilePhoto(image.info.id, image.info.photoURL) }}>
                                                                <img src={image.info.photoURL ? image.info.photoURL : 'media/avatars/150-1.jpg'} alt="Pic" />

                                                                <div className="overlay-layer card-rounded bg-dark bg-opacity-25 shadow">
                                                                    <i className="bi bi-x text-white fs-2x"></i>
                                                                </div>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>

                                            <div className='view-more-btn'>
                                                <label htmlFor='uploadPhoto2'>
                                                    <Input type="file" accept="image/*" multiple id="uploadPhoto2" onChange={uploadPrivatePhotos} />
                                                    <Button variant="contained" component="span" className="red-btn">Upload Private Photos</Button>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">

                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className='mb-10'>
                                            <label htmlFor="exampleFormControlInput1" className="required form-label">Tags</label>

                                            <div className={`Tags-Info ${isMissingFields && tags.length === 0 ? "MissingField" : ""}`}>
                                                <ReactTagInput
                                                    tags={tags}
                                                    placeholder="Type and press enter"
                                                    maxTags={10}
                                                    editable={true}
                                                    readOnly={false}
                                                    removeOnBackspace={true}
                                                    onChange={(newTags) => setTags(newTags)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mb-5'>
                                    <div className='col-lg-2 col-12'>
                                        <button type="button" className="btn btn-sm bg-primary btn-text-white" onClick={saveChanges}>
                                            <span className="">
                                                Save Changes {loader && <span className="spinner-border spinner-border-sm align-middle ms-2"></span>}
                                            </span>
                                        </button>
                                    </div>

                                    {
                                        isPreviousDeclinedList() ? 
                                            <div className='col-lg-2 col-12'>
                                                <button type="button" className="btn btn-sm bg-primary btn-text-white" onClick={sendToPending}>
                                                    <span className="">
                                                        Send to Pending
                                                    </span>
                                                </button>
                                            </div>
                                        :
                                            <>
                                            </>
                                    }

                                    <div className='col-lg-2 col-12'>
                                        <button type="button" className="btn btn-sm bg-primary btn-text-white" onClick={backToPrevious}>
                                            <span className="">
                                                Back
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    :
                    <></>
            }
        </>
    );
}
export default ProfileEdit