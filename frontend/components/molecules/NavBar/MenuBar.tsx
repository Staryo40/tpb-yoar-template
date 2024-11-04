import MenuItem from "../../atoms/MenuItem";
import MenuData from "./MenuList.json"
import "./MenuBar.css"

function MenuBar (this: any) {
    return (
        <div className="MenuBar">
            <MenuItem icon={MenuData.matakuliah.icon} name={MenuData.matakuliah.name} itemList={MenuData.matakuliah.listItem}/>
            <MenuItem icon={MenuData.materi.icon} name={MenuData.materi.name} itemList={MenuData.materi.listItem}/>
            <MenuItem icon={MenuData.soal.icon} name={MenuData.soal.name} itemList={MenuData.soal.listItem}/>
        </div>
    )
}

export default MenuBar;