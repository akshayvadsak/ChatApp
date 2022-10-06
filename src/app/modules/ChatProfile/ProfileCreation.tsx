import React, { useEffect, useState } from 'react'
import { Dropdown, } from 'react-bootstrap-v5'
import ReactTagInput from "@pathofdev/react-tag-input";
import { FileHandler } from '../../../client/system/FileHandler';
import { Utils } from '../../../client/system/Utils'
import { Profile } from '../../../client/user/Profile';
import CountriesV2 from '../../../client/system/CountriesV2';

type Props = {
    className: string
}

const ProfileCreation: React.FC<Props> = ({ className }) => {
    const [profileName, setProfileName] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [birthday, setBirthday] = useState<string>("");
    const [maritalStatus, setMaritalStatus] = useState<string>("");
    const [height, setHeight] = useState<number>(null as any);
    const [weight, setWeight] = useState<number>(null as any);
    const [bodyType, setBodyType] = useState<string>("");
    const [ethnicity, setEthnicity] = useState<string>("");
    const [hairColor, setHairColor] = useState<string>("");
    const [eyeColor, setEyeColor] = useState<string>("");
    const [sexualOrientation, setSexualOrientation] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [language, setLanguage] = useState<string>("");
    const [lookingFor, setLookingFor] = useState<string>("");
    const [aboutMe, setAboutMe] = useState<string>("");
    const [profileImage, setProfileImage] = useState(null as any);
    const [publicImages, setPublicImages] = useState<Map<string, any>>(new Map<string, any>());
    const [privateImages, setPrivateImages] = useState<Map<string, any>>(new Map<string, any>());
    const [tags, setTags] = useState<string[]>([]);
    const [loader, setLoader] = useState(false);

    const [localProfileImage, setLocalProfileImage] = useState<string[]>([]);
    const [localPublicImages, setLocalPublicImages] = useState<string[]>([]);
    const [localPrivateImages, setLocalPrivateImages] = useState<string[]>([]);

    const [isMissingFields, setIsMissingFields] = useState<boolean>(false);

    const [defaultDate, setDefaultDate] = useState<string>("");

    // const resetFields = () => {
    //     setProfileImage(null);
    //     setGender(null as any);
    //     setBirthday(null as any);
    //     setMaritalStatus(null as any);
    //     setHeight(null as any);
    //     setWeight(null as any);
    //     setBodyType(null as any);
    //     setEthnicity(null as any);
    //     setHairColor(null as any);
    //     setEyeColor(null as any);
    //     setSexualOrientation("");
    //     setCountry(null as any);
    //     setCity(null as any);
    //     setLanguage(null as any);
    //     setLookingFor(null as any);
    //     setAboutMe(null as any);
    //     setTags([]);
    //     setLocalProfileImage([]);
    //     setLocalPublicImages([]);
    //     setLocalPrivateImages([]);
    // }

    const checkInputs = (): boolean => {
        let allow = true;

        if (!profileName)
            allow = false;
        else if (!gender)
            allow = false;
        else if (!birthday)
            allow = false;
        else if (!maritalStatus)
            allow = false;
        else if (!height)
            allow = false;
        else if (!weight)
            allow = false;
        else if (!height)
            allow = false;
        else if (!bodyType)
            allow = false;
        else if (!ethnicity)
            allow = false;
        else if (!hairColor)
            allow = false;
        else if (!eyeColor)
            allow = false;
        else if (!sexualOrientation)
            allow = false;
        else if (!country)
            allow = false;
        else if (!language)
            allow = false;
        else if (!lookingFor)
            allow = false;
        else if (!aboutMe)
            allow = false;

        return allow;
    }

    const checkTags = () => {
        let allow = true;

        if (tags.length < 0)
            allow = false;

        return allow;
    }

    const checkPhotos = () => {
        let allow = true;

        if (localProfileImage.length === 0)
            allow = false;
        else if (localPublicImages.length === 0)
            allow = false;
        else if (localPrivateImages.length === 0)
            allow = false;

        return allow;
    }

    const uploadProfileImage = (e: any) => {
        let files = e.target.files;

        if (!files.length)
            return;

        let onLoad = (file: any) => {
            let name = file.name;
            let temp = localProfileImage;

            temp.pop();
            temp.push(name);
            setLocalProfileImage([]);
            setLocalProfileImage(temp);

            setProfileImage(file);
        }

        FileHandler.ReadImageFile(files[0], onLoad);

    }

    const uploadPublicImages = (e: any) => {
        let files = e.target.files;
        let readers = [];

        let localImages: string[] = [...localPublicImages];
        let images = new Map<string, any>(publicImages);

        let loadCount = 0;
        let totalCount = files.length + localImages.length;

        //console.log(`Incoming Files Length: ${files.length} | Local Images Length: ${localImages.length} | Total Count: ${totalCount}`);

        if (!files.length)
            return;

        let onLoad = (file: any) => {
            if (!localImages.includes(file.name)) {
                localImages.push(file.name);
                images.set(file.name, file);
                loadCount++;
            }
            else {
                totalCount--;
            }
        }

        for (let i = 0; i < files.length; i++) {
            readers.push(FileHandler.ReadImageFile(files[i], onLoad));
        }

        Promise.all(readers).then((values) => {
            setTimeout(waitForPublicUpload, 100);
        })

        const waitForPublicUpload = () => {
            //console.log(`Total Count: ${totalCount} | Load Count: ${loadCount}`)
            if (totalCount < loadCount) {
                setTimeout(waitForPublicUpload, 100);
            } else {
                //console.log("Finished Public Waiting");
                setLocalPublicImages(localImages);
                setPublicImages(images);
            }
        }

    }

    const uploadPrivateImages = (e: any) => {
        let files = e.target.files;
        let readers = [];

        let localImages: string[] = [...localPrivateImages];
        let images = new Map<string, any>(privateImages);

        let loadCount = 0;
        let totalCount = files.length + localImages.length;

        if (!files.length)
            return;


        let onLoad = (file: any) => {
            if (!localImages.includes(file.name)) {
                localImages.push(file.name);
                images.set(file.name, file);
                loadCount++;
            } else {
                totalCount--;
            }
        }

        for (let i = 0; i < files.length; i++) {
            readers.push(FileHandler.ReadImageFile(files[i], onLoad));
        }

        Promise.all(readers).then((values) => {
            setTimeout(waitForPrivateUpload, 100);
        })

        const waitForPrivateUpload = () => {
            if (totalCount < loadCount) {
                setTimeout(waitForPrivateUpload, 100);
            } else {
                setLocalPrivateImages(localImages);
                setPrivateImages(images);
            }
        }
    }

    const uploadImageToFirestore = async (file: any, imageType: string, name: string, onDone: (url: string) => Promise<void>, resizeSize: number = -1): Promise<void> => {
        let id = profileName.toLowerCase();
        id = id.replaceAll(' ', '_');
        // id = `${id}@${Utils.GenerateRandomID()}`
        let path = `profiles/${id}/${imageType}`;
        let filePath = `images/${path}/${name}`

        //console.log("Restricting Image");
        await FileHandler.RestrictImageSize(file, resizeSize, async (image) => {
            //console.log(`Done Restricting Image: ${image}`);
            if (image) {
                //console.log("Uploading Image");
                await FileHandler.UploadImage(image, filePath, async (url) => {
                    await onDone(url);
                }, (error, message) => {
                    console.log(`Error: ${error} | Message: ${message}`);
                })
            }
        })
    }

    const handleLocalProfileImage = (images: string[]) => {
        if (images.length === 0)
            setProfileImage(null as any);

        setLocalProfileImage(images)
    }

    const handleLocalPublicImages = (images: string[]) => {
        let temp: Map<string, any> = new Map(publicImages);
        //("Incoming Local Images Length: " + images.length);

        publicImages.forEach((image, key) => {
            if (!images.includes(key)) {
                temp.delete(key);
            }
        })

        setLocalPublicImages(images);
        setPublicImages(temp);
    }

    const handleLocalPrivateImages = (images: string[]) => {
        let temp2: Map<string, any> = new Map(privateImages);
        privateImages.forEach((image, key) => {
            if (!images.includes(key))
                temp2.delete(key);
        })

        setLocalPrivateImages(images);
        setPrivateImages(temp2);
    }

    const onSubmitProfile = async () => {
        let profileUrl = null as any
        let publicImagesUrl: string[] = [];
        let privateImagesUrl: string[] = [];

        let inputsCheck = checkInputs()
        let tagsCheck = checkTags();
        let photosCheck = checkPhotos();
        setLoader(true);

        if (!inputsCheck || !tagsCheck || !photosCheck) {

            setLoader(false);
            alert("Missing fields!");
            setIsMissingFields(true);
            return;
        }

        let profileNameExists = false;
        await Profile.CheckIfProfileNameExists(profileName).then((exists) => {
            profileNameExists = exists;
        });

        if (profileNameExists)
        {
            alert("Profile Name Already Exists")
            setLoader(false);
            return;
        }

        const checkIsImagesDone = async () => {
            if (
                (publicImagesUrl.length !== publicImages.size &&
                    privateImagesUrl.length !== publicImages.size) || !profileUrl) {
                setTimeout(checkIsImagesDone, 100);
            } else {
                let profileData = {
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
                    photoURL: profileUrl,
                    tags: tags
                }

                await Profile.CreateNewProfile(profileData, publicImagesUrl, privateImagesUrl).then(() => {
                    setLoader(false)
                    alert("Profile Created!");

                    setIsMissingFields(false);
                    Utils.RefreshPage();
                });
            }
        }

        let onProfileLoad = async (file: any) => {
            await uploadImageToFirestore(file, "profile", file.name, async (url) => {
                profileUrl = url;
            }, 300)
        }

        let onPublicLoad = async (file: any) => {
            await uploadImageToFirestore(file, "public", file.name, async (url) => {
                console.log(url)
                publicImagesUrl.push(url);
            })
        }

        let onPrivateLoad = async (file: any) => {
            await uploadImageToFirestore(file, "private", file.name, async (url) => {
                console.log(`Profile Photo Upload: ` + url)
                privateImagesUrl.push(url);
            })
        }

        let readers = []

        readers.push(onProfileLoad(profileImage));

        for (let i = 0; i < localPublicImages.length; i++) {
            let file = publicImages.get(localPublicImages[i]);
            console.log(`Public Photo Upload: ` + file);
            readers.push(onPublicLoad(file));
        }

        for (let i = 0; i < localPrivateImages.length; i++) {
            let file = privateImages.get(localPrivateImages[i]);
            console.log(`Private Photo Upload: ` + file);
            readers.push(onPrivateLoad(file));
        }

        Promise.all(readers).then(async (values) => {
            console.log("Uploading Images Success!");

            checkIsImagesDone();
        }).catch((reason) => {
            console.log(`Reason: ${reason}`);
        })

    }

    useEffect(() => {
        if (!defaultDate) {
            let defaultYear = new Date().getFullYear() - 18;
            let date = `${defaultYear}-01-01`;

            setDefaultDate(date);
        }
    }, [defaultDate]);

    return (
        <>

            <div className={`card ${className}`}>
                {/* {loader && <div className="customspiner"><span className="spinner-border spinner-border-lg align-middle ms-2"></span></div>} */}
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bolder fs-3 mb-1'>Profile Creation</span>
                    </h3>
                </div>
                <div className='card-body py-3'>
                    <form action=''>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className="mb-10">
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Profile Name</label>
                                    <div className={isMissingFields && !profileName ? "MissingField" : ""}>
                                        <input type="text" className="form-control form-control-solid" defaultValue={""} onChange={(e) => setProfileName(e.target.value)} placeholder="Add Profile Name Here" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-6 mb-5'>
                                <label htmlFor="exampleFormControlInput1" className="required form-label">Gender</label>
                                <div className={isMissingFields && !gender ? "MissingField" : ""}>
                                    <select className="form-select form-select-solid" defaultValue={""} onChange={(e) => setGender(e.target.value)} aria-label="Select example">
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
                                        <input type="date" onChange={(e) => setBirthday(e.target.value)} defaultValue={defaultDate} className="form-control form-control-solid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="mb-10">
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Marital Status</label>
                                    <div className={isMissingFields && !maritalStatus ? "MissingField" : ""}>
                                        <select className="form-select form-select-solid" defaultValue={""} onChange={(e) => setMaritalStatus(e.target.value)} aria-label="Select example">
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
                                        <input type="number" min="0" className="form-control form-control-solid" defaultValue={""} onChange={(e) => {
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
                                        <input type="number" min="0" className="form-control form-control-solid" defaultValue={""} onChange={(e) => {
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
                                        <select className="form-select form-select-solid" defaultValue={""} onChange={(e) => setBodyType(e.target.value)} aria-label="Select example">
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
                                        <select className="form-select form-select-solid" defaultValue={""} onChange={(e) => setEthnicity(e.target.value)} aria-label="Select example">
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
                                        <select className="form-select form-select-solid" defaultValue={""} onChange={(e) => setHairColor(e.target.value)} aria-label="Select example">
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
                                        <select className="form-select form-select-solid" defaultValue={""} onChange={(e) => setEyeColor(e.target.value)} aria-label="Select example">
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
                                        <select className="form-select form-select-solid" defaultValue={""} onChange={(e) => setSexualOrientation(e.target.value)} aria-label="Select example">
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
                                        <select className="form-select form-select-solid" defaultValue={""} onChange={(e) => setCountry(e.target.value)} aria-label="Select example">
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
                                        <select className="form-select form-select-solid" defaultValue={""} onChange={(e) => setLanguage(e.target.value)} aria-label="Select example">
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
                                        <textarea className="form-control form-control-solid h-150px" onChange={(e) => setLookingFor(e.target.value)} placeholder='Add What The Profile Is Looking For'></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mb-10">
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">About Me</label>
                                    <div className={isMissingFields && !aboutMe ? "MissingField" : ""}>
                                        <textarea className="form-control form-control-solid h-150px" onChange={(e) => setAboutMe(e.target.value)} placeholder='Add About Me For the Profile'></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mb-5">
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Profile image - 300x300px</label>
                                    <div className="DropFile-block mb-5">
                                        <div className={isMissingFields && localProfileImage.length === 0 ? "MissingField" : ""}>
                                            <input type="file" id='upload_profile_img' accept="image/*" onChange={uploadProfileImage} />
                                            <label htmlFor="upload_profile_img">
                                                <i className="bi bi-file-earmark-arrow-up text-primary fs-3x"></i>
                                                <div className='upload-message'>
                                                    <h3 className="fs-5 fw-bolder text-gray-900 mb-1">Drop files here or click to upload.</h3>
                                                    <span className="fs-7 fw-bold text-gray-400">Upload Only One Image</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <ReactTagInput
                                        tags={localProfileImage}
                                        maxTags={0}
                                        editable={false}
                                        readOnly={false}
                                        removeOnBackspace={true}
                                        onChange={(newTags) => handleLocalProfileImage(newTags)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mb-5">
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Public images</label>
                                    <div className="DropFile-block mb-5">
                                        <div className={isMissingFields && localPublicImages.length === 0 ? "MissingField" : ""}>
                                            <input type="file" id='upload_public_img' multiple={true} accept="image/*" onChange={uploadPublicImages} />
                                            <label htmlFor="upload_public_img">
                                                <i className="bi bi-file-earmark-arrow-up text-primary fs-3x"></i>
                                                <div className='upload-message'>
                                                    <h3 className="fs-5 fw-bolder text-gray-900 mb-1">Drop files here or click to upload.</h3>
                                                    <span className="fs-7 fw-bold text-gray-400">Upload Minimum of One</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <ReactTagInput
                                        tags={localPublicImages}
                                        maxTags={0}
                                        editable={false}
                                        readOnly={false}
                                        removeOnBackspace={true}
                                        onChange={(newTags) => handleLocalPublicImages(newTags)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mb-5">
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Private images</label>
                                    <div className="DropFile-block mb-5">
                                        <div className={isMissingFields && localPrivateImages.length === 0 ? "MissingField" : ""}>
                                            <input type="file" id='upload_private_img' multiple={true} accept="image/*" onChange={uploadPrivateImages} />
                                            <label htmlFor="upload_private_img">
                                                <i className="bi bi-file-earmark-arrow-up text-primary fs-3x"></i>
                                                <div className='upload-message'>
                                                    <h3 className="fs-5 fw-bolder text-gray-900 mb-1">Drop files here or click to upload.</h3>
                                                    <span className="fs-7 fw-bold text-gray-400">Upload Minimum of Fifteen</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <ReactTagInput
                                        tags={localPrivateImages}
                                        maxTags={0}
                                        editable={false}
                                        readOnly={false}
                                        removeOnBackspace={true}
                                        onChange={(newTags) => handleLocalPrivateImages(newTags)}
                                    />
                                </div>
                            </div>
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

                                        {/* <Dropdown>
                                            <Dropdown.Toggle className='tags-filter' id="dropdown-basic">
                                                <i className="bi bi-funnel-fill"></i>
                                                Tag Cloud
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mb-5'>
                            <div className='col-lg-2 col-12'>
                                {/* <button
                                    type='button'
                                    className='btn btn-sm bg-primary btn-text-white'
                                    onClick={onSubmitProfile}
                                >
                                    Submit Profile
                                </button> */}

                                <button type="button" className="btn btn-sm bg-primary btn-text-white" onClick={onSubmitProfile}>
                                    <span className="">
                                        Submit Profile {loader && <span className="spinner-border spinner-border-sm align-middle ms-2"></span>}
                                    </span>
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default ProfileCreation