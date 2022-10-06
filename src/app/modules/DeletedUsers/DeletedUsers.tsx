import React, { useEffect, useState } from "react";
import HandOverPopup from "../HandOverPopUp/HandOverPopUp";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { User, UserModel } from "../../../client/user/User";
import { CircularProgress } from "@mui/material";

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

const DeletedUsers: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [deletedUsers, setDeletedUsers] = useState<UserModel[]>([]);
  const [popupTitle, setPopupTitle] = useState<string>("");
  const [popupMessage, setPopupMessage] = useState<string>("");
  const [hasChoices, setHasChoices] = useState<boolean>(false);
  const [confirmText, setConfirmText] = useState<string>("");
  const [cancelText, setCancelText] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

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
  const restoreUserAccount = (uuid: string) => {
    User.RestoreDeletedUser(uuid)
      .then(() => {
        fetchDeletedUserAccounts();
        onRestore();
      })
      .catch(() => {
        onRestoreFailed();
      });
  };

  const deleteUserAccountPermanently = (uuid: string) => {
    User.DeleteUserPermanently(uuid)
      .then(() => {
        fetchDeletedUserAccounts();
        onDelete();
      })
      .catch(() => {
        onDeleteFailed();
      });
  };

  const onTryRestore = (uuid: string) => {
    setSelectedUser(uuid);
    openPopup(
      "Are You Sure?",
      "Do you really want to restore these record?",
      true,
      "Restore",
      "Cancel"
    );
  };

  const onTryDelete = (uuid: string) => {
    setSelectedUser(uuid);
    openPopup(
      "Are You Sure?",
      "Do you really want to delete these record permanently?. This action cannot be undone.",
      true,
      "Delete Permanently",
      "Cancel"
    );
  };

  const onRestore = () => {
    openPopup("Notice", "User restore successfully", false, "Okay", "Okay");
  };

  const onRestoreFailed = () => {
    openPopup(
      "Notice",
      "Oops. Unable to restore user. Please try again!",
      false,
      "Okay",
      "Okay"
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
      "Okay",
      "Okay"
    );
  };

  const onPopupConfirm = () => {
    if (confirmText === "Restore") restoreUserAccount(selectedUser);
    if (confirmText === "Delete Permanently")
      deleteUserAccountPermanently(selectedUser);
    else handleClose();
  };

  const fetchDeletedUserAccounts = () => {
    setLoading(true);
    User.GetDeletedUserAccount().then((models) => {
      if (models) {
        setDeletedUsers(models);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchDeletedUserAccounts();
  }, []);

  return (
    <>
      <div className={`card ${className}`}>
        <div className="card-header border-0 pt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bolder fs-3 mb-1">
              Deleted Users List
            </span>
          </h3>
        </div>

        <div className="card-body py-3">
          <div className="row">
            <div className="col-lg-12 UserList">
              {loading ? (
                <CircularProgress size={30} />
              ) : deletedUsers.length ? (
                deletedUsers.map((user) => {
                  return (
                    <div className="user-list-overview" key={user.uuid}>
                      <div className="list-profile">
                        <div className="user-img">
                          <img src={user.photoURL} alt="Pic" />
                        </div>
                        <h2 className="UserName">{user.displayName}</h2>
                      </div>

                      <div>
                        <button
                          className="btn btn-primary btn-sm mx-3"
                          onClick={() => onTryRestore(user.uuid)}
                        >
                          Restore
                        </button>
                        <button
                          className="btn btn-danger btn-sm mx-3"
                          onClick={() => onTryDelete(user.uuid)}
                        >
                          Delete Permanently
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="my-5">
                  <h4 className="message-text">No user accounts deleted yet</h4>
                </div>
              )}
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
export default DeletedUsers;
