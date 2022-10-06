import React, { useState } from 'react';
import { User, UserModel } from '../../../client/user/User';
import HandOverPopup from '../HandOverPopUp/HandOverPopUp'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Utils } from '../../../client/system/Utils';
import { UsersList } from '../profile/components/UsersList';

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
    borderRadius: 3,
};

const GiveCredit: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [popupTitle, setPopupTitle] = useState<string>("");
    const [popupMessage, setPopupMessage] = useState<string>("");
    const [hasChoices, setHasChoices] = useState<boolean>(false);
    const [confirmText, setConfirmText] = useState<string>("");
    const [cancelText, setCancelText] = useState<string>("");

    const [searchName, setSearchName] = useState<string>("");
    const [creditsToAdd, setCreditsToAdd] = useState<number>(0);

    const [searchedModels, setSearchedModels] = useState<UserModel[]>([]);
    const [checkedUsers, setCheckedUsers] = useState<string[]>([]);
    
    const searchUserByName = () => {
        User.GetUserByName(searchName).then((models) => {
            console.log(`Models Length: ${models.length}`);
            if (models) {
                setSearchedModels(models);

                if (models.length === 0) {
                    openPopup("Notice", "No Users Found!", false, "Okay", "Okay");
                }
            }
        });
    }

    const addCreditsToUser = async () => {
        if (checkedUsers.length > 0) {
            let userId = checkedUsers[0];
            await User.AddUserCredits(userId, creditsToAdd).then((credits) => {
                openPopup("Notice", "Successfully Added Credits!", false, "Okay", "Okay");
                updateCredits();
            }).catch(() => {
                openPopup("Notice", "Failed to Add Credits", false, "Okay", "Okay");
            });
        } else {
            openPopup("Notice", "No Users Selected!", false, "Okay", "Okay");
        }
    }

    const updateCredits = async () => {
        searchedModels.forEach((user) => {
            User.GetUserCredits(user.uuid).then((credits) => {
                user.credits = credits;
            })
        });
    }

    const toggleUsersCheck = (checkedState: boolean, id: string) => {
        let pendingList = [...checkedUsers];
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

        setCheckedUsers(pendingList);
    }

    const checkUsersSelectionState = (userId: string): boolean => {
        let exists = false;

        if (checkedUsers.includes(userId))
            exists = true;

        return exists;
    }
    
    const openPopup = (title: string, message: string, hasChoices: boolean, confirmText: string, cancelText: string) => {
        setPopupTitle(title);
        setPopupMessage(message);
        setHasChoices(hasChoices);
        setConfirmText(confirmText);
        setCancelText(cancelText);
        handleOpen();
    }

    return (
        <>
            <div className={`card`}>
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bolder fs-3 mb-1'>Give Credits</span>
                    </h3>
                </div>
                <div className="card-body p-10">
                    <div className='row'>
                        <div className='col-lg-8'>
                            <div className="mb-10">
                                <div className="form-group my-7 ghm">
                                    <label className='mb-2'>User Search</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control form-control-solid h-60px ps-8" placeholder="Search" value={searchName} onChange={(e) => { setSearchName(e.target.value) }} />
                                        <div className="input-group-append">
                                            <button className="btn btn-secondary bg-light customrounds h-60px" type="button" onClick={searchUserByName}><img alt='Pic' src='/media/svg/search_black_24dp.svg' /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-light">
                                <div className="card-body p-5">
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            {
                                                searchedModels.length > 0 ?
                                                    searchedModels?.map((user) => {
                                                        return (
                                                            <div key={`user@${Utils.GenerateRandomID()}`} className='d-flex flex-stack mb-5'>
                                                                <div className='d-flex align-items-center'>
                                                                    <div className='symbol symbol-45px symbol-circle'>
                                                                        <img alt='Pic' src={user.photoURL} />
                                                                    </div>

                                                                    <div className='ms-5'>
                                                                        <a href='#' className='fs-5 fw-bolder text-gray-900 text-hover-primary mb-2'>
                                                                            {user.displayName}
                                                                        </a>
                                                                        <div className='fw-bold text-gray-400'>Credits: {user.credits}</div>
                                                                    </div>
                                                                </div>

                                                                <div className='d-flex flex-column align-items-end ms-2'>
                                                                    <div className="form-check form-check-custom form-check-solid">
                                                                        <input className="form-check-input bg-dark" type="checkbox" value={user.uuid} id="flexCheckChecked" checked={checkUsersSelectionState(user.uuid)} onChange={(e) => { toggleUsersCheck(e.target.checked, e.target.value) }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                    :
                                                    <div>
                                                        <h4 className='UserName'>No Users Found</h4>
                                                    </div>
                                            }
                                            {/* <div className='d-flex flex-stack mb-5'>
                                                <div className='d-flex align-items-center'>
                                                    <div className='symbol symbol-45px symbol-circle'>
                                                        <img alt='Pic' src='/media/avatars/150-2.jpg' />
                                                    </div>

                                                    <div className='ms-5'>
                                                        <a href='#' className='fs-5 fw-bolder text-gray-900 text-hover-primary mb-2'>
                                                            User One
                                                        </a>
                                                        <div className='fw-bold text-gray-400'>Credit Before - 700 , Credit After - 900</div>
                                                    </div>
                                                </div>

                                                <div className='d-flex flex-column align-items-end ms-2'>
                                                    <div className="form-check form-check-custom form-check-solid">
                                                        <input className="form-check-input bg-dark" type="checkbox" value="" id="flexCheckChecked" />
                                                    </div>
                                                </div>
                                            </div> */}

                                            <div className='separator separator-dashed'></div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="form-group my-7">
                                <label className='mb-2'>Enter the amount of credits to be added</label>
                                <div className="input-group">
                                    <input type="number" min="0" className="form-control" value={creditsToAdd} placeholder="Credit Count" onChange={(e) => {
                                        e.target.value = (Math.abs(parseFloat(e.target.value))).toString()
                                        setCreditsToAdd(parseFloat(e.target.value))
                                    }} />
                                    <div className="input-group-append">
                                        <button className="btn btn-secondary customrounds" type="button" onClick={addCreditsToUser}>Add Credits</button>
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
                        <HandOverPopup title={popupTitle} message={popupMessage} hasChoice={hasChoices} confirmText={confirmText} cancelText={cancelText} onConfirm={() => {
                            handleClose();
                        }} onCancel={() => {
                            handleClose();
                        }} />
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}

export default GiveCredit