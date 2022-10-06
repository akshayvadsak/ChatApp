import React, { useState } from "react";
import HandOverPopup from "../HandOverPopUp/HandOverPopUp";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { User, UserModel } from "../../../client/user/User";
import { Utils } from "../../../client/system/Utils";

type Props = {
  className: string;
};
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  py: 4,
  borderRadius: 3,
};

const UserSearch: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [popupTitle, setPopupTitle] = useState<string>("");
  const [popupMessage, setPopupMessage] = useState<string>("");
  const [hasChoices, setHasChoices] = useState<boolean>(false);
  const [confirmText, setConfirmText] = useState<string>("");
  const [cancelText, setCancelText] = useState<string>("");

  const [searchName, setSearchName] = useState<string>("");

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
  };

  const openPopup = (
    title: string,
    message: string,
    hasChoices: boolean,
    confirmText: string,
    cancelText: string
  ) => {
    setPopupTitle(title);
    setPopupMessage(message);
    setHasChoices(hasChoices);
    setConfirmText(confirmText);
    setCancelText(cancelText);
    handleOpen();
  };

  const onTryDelete = () => {
    openPopup(
      "Are You Sure?",
      "Do you really want to delete these records?",
      true,
      "Delete",
      "Cancel"
    );
  };

  const onDelete = () => {
    openPopup("Notice", "User deleted successfully", false, "Okay", "Okay");
  };

  const onDeleteFailed = () => {
    openPopup(
      "Notice",
      "Oops. Unable to delete user. Please try again!",
      false,
      "Try again",
      "Okay"
    );
  };

  const onPopupConfirm = () => {
    if (confirmText === "Delete") deleteUser();
    if (confirmText === "Try again") deleteUser();
    else handleClose();
  };

  const deleteUser = async () => {
    User.SoftDeleteUser(checkedUsers[0])
      .then(() => {
        setSearchedModels([]);
        onDelete();
      })
      .catch((reason: any) => {
        onDeleteFailed();
      });
  };

  const toggleUsersCheck = (checkedState: boolean, id: string) => {
    let pendingList = [...checkedUsers];
    if (checkedState) {
      if (!pendingList.includes(id)) pendingList.push(id);
      else pendingList[pendingList.indexOf(id)] = id;
    } else {
      if (pendingList.includes(id)) {
        let index = pendingList.indexOf(id);
        if (index > -1) pendingList.splice(index, 1);
      }
    }

    setCheckedUsers(pendingList);
  };

  const checkUsersSelectionState = (userId: string): boolean => {
    let exists = false;

    if (checkedUsers.includes(userId)) exists = true;

    return exists;
  };

  return (
    <>
      <div className={`card ${className}`}>
        <div className="card-header border-0 pt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bolder fs-3 mb-1">Users Search</span>
          </h3>
        </div>

        <div className="card-body py-3 mb-10">
          <div className="row">
            <div className="col-lg-5">
              <div className="mb-10">
                <label className="form-label">Search By Username</label>
                <input
                  type="text"
                  className="form-control form-control-solid"
                  value={searchName}
                  onChange={(e) => {
                    setSearchName(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="col-lg-2 mb-10">
              <label className="form-label">&nbsp;</label>
              <button
                className="btn btn-primary btn-md w-100"
                onClick={searchUserByName}
              >
                Search
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 UserList">
              {searchedModels.length > 0 ? (
                searchedModels?.map((user) => {
                  return (
                    <div
                      key={`user@${Utils.GenerateRandomID()}`}
                      className="user-list-overview"
                    >
                      <div className="list-profile">
                        <div className="user-img">
                          <img src={user.photoURL} alt="Pic" />
                        </div>
                        <h2 className="UserName">{user.displayName}</h2>
                      </div>

                      <div className="form-check form-check-custom form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={checkUsersSelectionState(user.uuid)}
                          value={user.uuid}
                          id="flexCheckDefault"
                          onChange={(e) => {
                            toggleUsersCheck(e.target.checked, e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>
                  <h4 className="message-text">No Users Found</h4>
                </div>
              )}
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-2">
              <button
                type="button"
                className="btn btn-primary btn-md w-100"
                onClick={onTryDelete}
                disabled={!checkedUsers.length}
              >
                Delete
              </button>
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
            <HandOverPopup
              title={popupTitle}
              message={popupMessage}
              hasChoice={hasChoices}
              confirmText={confirmText}
              cancelText={cancelText}
              onConfirm={onPopupConfirm}
              onCancel={() => {
                handleClose();
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
export default UserSearch;
