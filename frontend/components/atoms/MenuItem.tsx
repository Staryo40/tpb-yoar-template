import { useState, useEffect, useRef } from "react"
import "./MenuItem.css"

type ListItem = {
    itemName: string;
    link: string;
  };
  
  type MenuItemProps = {
    icon: React.ReactNode;
    name: string;
    itemList: ListItem[];
  };
// const itemList = ["Matematika A", "Fisika Dasar A", "Kimia Dasar B", "Tata Tulis Karya Ilmiah", "Bahasa Inggris", "Pengantar Rekayasa Desain", "Pengenalan Komputasi", "Olahraga", "Dasar Pemrograman", "Komputasi dan Masyarakat"]
const MenuItem: React.FC<MenuItemProps> = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const dropdownContainerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownContainerRef.current && 
            !dropdownContainerRef.current.contains(event.target as Node) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleItemClick = (event: React.MouseEvent<HTMLLIElement>) => {
        const link = event.currentTarget.querySelector('a');
        if (link) {
            link.click();
        }
    };
    
    return (
        <>
        <label className="menu">
            {/* <input type='checkbox' checked={isOpen} onChange={handleChange}/> */}
        <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
            <span className="icon">{props.icon}</span>
            <span className="name">{props.name}</span>
            <div className={`triangle ${isOpen ? "dropped" : ""}`} />
        </button>
        {isOpen && <div className='dropdown' ref={dropdownContainerRef}>
            <ul>
                {props.itemList.map((item, index) => (
                    <li onClick={handleItemClick} key={index}>
                        <a href={item.link}>{item.itemName}</a>
                    </li>
                ))}
            </ul>
        </div>}
        </label>
        </>
    )
}

export default MenuItem;