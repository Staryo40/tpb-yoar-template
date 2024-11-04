import './MenuItemLegacy.css';
import { useState } from 'react';

// const itemList = ["Matematika IA", "Matematika IIA"]
function MenuItemLegacy (props:any) {

    const [isOpen, setIsOpen] = useState(false)
    const handleChange = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <div className='container'>
        <label className="menu">
            <input type='checkbox' checked={isOpen} onChange={handleChange}/>
            <span className="icon">{props.icon}</span>
            <span className="name">{props.name}</span>
            <div className={`triangle ${isOpen ? "dropped" : ""}`} />
        </label>
        {isOpen && <div className='dropdown'>
                {props.itemList.map((item:string) => (
                    <div className='dropdownItem'>
                        <p>{item}</p>
                    </div>
                ))

                }
        </div>}
        </div>
        </>
    )
}

export default MenuItemLegacy;