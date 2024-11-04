import "./NavBar.css"
import HomeLogo from "../molecules/NavBar/HomeLogo"
import SearchBar from "../molecules/NavBar/SearchBar"
import MenuBar from "../molecules/NavBar/MenuBar"
import LightDarkSwitch from "../molecules/NavBar/LightDarkSwitch"

function NavBar () {
    return (
        <>
        <div className="navigation">
            <HomeLogo />
            <SearchBar />
            <MenuBar />
            <LightDarkSwitch />
        </div>
        </>
    )
}

export default NavBar;