import "./Homepage.css"
import "./CommonStyles/Text.css"
import './CommonStyles/Bigbox.css'
import "./CommonStyles/Component.css"
import './HomepageModule.css'
import { fetchHomePageModule } from '../../backend/StrapiService'
import { useState, useEffect } from "react"
import { LoadingHomeModule } from "./LoadingComponent"

interface ModuleComponentProps {
    moduleName: string;
  }

const idToModuleMapping: Record<number, string> = {
    1: 'Quote',
  };

const DayQuote: React.FC<ModuleComponentProps> = ({ moduleName }) => {
    const [content, setContent] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [itemIndex, setItemIndex] = useState<number>(0);

    const id = Object.keys(idToModuleMapping).find(key => idToModuleMapping[parseInt(key)] === moduleName);
  
    useEffect(() => {
      const getContent = async () => {
        try {
          const data = await fetchHomePageModule(Number(id));
          setContent(data);
          const randomIndex = Math.floor(Math.random() * (data.data.attributes.Quotes.items.length || 1));
          setItemIndex(randomIndex);
        } catch (error) {
          setError('Error fetching content');
        } finally {
          setLoading(false);
        }
      };
      getContent();
    }, [id]);

    if (loading) return <LoadingHomeModule />;
    if (error) return <p>{error}</p>;

    const fill = content.data.attributes

    const handleRandomize = () => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * (fill?.Quotes?.items?.length || 1));
        } while (newIndex === itemIndex);
        setItemIndex(newIndex);
      };


    return (
        <>
        <div className="module">
            <h2 className="text sideTitleIn quoteP">{fill.Title}</h2>
            <hr className="greyLine"/>
            <p className="text generalContentP quoteP">
                <em>{fill.Quotes.items[itemIndex].originalLine}</em>
            </p>
            {fill.Quotes.items[itemIndex].translated && 
            <p className="text generalContentP quoteP">
                <em>{fill.Quotes.items[itemIndex].translated}</em>
            </p>}
            <button className="randomQuoteButton generalContentP quoteP" onClick={handleRandomize}>Randomize!</button>
        </div>

        </>
    )
}

export default DayQuote;