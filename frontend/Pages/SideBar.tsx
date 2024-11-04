import './CommonStyles/Text.css'
import './CommonStyles/Bigbox.css'
import './CommonStyles/Component.css'
import './CommonStyles/SideNav.css'
import './MKBagian.css'
import './Soal.css'
import React, { useEffect, useState } from 'react';
import { fetchSideBarById } from '../../backend/StrapiService'
import { STRAPI_BASE_URL } from '../../backend/StrapiService';
import { useScrollContext } from './ScrollContext'
import { searchSidebarId } from '../../backend/IdSearch'
import { LoadingSide } from './LoadingComponent'

interface SideBarComponentProps {
    sidebarName: string;
    scrollItem?: string;
  }


const SideBar: React.FC<SideBarComponentProps> = ({ sidebarName, scrollItem }) => { // sidebar
    const [content, setContent] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});
    const { getRef } = useScrollContext();
  
    useEffect(() => {
      const getContent = async () => {
        try {
          let id: number | null = null;

          const fetchAndUseId = async () => {
            try {
              id = await searchSidebarId(sidebarName);
            } catch (error) {
              console.error('Error:', error);
            }
          };
          
          await fetchAndUseId()

          if (id !== null) {
            const data = await fetchSideBarById(Number(id));
            setContent(data);
          } else {
            setError('ID not found'); 
          }

        } catch (error) {
          setError('Error fetching content');
        } finally {
          setLoading(false);
        }
      };
      getContent();
    }, [sidebarName]);

    if (loading) return <LoadingSide />;
    if (error) return <p>{error}</p>;

    const fill = content.data.attributes

    const toggleDropdown = (id: string) => {
        setOpenDropdowns(prevState => ({
          ...prevState,
          [id]: !prevState[id],
        }));
    };
    
    const scrollToSection = (scrollRef: string) => {
      const element = getRef(scrollRef);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    };

    const handleClick = (ref:string, link:string, scrollItem:any, scrollSwitch:string) => {
      if (scrollSwitch !== null && scrollSwitch !== undefined && scrollItem !== null && scrollItem !== undefined && scrollItem === scrollSwitch) {
        scrollToSection(ref);
      } else {
        window.location.href = link;
        // if (!loading) {
        //   scrollToSection(ref)
        // }
      }
    }

    return (
        <>
        <div className={fill.SideType === "Fixed"? "SidebarFixed" : "Sidebar"}>
        {fill.SideBarItem.map((item: any, index: number) => {
            const key = `${item.__component}-${item.id}`;
            if (item.__component === "side.side-title") { // Side title 
                return (<h2 className='text sideTitle' key={key}>{item.Title}</h2>)
            }

            if (item.__component === "side.side-button") { // Side button 
                return (
                    <a className='sideButton' href={item.Link ? item.Link : "#"} key={key}>
                        <h2 className='text sideTitleIn'>{item.SideTitleIn}</h2>
                        <p className='text generalContentP'>{item.Content}</p>
                    </a>
                )
            }

            if (item.__component === "side.option-bagian") { // Option Bagian 
                return (
                    <a href={item.Link ? item.Link : "#"} className="optionBagian text" key={key}>{item.Title}</a>
                )
            }

            if (item.__component === "side.side-nav") { // Side navigation 
              if (item.Type === "Normal") {
                return (
                  <React.Fragment key={key}>
                    <div className="SideNavContainer" key={key}>
                    <div className="SideNav">
                    {item.Items.items.map((subItem:any, subIndex:number) => {
                        const subKey = `side-nav-item-${index}-${subIndex}`;
                        const refKey = subItem.scrollRef;
                        const linkKey = subItem.link;

                        return(
                        <React.Fragment key={subKey}>
                        <div className="SideNavItem" key={subKey}>
                            <div className="SNTextContainer" onClick={() => { handleClick(refKey, linkKey, scrollItem, subItem.scrollSwitch) }}>
                                <div className="SNText SNIndex text">{subItem.index}</div>
                                <div className="SNText SNMainText text">{subItem.mainText}</div>
                            </div>
                            {subItem.dropdown && <div onClick={() => toggleDropdown(`${key}-${subIndex}`)} className={`triangleSide ${openDropdowns[`${key}-${subIndex}`] ? "dropped" : ""}`} key={`${subKey}-triangle`}/>}
                        </div>
                        {subItem.dropdown && openDropdowns[`${key}-${subIndex}`] && <div className='SNDropdown' key={`${subKey}-dropdown`}>
                            {subItem.dropdown.map((dpitem: any, dpIndex: number) => {
                                 const dpKey = `dropdown-item-${index}-${subIndex}-${dpIndex}`
                                 const refdpKey = dpitem.scrollRef;
                                 const linkdpKey = dpitem.link;

                                return (
                                <div className="SNTextContainer dropdownItem" onClick={() => { handleClick(refdpKey, linkdpKey, scrollItem, dpitem.scrollSwitch) }} key={dpKey}>
                                    <div className="SNText SNIndexDropdown text">{dpitem.index}</div>
                                    <div className="SNText SNMainDropdown text">{dpitem.mainText}</div>
                                </div>
                                )
                            })}
                            </div>}
                            </React.Fragment>
                        )
                    })}
                    </div>
                    </div>
                  </React.Fragment>
                )
              } else {
                return (
                  <div className="SideNavContainer" key={key}>
                  <div className="SideNavSoal">
                    {item.Items.items.map(( subItem:any, subIndex:number) => {
                      const subKey = `side-nav-item-${index}-${subIndex}`;
                      const refKey = subItem.scrollRef;
                      const linkKey = subItem.link;

                      return (
                        <div className="SNTextSoal SNText" onClick={() => { handleClick(refKey, linkKey, scrollItem, subItem.scrollSwitch) }} key={subKey}>
                          <span style={{ marginRight: '8px' }}>•</span> 
                          <span>{subItem.title}</span>
                        </div>
                      )
                    })}
                  </div>
                  </div>
                )
              }
            }
            return null;
        })}
        </div>
        </>
    )
}

export default SideBar;
