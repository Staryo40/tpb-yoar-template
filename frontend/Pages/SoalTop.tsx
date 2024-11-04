import './Soal.css'
import './CommonStyles/Text.css'
import './CommonStyles/Bigbox.css'
import './CommonStyles/Component.css'
import './CommonStyles/SideNav.css'
import React, { useState } from 'react'

interface TagProps {
    text: string;
  }

export const Tag: React.FC<TagProps> = ({ text }) => {
    const getBackgroundColor = (text: string): string => {
      switch (text) {
        case 'Easy':
            return '#00a415'
        case 'Medium':
            return '#ffa000'
        case 'Hard':
            return '#e50000'
        case 'Extreme':
            return '#5400a4'
        case 'Recommended':
            return 'blue'
        case 'Repitition':
            return '#d900e3'
        case 'Mixed':
            return '#00a497'
        case 'Mono':
            return '#898989'
        default:
            return 'gray'
      }
    };
  
    const backgroundColor = getBackgroundColor(text);
  
    return (
        <div className="tagItem" style={{ backgroundColor }}>{text}</div>
    );
  };

function SoalTop () {
    const [isOpen, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!isOpen)
    }

    return (
        <>
            <div className={`topInfo tagInfo ${isOpen ? 'open' : ''}`} onClick={isOpen ? undefined : handleClick}>
                <h2 className="text centered">Tag Soal</h2>
                {isOpen && 
                <React.Fragment>
                <hr className='greyLine'/>
                <div className="tagInfoTable">
                    <div className="tableTitle text">Difficulty Tags</div>
                    <div className="tableCell tagCell text">
                        <Tag text="Easy"/>
                    </div>
                    <div className="tableCell text">Second Column</div>
                    
                    <div className="tableCell tagCell text">
                        <Tag text="Medium"/>
                    </div>
                    <div className="tableCell text">Another Second Column</div>

                    <div className="tableCell tagCell text">
                        <Tag text="Hard"/>
                    </div>
                    <div className="tableCell text">Another Second Column</div>

                    <div className="tableCell tagCell text">
                        <Tag text="Extreme"/>
                    </div>
                    <div className="tableCell text">Another Second Column</div>
                    
                    <div className="tableTitle text">Category Tags</div>
                    <div className="tableCell tagCell text">
                        <Tag text="Recommended"/>
                    </div>
                    <div className="tableCell text">Second Column</div>
                    
                    <div className="tableCell tagCell text">
                        <Tag text="Repitition"/>
                    </div>
                    <div className="tableCell text">Another Second Column</div>

                    <div className="tableCell tagCell text">
                        <Tag text="Mixed"/>
                    </div>
                    <div className="tableCell text">Another Second Column</div>

                    <div className="tableCell tagCell text">
                        <Tag text="Mono"/>
                    </div>
                    <div className="tableCell text">Another Second Column</div>
                </div>
                <button className="text closeButton" onClick={() => {handleClick()}}>Close</button>

                </React.Fragment>
                }
            </div>
        </>
    )
}

export default SoalTop;