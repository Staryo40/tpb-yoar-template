import './Soal.css'
import './CommonStyles/Text.css'
import './CommonStyles/Bigbox.css'
import './CommonStyles/Component.css'
import './CommonStyles/SideNav.css'
import { Tag } from './SoalTop'
import SoalTop from './SoalTop'
import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown';
import { InlineMath } from 'react-katex';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { STRAPI_BASE_URL } from '../../backend/StrapiService';
import { fetchSoalById } from '../../backend/StrapiService'
import { searchSoalId } from '../../backend/IdSearch'
import { LoadingMain } from './LoadingComponent'

interface SoalComponentProps {
  soalName: string;
}

const SoalContent:React.FC<SoalComponentProps> = ({ soalName }) => {
    const [content, setContent] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [openSolutions, setOpenSolutions] = useState<{ [key: string]: boolean }>({});
  
    useEffect(() => {
      const getContent = async () => {
        try {
          let id: number | null = null;

          const fetchAndUseId = async () => {
            try {
              id = await searchSoalId(soalName);
            } catch (error) {
              console.error('Error:', error);
            }
          };
          
          await fetchAndUseId()

          if (id !== null) {
            const data = await fetchSoalById(Number(id));
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
    }, [soalName]);

    if (loading) return <LoadingMain />;
    if (error) return <p>{error}</p>;

    const fill = content.data.attributes

    const toggleSolution = (id: string) => {
      setOpenSolutions(prevState => ({
        ...prevState,
        [id]: !prevState[id],
      }));
  };

    return (
      <div className="SoalContent">
        <SoalTop />
        <div className="topInfo disclaimer"> {/* disclaimer */}
            <h2 className="text">Disclaimer</h2>
            <hr className="greyLine"/>
            <p className="text generalContentP">{fill.Disclaimer}</p>
        </div>
          {fill.Question.map((item:any, index:number) => {
              const key = `question-${item.id || index}`
              const questionData = item.soal_question.data.attributes
              const solutionData = item.soal_question.data.attributes

              return (
                <div className="soalItem" key={key}>
                  <div className="soalHeader"> {/* header of soal */}
                      <h2 className="soalTitle text">{questionData.SoalTitle}</h2>
                      <div className="soalTags">
                          <Tag text={questionData.DifficultyTag}/>
                          <Tag text={questionData.CategoryTag}/>
                      </div>
                  </div>
                  <hr className="greyLine"/>
                  <div className="soalQuestion"> {/* question's problem */}
                    {questionData.Content.map(( questionItem:any, questionIndex:number) => {
                      const questionKey = `questionContent-${index}-${questionIndex}`

                      if (questionItem.__component === 'fill.text-content') { //paragraph text
                        return <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex, rehypeRaw]} className="text generalContentP" key={questionKey}>{questionItem.text}</ReactMarkdown>;
                        }
          
                        if (questionItem.__component === 'fill.centered-content') { //paragraph text
                          return <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex, rehypeRaw]} className="text generalContentP centered" key={questionKey}>{questionItem.Text}</ReactMarkdown>;
                          }
          
                        if (questionItem.__component === 'fill.image-content') { //images
                          let imageSize;
          
                          if (questionItem.image && questionItem.image.data && questionItem.image.data.attributes && questionItem.image.data.attributes.formats) {
                            const formats = questionItem.image.data.attributes.formats;
                            
                            if (formats.large) {
                              imageSize = formats.large;
                            } else if (formats.medium) {
                              imageSize = formats.medium;
                            } else if (formats.small) {
                              imageSize = formats.small;
                            }
                          }
          
                          let imageUrl
          
                          if (questionItem.image.data.attributes.url) {
                            imageUrl = questionItem.image.data.attributes.url.startsWith('/')
                            ? `${STRAPI_BASE_URL}${questionItem.image.data.attributes.url}`
                            : questionItem.image.data.attributes.url;
                          } else {
                            imageUrl = imageSize.url.startsWith('/')
                            ? `${STRAPI_BASE_URL}${imageSize.url}`
                            : imageSize.url;
                          }
          
                          const alternativeText = questionItem.image?.data?.attributes?.alternativeText || '';
          
                        return (
                          <React.Fragment key={questionIndex}>
                          {questionItem.DetailTop && (
                            <p className="text imageDetailTop">{questionItem.DetailTop}</p>
                          )}
                          <div className="imageContainer" key={questionKey}>
                              <img src={imageUrl} alt={alternativeText} />
                          </div>
                          {questionItem.DetailBottom && (
                            <p className="text imageDetailBottom">{questionItem.DetailBottom}</p>
                          )}
                          </React.Fragment>
                        )}
          
                        if (questionItem.__component === 'fill.equation-content') { //equations
                        return (
                          <div className="text generalContentP equation" key={questionKey}>
                            <InlineMath math={questionItem.equation} />
                          </div>
                        )}
                        return null;
                    })}
                  </div>
                  <hr className="greyLine"/>
                  <div className="solution"> {/* question's solution */}
                    <div className="solutionHeader">
                        <div className='text solutionText'>Pembahasan</div>
                        <button className="text" onClick={() => toggleSolution(`${key}-${index}`)}>{openSolutions[`${key}-${index}`] ? "Close" : "Open"}</button>
                    </div>
                    {openSolutions[`${key}-${index}`] && 
                    <div className="solutionContent">
                      <hr className="greyLine"/>
                      {solutionData.Content.map(( solutionItem:any, solutionIndex:number ) => {
                        const solutionKey = `solutionContent-${index}-${solutionIndex}`

                        if (solutionItem.__component === 'fill.text-content') { //paragraph text
                          return <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex, rehypeRaw]} className="text generalContentP" key={solutionKey}>{solutionItem.text}</ReactMarkdown>;
                          }
            
                          if (solutionItem.__component === 'fill.centered-content') { //paragraph text
                            return <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex, rehypeRaw]} className="text generalContentP centered" key={solutionKey}>{solutionItem.Text}</ReactMarkdown>;
                            }
            
                          if (solutionItem.__component === 'fill.image-content') { //images
                            let imageSize;
            
                            if (solutionItem.image && solutionItem.image.data && solutionItem.image.data.attributes && solutionItem.image.data.attributes.formats) {
                              const formats = solutionItem.image.data.attributes.formats;
                              
                              if (formats.large) {
                                imageSize = formats.large;
                              } else if (formats.medium) {
                                imageSize = formats.medium;
                              } else if (formats.small) {
                                imageSize = formats.small;
                              }
                            }
            
                            let imageUrl
            
                            if (solutionItem.image.data.attributes.url) {
                              imageUrl = solutionItem.image.data.attributes.url.startsWith('/')
                              ? `${STRAPI_BASE_URL}${solutionItem.image.data.attributes.url}`
                              : solutionItem.image.data.attributes.url;
                            } else {
                              imageUrl = imageSize.url.startsWith('/')
                              ? `${STRAPI_BASE_URL}${imageSize.url}`
                              : imageSize.url;
                            }
            
                            const alternativeText = solutionItem.image?.data?.attributes?.alternativeText || '';
            
                          return (
                            <React.Fragment key={solutionIndex}>
                            {solutionItem.DetailTop && (
                              <p className="text imageDetailTop">{solutionItem.DetailTop}</p>
                            )}
                            <div className="imageContainer" key={solutionKey}>
                                <img src={imageUrl} alt={alternativeText} />
                            </div>
                            {solutionItem.DetailBottom && (
                              <p className="text imageDetailBottom">{solutionItem.DetailBottom}</p>
                            )}
                            </React.Fragment>
                          )}
            
                          if (solutionItem.__component === 'fill.equation-content') { //equations
                          return (
                            <div className="text generalContentP equation" key={solutionKey}>
                              <InlineMath math={solutionItem.equation} />
                            </div>
                          )}
                          return null;
                      })}
                    </div>
                    }
                  </div>
                </div>
              )
          })}
      </div>
    )
}

export default SoalContent;