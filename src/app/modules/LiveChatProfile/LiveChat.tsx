import React, { useEffect, useState } from "react";
import ProfileData from "./components/ProfileData";
import ListOfPrivateImages from "./components/ListOfPrivateImages";
import ChatBox from "./components/ChatBox";
import RightSideProfileData from "./components/RightSideProfileData";
import NotesOnUser from "./components/NotesOnUser";
import { PageTitle } from "../../../_metronic/layout/core";
import { IProps } from "../../routing/PrivateRoutes";
import { User } from "../../../client/user/User";
import { useHistory } from "react-router-dom";

const LiveChat: React.FC<IProps> = (props) => {
  const history = useHistory();
  const { match } = props;
  const [userOnlineStatus, setUserOnlineStatus] = useState<boolean>(false);
  const [userCredits, setUserCredits] = useState<number>(0);
  const recepientId = match.params.id as string;
  const siteOfOrigin = match.params.site as string;
  console.log(`Recepient Id: ${recepientId}`);

  useEffect(() => {
    User.GetUserAccount(recepientId).then(async (user) => {
      if (user) {
        await User.ListenForUserOnlineStatus(recepientId, (status) => {
          setUserOnlineStatus(status);
        });
        await User.ListenForUserCredits(recepientId, (credits) => {
          setUserCredits(credits);
        });
        let unlisten = history.listen(
          (location: { pathname: string | string[] }, action: any) => {
            if (!location.pathname.includes("/live-chat")) {
              User.StopListeningForUserOnlineStatus(recepientId);
              User.StopListeningForUserCredits(recepientId);
            }
            unlisten();
          }
        );
      }
    });
  }, [history, recepientId]);

  return (
    <>
      <PageTitle>Live Chat</PageTitle>
      <div className="row d-lg-none ChatScrolling">
        <div className="col-lg-12">
          <div className="CustomScrolling d-flex justify-content-between align-items-center">
            <a href="#Chat_Box" className="btn btn-primary">
              {" "}
              Chat{" "}
            </a>
            <a href="#Notes_User" className="btn btn-primary">
              {" "}
              User{" "}
            </a>
            <a href="#Profile_Data" className="btn btn-primary">
              {" "}
              Profile{" "}
            </a>
            <a href="#Private_Images" className="btn btn-primary">
              {" "}
              Images{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-4">
          <ProfileData />
          <ListOfPrivateImages
            recepient_uuid={recepientId}
            site_of_origin={siteOfOrigin}
          />
        </div>

        <div className="col-lg-4">
          <ChatBox
            status={userOnlineStatus}
            recepient_uuid={recepientId}
            site_of_origin={siteOfOrigin}
          />
        </div>

        <div className="col-lg-4">
          <RightSideProfileData
            status={userOnlineStatus}
            credits={userCredits}
            id={recepientId}
            site_of_origin={siteOfOrigin}
          />
          <NotesOnUser id={recepientId} />
        </div>
      </div>
    </>
  );
};
export default LiveChat;
