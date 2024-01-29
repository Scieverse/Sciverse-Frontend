import { LiaPenFancySolid } from "react-icons/lia";
import {length, split, useContext, useState} from 'react';
import { ArticleContext } from "../contexts/ArticleContext";

function ArticleDetails(){
    const {ArticleDisplay} = useContext(ArticleContext)
    const article = ArticleDisplay;
    const [texte,setTexte] = useState(article.full_text);

    const WordCount = (str) => {
        let totalSoFar = 0;
        for (let i = 0; i < texte.length; i++)
          if (str[i] === " ") { // if a space is found in str
            totalSoFar++; // add 1 to total so far
        }
        return (totalSoFar);
      }

    let len = WordCount(texte);
    let len6 = (len-(len%3))/6;
      

    const displayWordRange = (text, start, end) => {
        const words = text.split(" ");
        const selectedWords = words.slice(start, end).join(" ");
        return selectedWords; 
    }; 

  return (
    <div className="w-full">
        <div className="W-4/5 pb-4 px-6 flex flex-col flex-wrap justify-center content-center bg-[#DEDEDE] font-poppins">
            <div className="flex justify-center sm:mb-3 mb-5">
                <h1 className="sm:text-3xl text-6xl font-meduim text-center px-20 my-7"> {article.title}</h1>
            </div>

            <hr className="bg-[#E87D00] h-1 sm:h-0.5 w-full rounded-full border-none sm:mb-0 mb-4"/>

            <div className="flex justify-center flex-col sm:px-4 px-6 my-5">
                <div className="flex content-center flex-nowrap my-3">
                    <LiaPenFancySolid  className="sm:h-6 h-10 sm:w-6 w-10 sm:mr-1 mr-2"/>
                    <p className='text-[#190B28] text-3xl sm:text-base font-semibold mr-1'>Auteurs:</p>
                    <p className='text-[#190B28] text-3xl sm:text-base '>
                        {article.authors.map(auteur =>{
                                return(auteur.name + ". ")
                        })};
                    </p>
                </div>

                <div className="flex content-center flex-nowrap">
                    <LiaPenFancySolid  className="sm:h-6 sm:w-6 h-10 w-10 sm:mr-1 mr-2"/>
                    <p className='text-[#190B28] text-3xl sm:text-base font-semibold mr-1'>Institutions:</p>
                    <p className='text-[#190B28] text-3xl sm:text-base '>
                        {article.authors.map(auteur =>{
                            return(auteur.institutions.map(institution=>{
                                return(institution.institutions_name + " ")
                            }));
                        })}
                    </p>
                </div>

                <div className="flex content-center flex-nowrap my-3">
                    <LiaPenFancySolid  className="sm:h-6 sm:w-6 h-10 w-10 sm:mr-1 mr-2"/>
                    <p className='text-[#190B28] text-3xl sm:text-base font-semibold mr-1'>Mots clés:</p>
                    <p className='text-[#190B28] text-3xl sm:text-base '>
                        {article.keywords.map(keyword => {
                            return(keyword + ", ")
                                }
                        )}
                    </p>
                </div>
            </div>

            <hr className="bg-[#E87D00] h-1 sm:h-0.5 w-full rounded-full border-none sm:mb-0 mb-4"/>

            <div className="flex justify-center my-5 flex-col sm:px-4 px-6 py-2">
                <p className="text-5xl sm:text-3xl font-meduim sm:my-2 mb-3 mx-1">Abstract:</p>
                <p className='text-[#190B28] text-3xl sm:text-sm text-justify mt-2 mb-5'>{article.abstract} </p>
            </div>

            <hr className="bg-[#E87D00] h-1 sm:h-0.5 w-full rounded-full border-none sm:mb-0 mb-4"/>

            <div className="flex justify-center mb-3 flex-col sm:px-4 px-6 py-2 mt-3">
                <p className="text-5xl sm:text-3xl font-meduim sm:my-2 mb-4 mx-1">Article:</p>
                <div className="grid grid-cols-2 gap-10 px-2 mb-5 mt-6">
                    <div><p className='text-[#190B28] text-3xl sm:text-sm text-justify' >{displayWordRange(texte,0,len6+1)}</p></div>
                    <div><p className='text-[#190B28] text-3xl sm:text-sm col-span-1 text-justify' > {displayWordRange(texte,(len6)+1,(2*len6)+1)}</p></div>
                </div>
                <div className="grid grid-cols-2 gap-10 px-2 mb-5">
                    <div><p className='text-[#190B28] text-3xl sm:text-sm text-justify' >{displayWordRange(texte,(2*len6)+1,(3*len6)+1)}</p></div>
                    <div><p className='text-[#190B28] text-3xl sm:text-sm col-span-1 text-justify' > {displayWordRange(texte,(3*len6)+1,(4*len6)+1)}</p></div>
                </div>
                <div className="grid grid-cols-2 gap-10 px-2 mb-7">
                    <div><p className='text-[#190B28] text-3xl sm:text-sm text-justify' >{displayWordRange(texte,(4*len6)+1,(5*len6)+1)}</p></div>
                    <div><p className='text-[#190B28] text-3xl sm:text-sm col-span-1 text-justify' > {displayWordRange(texte,(5*len6)+1,len+1)}</p></div>
                </div>
            </div>

            <hr className="bg-[#E87D00] h-1 sm:h-0.5 w-full rounded-full border-none sm:mb-0 mb-4"/>

            {/* <div className="my-8 flex justify-center h-[95vh]">
                <iframe src={article.pdf_url} width="95%" height="100%"/>
            </div> */}
        </div>
    </div>
  );
};

export default ArticleDetails;