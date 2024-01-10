import styles from "../Styling/TopNav.module.css";
import GroupIcon from "../Images/Group 625873.png";
import Avatar from "../Images/Ellipse 8.png";
import downArrow from "../Images/fe_drop-down.png"
import BellIcon from "../Images/Vector.png"
const RightSide=()=>{
    return <div className={styles.TopNav}>
        <div>
            <img src={GroupIcon} alt="GroupIcon" />
            <p>Category-1</p>    
        </div>
        <div>
            <div>
                <img src={Avatar} alt="avatar" />
            </div>
            <div>
                <img src={downArrow} alt="DropArrow" />
            </div>
            <div>
                <img src={BellIcon} alt="BellIcon" />
            </div>
        </div>
    </div>
    
}
export {RightSide};