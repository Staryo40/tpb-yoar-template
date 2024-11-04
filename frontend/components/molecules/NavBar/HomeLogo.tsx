import HomeIcon from "../../../assets/HomeButton.svg"
import "./HomeLogo.css"

function HomeLogo () {
    return (
        <div className="containerLogo">
            <a href="/home">
            <img className='Logo' src={HomeIcon} />
            {/* {HomeIcon} */}
            </a>
        </div>
    )
}

export default HomeLogo;