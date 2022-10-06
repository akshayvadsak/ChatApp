/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Chat } from "../../../client/chat/Chat";
import { Utils } from "../../../client/system/Utils";
import { Profile, ProfileModel } from "../../../client/user/Profile";
import { User, UserModel, UserTypes } from "../../../client/user/User";
import { MessageModel } from "../../../_metronic/helpers";
import { MobileView, BrowserView } from "react-device-detect";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import moment from "moment";
import usePagination from "../../../hooks/usePagination";
import { EnvironmentType, FirebaseApp } from "../../../client/FirebaseApp";

const ChatLogs: FC = () => {
  const history = useHistory();

  const [messageEntries, setMessageEntries] = useState<MessageModel[]>([]);
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(10);

  const [pages, setPages] = useState<Array<number>>([]);
  // const [currentPage, setCurrentPage] = useState<number>(1);

  const [chatters, setChatters] = useState<UserModel[]>([]);
  const [userModels, setUserModels] = useState<UserModel[]>([]);
  const [profileModels, setProfileModels] = useState<ProfileModel[]>([]);

  //Filters
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [chatterId, setChatterId] = useState<string>("");

  const [forceUpdate, setForceUpdate] = useState<boolean>(false);

  const siteRef =
    FirebaseApp.environment === EnvironmentType.STAGING
      ? "localhost"
      : "flirtybum";
  /**
   * Here we set default time as 1 because we want last hour records at the after the page was loaded
   */
  const [time, setTime] = useState<string>("1");

  const { currentData, prevPage, nextPage, currentPage, jumpToPage } =
    usePagination(messageEntries, 10);

  const getUserModelById = (
    userId: string | undefined
  ): UserModel | undefined => {
    return userModels.find((x) => {
      return x.uuid === userId;
    });
  };

  const getProfileModelById = (
    profileId: string | undefined
  ): ProfileModel | undefined => {
    return profileModels.find((x) => {
      return x.id === profileId;
    });
  };

  const getChatterById = (
    userId: string | undefined
  ): UserModel | undefined => {
    return chatters.find((x) => {
      return x.uuid === userId;
    });
  };

  // function goPrevious(){
  //   if(start !== 0){
  //     setCurrentPage(currentPage-1)
  //     setStart(start - 10)
  //     setEnd(end - 10)
  //   }
  // }

  // function goNext(){
  //   if(end <= messageEntries.length ){
  //     setCurrentPage(currentPage+1)
  //     setStart(start + 10)
  //     setEnd(end + 10)
  //   }
  // }

  // function goToPage (value: number) {
  //   setCurrentPage(value)
  //   setStart((value - 1)*10);
  //   setEnd((value)*10);
  // }

  function GetUsers(msgEntries: MessageModel[] | undefined) {
    let uuidList: string[] = [];
    if (msgEntries) {
      for (let i = 0; i < msgEntries.length; i++) {
        let entry = msgEntries[i];
        let id = entry.isChatter ? entry.recepient_id : entry.user;

        if (
          !uuidList.includes(id as string) &&
          id !== undefined &&
          id !== "" &&
          id !== null
        ) {
          uuidList.push(id as string);
        }
      }

      if (uuidList && uuidList.length > 0) {
        User.GetUsersByIds(uuidList).then((result) => {
          if (result) setUserModels(result);
        });
      }
    }
  }

  function GetProfiles(msgEntries: MessageModel[] | undefined) {
    let uuidList: string[] = [];
    if (msgEntries) {
      for (let i = 0; i < msgEntries.length; i++) {
        let entry = msgEntries[i];
        let id = entry.isChatter ? entry.user : entry.recepient_id;

        if (!uuidList.includes(id as string)) {
          uuidList.push(id as string);
        }
      }

      if (uuidList && uuidList.length > 0) {
        Profile.GetProfilesByIds(uuidList).then((result) => {
          if (result) setProfileModels(result);
        });
      }
    }
  }

  const changeDateRange = (event: any, picker: any) => {
    setStartDate(new Date(picker.startDate));
    setEndDate(new Date(picker.endDate));
  };

  const getChatLogs = useCallback(
    (
      site: string,
      userId: string,
      chatterId: string,
      start: Date,
      end: Date,
      timeBefore: string
    ) => {
      Chat.GetChatLogs(site, userId, chatterId, start, end, timeBefore).then(
        (messages) => {
          setMessageEntries(messages);
          GetUsers(messages);
          GetProfiles(messages);
          let length = messages.length;
          setPages([]);
          for (let i = 1; length > 0; i++) {
            length = length - 10;
            setPages((oldArray) => [...oldArray, i]);
          }
        }
      );
    },
    []
  );

  const getChatLogsForUserSearch = useCallback(
    (
      site: string,
      userId: string[],
      chatterId: string,
      start: Date,
      end: Date,
      timeBefore: string
    ) => {
      Chat.GetChatLogsForUserSearch(
        site,
        userId,
        chatterId,
        start,
        end,
        timeBefore
      ).then((messages) => {
        setMessageEntries(messages);
        GetUsers(messages);
        GetProfiles(messages);
        let length = messages.length;
        setPages([]);
        for (let i = 1; length > 0; i++) {
          length = length - 10;
          setPages((oldArray) => [...oldArray, i]);
        }
      });
    },
    []
  );

  const applyFilter = () => {
    getChatLogs(siteRef, null as any, chatterId, startDate, endDate, time);
  };

  const handleChange = async (value: string) => {
    if (value) {
      let startDate = new Date();
      let end = new Date();
      const searchValues: any = await User.GetUserByNameForUserSearch(value);
      const uuidArray = searchValues.map((data: any) => data.uuid);
      const userArray = uuidArray.splice(0, 10);
      getChatLogsForUserSearch(
        siteRef,
        userArray,
        null as any,
        startDate,
        end,
        "1"
      );
    } else {
      getChatLogs(siteRef, null as any, chatterId, startDate, endDate, "1");
    }
  };
  useEffect(() => {
    let start = new Date();
    let end = new Date();

    getChatLogs(siteRef, null as any, chatterId, start, end, time);

    User.GetAllUsers(UserTypes.TYPE_CHATTER).then((chatters) => {
      /**
       * filteredChatters removes the test users
       */
      setChatters(chatters);
    });
  }, [forceUpdate, getChatLogs, chatterId, time, siteRef]);

  return (
    <>
      <div className={`card`}>
        {/* begin::Header */}
        <div className="card-header border-0 pt-5 custom-card-header">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bolder fs-3 mb-1">Chat Logs</span>
          </h3>
          <div
            className="d-flex align-items-center position-relative me-4"
            style={{ marginLeft: "20%" }}
          >
            <span className="svg-icon svg-icon-3 position-absolute ms-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mh-50px"
              >
                <rect
                  opacity="0.5"
                  x="17.0365"
                  y="15.1223"
                  width="8.15546"
                  height="2"
                  rx="1"
                  transform="rotate(45 17.0365 15.1223)"
                  fill="black"
                ></rect>
                <path
                  d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                  fill="black"
                ></path>
              </svg>
            </span>
            <input
              type="text"
              id="kt_filter_search"
              className="form-control form-control-white form-control-lg w-170px ps-9 bg-light"
              placeholder="Search By Users"
              onChange={(e) => {
                setTimeout(() => {
                  handleChange(e.target.value);
                }, 500);
              }}
            />
          </div>
          <div className="adminFeed-filters">
            <select
              className="form-select bg-light"
              aria-label="Select example"
              value={chatterId}
              onChange={(e) => setChatterId(e.target.value)}
            >
              <option value={""}>Filter By Chatter</option>
              {chatters?.map((chatter) => {
                return (
                  <option
                    key={`chatter@${Utils.GenerateRandomID()}`}
                    value={chatter.uuid}
                  >
                    {chatter.displayName}
                  </option>
                );
              })}
            </select>
            <div className="adminFeed-filters">
              <select
                className="form-select bg-light"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option key={`time@${Utils.GenerateRandomID()}`} value={"0"}>
                  Filter By Time
                </option>
                <option key={`time@${Utils.GenerateRandomID()}`} value={"1"}>
                  1 hour
                </option>
                <option key={`time@${Utils.GenerateRandomID()}`} value={"4"}>
                  4 hour
                </option>
                <option key={`time@${Utils.GenerateRandomID()}`} value={"8"}>
                  8 hour
                </option>
                <option key={`time@${Utils.GenerateRandomID()}`} value={"24"}>
                  24 hour
                </option>
                <option key={`time@${Utils.GenerateRandomID()}`} value={"168"}>
                  1 week
                </option>
              </select>
            </div>
            <DateRangePicker
              initialSettings={{
                startDate: new Date(),
                endDate: new Date(),
                maxDate: new Date(),
              }}
              onApply={changeDateRange}
            >
              <input type="text" className="form-control" />
            </DateRangePicker>

            <button
              className="btn btn-primary"
              type="button"
              onClick={applyFilter}
            >
              Apply Filter
            </button>
          </div>
        </div>
        {/* Filter Collapse Data end */}

        <div className="card-body py-3 custom-card-body">
          <MobileView>
            <div className="AdminFeed-container">
              {currentData?.map((messageEntry, index) => {
                let userId;
                let profileId;
                let chatterId;

                if (messageEntry.isChatter) {
                  userId = messageEntry.recepient_id;
                  profileId = messageEntry.user;
                  chatterId = messageEntry.chatter_id;
                } else {
                  userId = messageEntry.user;
                  profileId = messageEntry.recepient_id;
                }

                let user = getUserModelById(userId) as UserModel;
                let profile = getProfileModelById(profileId) as ProfileModel;

                let chatter;
                if (chatterId) {
                  chatter = getChatterById(chatterId) as UserModel;
                }

                let userPhoto = user
                  ? user.photoURL
                  : "/media/avatars/150-2.jpg";
                let profilePhoto = profile
                  ? profile.photoURL
                  : "/media/avatars/150-2.jpg";

                let userName = user ? user.displayName : "User";
                let profileName = profile ? profile.displayName : "Profile";
                let senderName = messageEntry.isChatter
                  ? profileName
                  : userName;
                let senderPhoto = messageEntry.isChatter
                  ? profilePhoto
                  : userPhoto;
                let senderType = messageEntry.isChatter ? "Profile" : "User";
                // let formattedDate = moment(messageEntry.time, 'MM/DD/YYYY - hh:mm:ss A');
                // let time = moment(messageEntry.time).format("LT");
                let formattedDate = messageEntry.time.split(",")[0];
                let time = messageEntry.time.split(",")[1];
                let recepientName = messageEntry.isChatter
                  ? userName
                  : profileName;
                let recepientPhoto = messageEntry.isChatter
                  ? userPhoto
                  : profilePhoto;
                let recepientType = messageEntry.isChatter ? "User" : "Profile";

                let key = `feed-row@${Utils.GenerateRandomID()}`;
                return (
                  <div key={key} className="AdminFeed-grid">
                    <div className="Profile-info Recepient-info">
                      <div className="profileThumbnail">
                        <img src={recepientPhoto} alt="" />
                      </div>

                      <div className="Thumbnail-details">
                        <p>Recepient</p>
                        <h3>{recepientName}</h3>
                        <p>{recepientType}</p>
                      </div>
                    </div>

                    <div className="Profile-info sender-info">
                      <div className="profileThumbnail">
                        <img src={senderPhoto} alt="" />
                      </div>

                      <div className="Thumbnail-details">
                        <p>Sender</p>
                        <h3>{senderName}</h3>
                        <p>{senderType}</p>
                      </div>
                    </div>

                    <div className="infoInner">
                      <p>Chatter</p>
                      <h3>
                        {chatter
                          ? chatter.displayName
                          : "Sender is not a Chatter"}
                      </h3>
                    </div>

                    <div className="infoInner">
                      <p>Message</p>
                      <h3>
                        {messageEntry.text.startsWith("http")
                          ? messageEntry.text.endsWith("gif")
                            ? "Sent GIF"
                            : "Sent Image"
                          : messageEntry.text}
                      </h3>
                      {/* <h3>{messageEntry.text}</h3> */}
                    </div>

                    {/* <div className='infoInner'>
                        <p>Received</p>
                        <h3>{formattedDate.fromNow()}</h3>
                      </div> */}

                    <div className="infoInner">
                      <p>Time</p>
                      <h3>{time}</h3>
                    </div>

                    <div className="infoInner">
                      <p>Date</p>
                      <h3>{formattedDate}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </MobileView>

          <BrowserView>
            {/* begin::Table container */}
            <div className="table-responsive yy">
              {/* begin::Table */}
              <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                {/* begin::Table head */}
                <thead>
                  <tr className="fw-bolder text-muted">
                    <th className="min-w-120px">Recepient</th>
                    <th className="min-w-120px">Sender</th>
                    <th className="min-w-100px">Chatter</th>
                    <th className="min-w-150px">Message</th>
                    {/* <th className='min-w-100px'>Received</th> */}
                    <th className="min-w-100px">Time</th>
                    <th className="min-w-100px">Date</th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  {currentData?.map((messageEntry, index) => {
                    let userId;
                    let profileId;
                    let chatterId;

                    if (messageEntry.isChatter) {
                      userId = messageEntry.recepient_id;
                      profileId = messageEntry.user;
                      chatterId = messageEntry.chatter_id;
                    } else {
                      userId = messageEntry.user;
                      profileId = messageEntry.recepient_id;
                    }

                    let user = getUserModelById(userId) as UserModel;
                    let profile = getProfileModelById(
                      profileId
                    ) as ProfileModel;

                    let chatter;
                    if (chatterId)
                      chatter = getChatterById(chatterId) as UserModel;

                    let userPhoto = user
                      ? user.photoURL
                      : "/media/avatars/150-2.jpg";
                    let profilePhoto = profile
                      ? profile.photoURL
                      : "/media/avatars/150-2.jpg";

                    let userName = user ? user.displayName : "User";
                    let profileName = profile ? profile.displayName : "Profile";
                    let senderName = messageEntry.isChatter
                      ? profileName
                      : userName;
                    let senderPhoto = messageEntry.isChatter
                      ? profilePhoto
                      : userPhoto;
                    let senderType = messageEntry.isChatter
                      ? "Profile"
                      : "User";
                    let formattedDate = messageEntry.time.split(",")[0];
                    let time = messageEntry.time.split(",")[1];
                    let recepientName = messageEntry.isChatter
                      ? userName
                      : profileName;
                    let recepientPhoto = messageEntry.isChatter
                      ? userPhoto
                      : profilePhoto;
                    let recepientType = messageEntry.isChatter
                      ? "User"
                      : "Profile";

                    let key = `feed-row@${Utils.GenerateRandomID()}`;
                    return (
                      <tr key={key} className="AdminFeed-grid">
                        <td className="text-dark fw-bolder text-hover-primary fs-6">
                          <table>
                            <td>
                              <img
                                src={recepientPhoto}
                                className="PushImageIcon"
                                alt="Images"
                              />
                            </td>
                            <td>
                              <tr>{recepientName}</tr>
                              <tr className="text-muted">{recepientType}</tr>
                            </td>
                          </table>
                        </td>

                        <td className="text-dark fw-bolder text-hover-primary fs-6">
                          <table>
                            <td>
                              <img
                                src={senderPhoto}
                                className="PushImageIcon"
                                alt="Images"
                              />
                            </td>
                            <td>
                              <tr>{senderName}</tr>
                              <tr className="text-muted">{senderType}</tr>
                            </td>
                          </table>
                        </td>

                        <td className="text-dark fw-bolder text-hover-primary fs-6">
                          {chatter
                            ? chatter.displayName
                            : "Sender is not a Chatter"}
                        </td>

                        <td className="text-dark fw-bolder text-hover-primary fs-6">
                          {messageEntry.text.startsWith("http")
                            ? messageEntry.text.endsWith("gif")
                              ? "Sent GIF"
                              : "Sent Image"
                            : messageEntry.text}
                        </td>

                        {/* <td className='text-dark fw-bolder text-hover-primary fs-6'>
                            {formattedDate.fromNow()}
                          </td> */}
                        <td className="text-dark fw-bolder text-hover-primary fs-6">
                          {time}
                        </td>

                        <td className="text-dark fw-bolder text-hover-primary fs-6">
                          {/* {formattedDate.format('DD/MM/YYYY')} */}
                          {formattedDate}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>

                {/* end::Table body */}
              </table>

              <nav
                aria-label="Page navigation example"
                className="w-100 mb-5 mt-5"
              >
                <ul className="pagination">
                  <li
                    className={
                      currentPage === 1 ? "page-item disabled" : "page-item"
                    }
                    onClick={prevPage}
                  >
                    <a className="page-link" href="javascript:void(0);">
                      Previous
                    </a>
                  </li>
                  {pages.map((value) => {
                    return (
                      <li
                        key={`page@${Utils.GenerateRandomID()}`}
                        className={
                          currentPage === value
                            ? "page-item active"
                            : "page-item"
                        }
                      >
                        <a
                          className="page-link"
                          href="javascript:void(0);"
                          onClick={() => jumpToPage(value)}
                        >
                          {value}
                        </a>
                      </li>
                    );
                  })}
                  <li
                    className={
                      currentPage === pages[pages.length - 1]
                        ? "page-item disabled"
                        : "page-item"
                    }
                    onClick={nextPage}
                  >
                    <a className="page-link" href="javascript:void(0);">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
              {/* end::Table */}
            </div>
            {/* end::Table container */}
          </BrowserView>
        </div>
        {/* begin::Body */}
      </div>
    </>
  );
};

export default ChatLogs;
