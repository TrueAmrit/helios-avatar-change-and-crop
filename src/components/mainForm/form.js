import { useContext, useState } from "react";
import { MyContext } from "../app-context";
import Button from "../common/button"
import ProfileChanger from "../porfileChanger/profileChanger";
import defaultImg from '../../assets/profile.jpg'
import "./style.css";

const Form =()=>{
    const context = useContext(MyContext)
    const [showModal, setShowModal] = useState(false);
    const setProfile=()=>{
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
      };
    return(
        <div className="form-wrapper">
            <h1> Basic Demonstration of Uploading, previewing, cropping of profile pic/avatar By Amrit Gupta</h1>
            <Button data={"change Pic"} handleClick={setProfile}/>
            <img className="img-def" src={
                    context.profile
                      ? context.profile
                      : defaultImg
                  } alt="profile-pic"/>
            {showModal ? <ProfileChanger closeModal={closeModal} /> : <></>}
        </div>
    )
}

export default Form