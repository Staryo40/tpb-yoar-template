import SearchIcon from "../../../assets/SearchIcon2.svg"
import "./SearchBar.css"
import '../../../Pages/CommonStyles/Text.css'
import { getKeywords } from "../../../../backend/Search"
import { useEffect, useState, useRef } from "react"

function SearchBar () {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState<string[][]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const searchContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchRelevantKeywords = async () => {
        setIsLoading(true);
        try {
            type RawKeywordsType = string[][] | undefined;
            let rawKeywords: RawKeywordsType

            const fetchKeywords = async () => {
                try {
                    rawKeywords = await getKeywords()
                    // console.log(rawKeywords)
                } catch (error) {
                    console.error('Error:', error);
                  }
            } 
            await fetchKeywords()

            if(inputValue.length) {
                const filteredResult = (rawKeywords ?? []).filter(keywords => {
                    return keywords[0].toLowerCase().includes(inputValue.toLowerCase())
                })
                setResult(filteredResult)
            } else (
                setResult([])
            )
            setShowResults(true);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
          }
    }
    fetchRelevantKeywords()
    }, [inputValue])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setShowResults(false); 
              }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    
    

    const handleInputChange = (event:any) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        console.log(inputValue); 
      };
    
    const handleKeyPress = (event:any) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          handleSubmit();
        }
      };
    
    // const linkHandle = (link:any) => {
    //     window.location.href = link
    // }


    return (
        <>
        <div className="searchContainer">
        <div className="searchMainBody">
            <div className="icon-wrap">
                <img className='icon' src={SearchIcon} />
            </div>
            <input 
            className='searchBarInput text' 
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            type="text" 
            placeholder="Search..."
            />
        </div>
        {showResults && inputValue.length !== 0 && 
        <div className="searchResultBox" ref={searchContainerRef}>
            <ul className="searchResultList">
                {isLoading && 
                (<li className="searchResultItem text">Loading...</li>)}
                {!isLoading && (!result || result.length === 0) &&
                    (<li className="searchResultItem text">{`Search term `}<strong>{inputValue}</strong>{` not found`}</li>)}
                {!isLoading && result.map((item:any, index:number) => {
                    return (
                        // onClick={() => linkHandle(item[1])} key={index}
                        <li className="searchResultItem validSearch" key={index}><a className="text generalContentP" href={item[1]}>{item[0]}</a></li>
                    )
                })}
            </ul>
        </div>
        }
        </div>
        </>
    )
}

export default SearchBar;