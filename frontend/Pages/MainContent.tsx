import './CommonStyles/Text.css'
import './CommonStyles/Bigbox.css'
import './CommonStyles/Component.css'
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { InlineMath, BlockMath } from 'react-katex';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { fetchMainContentById } from '../../backend/StrapiService'
import { STRAPI_BASE_URL } from '../../backend/StrapiService';
import { useScrollContext } from './ScrollContext';
import { searchMainContentId } from '../../backend/IdSearch';
import { LoadingMain } from './LoadingComponent';


interface ContentComponentProps {
  pageName: string;
}

const MainContent: React.FC<ContentComponentProps> = ({ pageName }) => {
    const [content, setContent] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { registerRef } = useScrollContext();

    useEffect(() => {
      const getContent = async () => {
        try {
          let id: number | null = null;

          const fetchAndUseId = async () => {
            try {
              id = await searchMainContentId(pageName);
            } catch (error) {
              console.error('Error:', error);
            }
          };
          
          await fetchAndUseId()

          if (id !== null) {
            const data = await fetchMainContentById(Number(id));
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
    }, [pageName]);

    if (loading) return <LoadingMain />;
    if (error) return <p>{error}</p>;

    const fill = content.data.attributes

    return (
        <div className={fill.MainType === "Fixed"? "MainContentFixed" : "MainContent"}>
        {fill.MainTitle && 
        <React.Fragment>
        <h1 className='text generalTitleH1' ref={(ref) => ref && registerRef(fill.MainTitleRef, ref)}>{fill.MainTitle}</h1>
        <hr className='blueLine'/>
        </React.Fragment>
        }
        {fill.Content.map((item:any, index:number) => {
              const key = `${item.__component}-${item.id || index}`;

              if (item.__component === 'fill.title-content2') { //h2 title
                return <h2 className="text generalTitleH2" key={key} ref={(ref) => ref && registerRef(item.reference, ref)}>{item.Title}</h2>;
                }

              if (item.__component === 'fill.title-content3') { //h3 title
                return <h3 className="text generalTitleH3" key={key}>{item.Title}</h3>;
                }

              if (item.__component === 'fill.text-content') { //paragraph text
              return <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex, rehypeRaw]} className="text generalContentP" key={key}>{item.text}</ReactMarkdown>;
              }

              if (item.__component === 'fill.centered-content') { //paragraph text
                return <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex, rehypeRaw]} className="text generalContentP centered" key={key}>{item.Text}</ReactMarkdown>;
                }

              if (item.__component === 'fill.image-content') { //images
                let imageSize;

                if (item.image && item.image.data && item.image.data.attributes && item.image.data.attributes.formats) {
                  const formats = item.image.data.attributes.formats;
                  
                  if (formats.large) {
                    imageSize = formats.large;
                  } else if (formats.medium) {
                    imageSize = formats.medium;
                  } else if (formats.small) {
                    imageSize = formats.small;
                  }
                }

                let imageUrl

                if (item.image.data.attributes.url && item.image.data.attributes.width <= 1100) {
                  imageUrl = item.image.data.attributes.url.startsWith('/')
                  ? `${STRAPI_BASE_URL}${item.image.data.attributes.url}`
                  : item.image.data.attributes.url;
                } else {
                  imageUrl = imageSize.url.startsWith('/')
                  ? `${STRAPI_BASE_URL}${imageSize.url}`
                  : imageSize.url;
                }

                const alternativeText = item.image?.data?.attributes?.alternativeText || '';

              return (
                <React.Fragment key={index}>
                {item.DetailTop && (
                  <p className="text imageDetailTop">{item.DetailTop}</p>
                )}
                <div className="imageContainer" key={key}>
                    <img src={imageUrl} alt={alternativeText} />
                </div>
                {item.DetailBottom && (
                  <p className="text imageDetailBottom">{item.DetailBottom}</p>
                )}
                </React.Fragment>
              )}

              if (item.__component === 'fill.equation-content') { //equations
              return (
                <div className="text generalContentP equation" key={key}>
                <BlockMath math={item.equation} />
              </div>
              )
              }

              if (item.__component === 'fill.list-content') { 
                return (
                  <div className="listContainer">
                    <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex, rehypeRaw]} className="text generalContentP" key={key}>{item.Content}</ReactMarkdown>
                  </div>
                )
                }
              return null;})}
    </div>
    );
  };
  
  export default MainContent;