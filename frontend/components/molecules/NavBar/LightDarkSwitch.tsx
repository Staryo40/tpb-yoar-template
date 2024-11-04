import './LightDarkSwitch.css';
import {useState, useEffect} from 'react';
import sun from '../../../assets/Sun.svg';
import moon from '../../../assets/Moon.svg';

function LightDarkSwitch () {
    const body = document.querySelector("body") as HTMLBodyElement || null

    const setDarkMode = () => {
        body.setAttribute("data-theme", "dark")
        localStorage.setItem("selected-theme", "dark")
    }
    const setLightMode = () => {
        body.setAttribute("data-theme", "light")
        localStorage.setItem("selected-theme", "light")
    }

    const selectedTheme = localStorage.getItem("selected-theme");

    const [isChecked, setIsChecked] = useState(selectedTheme === "dark");
  
    useEffect(() => {
      if (selectedTheme === "dark") {
        setDarkMode();
      } else {
        setLightMode();
      }
    }, [selectedTheme]);
  
    const handleChange = () => {
      setIsChecked(!isChecked);
      if (isChecked) {
        setLightMode();
      } else {
        setDarkMode();
      }
    };
    return (
        <>
        <div className="LDswitch">
        <label>
            <input type='checkbox' checked={isChecked} onChange={handleChange}/>
            <span className="slider">
                <img src={isChecked ? moon :  sun} />
            </span>
        </label>
        </div>
        {/* <p>The checkbox is {isChecked ? "checked" : "unchecked"}</p> */}
        </>
    )
}

export default LightDarkSwitch;