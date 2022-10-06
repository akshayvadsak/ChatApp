import React, { useState } from 'react';
import { User, UserTypes } from '../../../client/user/User';
import CountriesV2 from '../../../client/system/CountriesV2';

import HandOverPopup from '../HandOverPopUp/HandOverPopUp'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Utils } from '../../../client/system/Utils';


const CreateChatter: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [allowRefresh, setAllowRefresh] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [popupMessage, setPopupMessage] = useState<string>("");

    const [displayName, setDisplayName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const [gender, setGender] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [language, setLanguage] = useState<string>("");

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
        py: 4,
        borderRadius: 3
    };

    const checkInputs = (): boolean => {
        let isComplete: boolean = true;

        if (!displayName || !email || !password || !gender || !country || !language)
            isComplete = false;

        return isComplete;
    }

    const onCreateClicked = () => {
        if (!checkInputs())
        {
            setPopupMessage("Missing Fields!");
            setAllowRefresh(false);
            handleOpen();
            return;
        }

        if (password.length < 12)
        {
            setPopupMessage("Password should be at least 12 characters!")
            setAllowRefresh(false);
            handleOpen();
            return;
        }

        let params = {
            displayName: displayName,
            email: email,
            gender: gender,
            country: country,
            language: language,
            userType: UserTypes.TYPE_CHATTER
        };

        User.CreateChatter(email, password, params).then(() => {
            setPopupMessage("Successfully Created Chatter!");
            setAllowRefresh(true);
            handleOpen();
        }).catch((err) => {
            setPopupMessage(err);
            setAllowRefresh(false);
            handleOpen();
        });
    }

    return (
        <>
            <div className={`card`}>
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bolder fs-3 mb-1'>Create Chatter</span>
                    </h3>
                </div>
                <div className="card-body">
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className="card">
                                <div className="card-body p-0">
                                    <div className='row'>
                                        <div className='col-lg-4'>
                                            <div className="mb-10">
                                                <label className="form-label">Name <span className='text-danger'>*</span></label>
                                                <input type="text" value={displayName} onChange={(e) => {setDisplayName(e.target.value)}} className="form-control form-control-solid h-50px" />
                                            </div>

                                            <div className="mb-10">
                                                <label className="form-label">Email <span className='text-danger'>*</span></label>
                                                <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} className="form-control form-control-solid h-50px" />
                                            </div>

                                            <div className="mb-10">
                                                <label className="form-label">Password <span className='text-danger'>*</span></label>
                                                <input type="password" value={password} onChange={((e) => {setPassword(e.target.value)})} className="form-control form-control-solid h-50px" />
                                            </div>
                                        </div>

                                        <div className='col-lg-4'>
                                            <div className="mb-10">
                                                <label className="form-label">Country <span className='text-danger'>*</span></label>
                                                {/* <input type="text" className="form-control form-control-solid h-50px" /> */}
                                                <select className="form-select form-select-solid" value={country} onChange={(e) => setCountry(e.target.value)} aria-label="Select example">
                                                    <option disabled value="">Select</option>
                                                    <CountriesV2 />
                                                </select>
                                            </div>

                                            <div className="mb-10">
                                                <label className="form-label">Language <span className='text-danger'>*</span></label>
                                                {/* <input type="text" className="form-control form-control-solid h-50px" /> */}
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

                                        <div className='col-lg-4'>
                                            <div className="mb-10">
                                                <label className="form-label">Gender <span className='text-danger'>*</span></label>
                                                {/* <input type="text" className="form-control form-control-solid h-50px" /> */}
                                                <select className="form-select form-select-solid" value={gender} onChange={(e) => setGender(e.target.value)} aria-label="Select example">
                                                    <option disabled value="">Select Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <button className="btn btn-primary" onClick={onCreateClicked}>Create <i className="fa fa-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <HandOverPopup title={"Notice"} message={popupMessage} onConfirm={() => {
                            handleClose();
                            if (allowRefresh)
                                Utils.RefreshPage();
                        }} />
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}

export default CreateChatter