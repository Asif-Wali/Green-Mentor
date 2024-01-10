import styles from "../Styling/SideBar.module.css";
import LongsightImage from "../Images/Longsight 1.jpg";
import MainLogo from "../Images/PeterSurgicalLogo2.png";
import EnergySymbol from "../Images/EnergySymbol.png";
import DropDown from "../Images/Drop_Down.png";
import WaterDrop from "../Images/WaterDrop.png";
import DeleteBin from "../Images/DeleteBin.png";
import {useState} from "react";
const SideBar=()=>{
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isWaterDropDown, setWaterDropDown]=useState(false);
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    }
      const toggleWaterDropdown=()=>{
        setWaterDropDown(!isWaterDropDown);
      }

    
    return<div className={styles.sideBar}>
        <section className={styles.topSide}>
            <div className={styles.LogoContainer}>
                <div className={styles.LogoContainerInside1}>
                <img src={MainLogo} alt="Logo" />
                </div>
            </div>
            <div className={styles.DataIn}>
                <div className={styles.DataInButton1}>
                    <p className={styles.DataInButton1paragraph}>DATA-IN</p>
                </div>
                <div className={styles.Energy}>
                    <div className={styles.Energy1}>
                        <img src={EnergySymbol}alt="EnergySymbol" />
                    </div>
                    <p className={styles.Energy2}>Energy</p>
                    <div className={styles.Energy3}>
                        <img className={styles.DropDownSymbol}src={DropDown} 
                            alt="DropDown"
                            onClick={toggleDropdown}>
                        </img>
                        {isDropdownVisible && (
                            <div className={styles.dropdownContent}>
                                <p>Category 1</p>
                                <p>Category 2</p>
                                <p>Category 3</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.WaterEffluents}>
                <div className={styles.waterDrop}>
                    <img src={WaterDrop} alt="waterDrop" />
                </div>
                <div className={styles.watertext}>
                    <p>Water and Effluents</p>
                </div>
                <div className={styles.WaterDropdown}>
                    <img src={DropDown} alt="Dropdown" onClick={toggleWaterDropdown}/>
                
                {isWaterDropDown && (
                        <div className={styles.WaterDropDownContent}>
                            <p>Category 1</p>
                            <p>Category 2</p>
                            <p>Category 3</p>
                        </div>
                    )}

                </div>
                </div>      
            </div>
            <div className={styles.DataIn}>
                <div className={styles.DataInButton1}>
                    <p className={styles.DataInButton1paragraph}>Analyze</p>
                </div>
                <div className={styles.Energy}>
                    <div className={styles.Energy1}>
                        <img src={EnergySymbol}alt="EnergySymbol" />
                    </div>
                    <p className={styles.Energy2}>Energy</p>
                </div>
                <div className={styles.WaterEffluents}>
                <div className={styles.waterDrop}>
                    <img src={DeleteBin} alt="DeleteBin" />
                </div>
                <div className={styles.watertext}>
                    <p>Waste<span>(beta)</span></p>
                </div>
                </div>         
            </div>
            
        </section>
        <section className={styles.buttonsection}>
            <div>
            <button className={styles.HelpButton}>Open Help Centre</button>
            </div>
        </section>
        <section className={styles.bottomside}>
        <div className={styles.bottomBand}>
            <p>POWERED BY</p>
            <img src={LongsightImage}
            alt="Longsight"/>
        </div>
        </section>


    </div>
}
export{SideBar};