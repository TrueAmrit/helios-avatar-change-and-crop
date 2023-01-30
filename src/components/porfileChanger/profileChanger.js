import "./style.css";
import { useContext, useState } from "react";
import { MyContext } from "../app-context";
import Button from "../common/button";
import IconButton from "../common/icon-button";
import "./style.css";
import ProfileSet from "./profileSet";
import defaultImg from "../../assets/profile.jpg";

const ProfileChanger = (props) => {
  const { closeModal } = props;
  const context = useContext(MyContext);
  const [showCrop, setShowCrop] = useState(false);
  const updateProfilePic = () => {
    setShowCrop(true);
  };

  const closeCrop = () => {
    setShowCrop(false);
  };
  const removeProfile = () => {
    context.setProfile();
    props.closeModal();
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <div className="modal-header">
          <div className="header-btn">
            <IconButton data={"close"} handleClick={props.closeModal} />
            <div className="header-tittle">Set Profile Picture</div>
          </div>
          <div className="min-size-placeholder">Min Size must be : 3 MB</div>
        </div>
        <div className="content-modal">
          <div>
            A picture helps people recognize you and help’s us in Identifying
            you
          </div>
          <div className="pic-container">
            <label className="custom-file-upload fas">
              <div className="img-wrap img-upload">
                <img
                  width="500"
                  height="200"
                  src={context.profile ? context.profile : defaultImg}
                  alt="profile-pic"
                />
              </div>
            </label>
          </div>
          <div className="change-btn">
            {" "}
            <Button data={"Change"} handleClick={updateProfilePic} />
          </div>
          <div className="remove-btn">
            <Button data={"Remove"} handleClick={removeProfile} />
          </div>
        </div>
      </div>
      <div
        className="close-clicked"
        onClick={(e) => {
          e.preventDefault();
          props.closeModal();
        }}
      ></div>
      {showCrop ? <ProfileSet closeCrop={closeCrop} closeModal ={closeModal} /> : <></>}
    </div>
  );
};

export default ProfileChanger;
