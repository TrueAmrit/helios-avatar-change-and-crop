import { useContext, useState } from "react";
import Avatar from "react-avatar-edit";
import { MyContext } from "../app-context";
import Button from "../common/button";
import IconButton from "../common/icon-button";
import "./style.css";

const ProfileSet = (props) => {
  const { closeModal, closeCrop } = props;
  const context = useContext(MyContext);
  const [source, setSource] = useState();
  const onCrop = (source) => {
    setSource(source);
  };
  const updateProfilePic = (e) => {
    context.setProfile(source);
    console.log("context", context.profile);
    e.preventDefault();
    closeCrop();
    closeModal();
  };
  const discardChange = (e) => {
    e.preventDefault();
    closeCrop();
    closeModal();
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <div className="modal-header">
          <div className="header-btn">
            <IconButton data={"arrow_back"} handleClick={closeCrop} />
            <div className="header-tittle">Crop and Set</div>
          </div>
          <div className="min-size-placeholder">Min Size must be : 3 MB</div>
        </div>
        <div className="content-modal">
          <div>Make sure the photo doesn't have your face cut out.</div>
          <div className="pic-container">
            <label>
              <div className="avatar-container">
                <Avatar
                  width={400}
                  height={300}
                  src={context.profile}
                  onCrop={onCrop}
                />
              </div>
            </label>
          </div>
          <div className="change-btn">
            {" "}
            <Button data={"Save Changes"} handleClick={updateProfilePic} />
          </div>
          <div className="remove-btn">
            <Button data={"Discard"} handleClick={discardChange} />
          </div>
        </div>
      </div>
      <div
        className="close-clicked"
        onClick={(e) => {
          e.preventDefault();
          closeCrop();
        }}
      ></div>
    </div>
  );
};

export default ProfileSet;
