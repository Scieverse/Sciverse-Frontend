import { LiaPenFancySolid } from "react-icons/lia";
import {length, split, useState} from 'react';

function ArticleDetails({article}){

    const arti = article;
    const [texte,setTexte] = useState(arti.texte_integral);
    const WordCount = (str) => {
        let totalSoFar = 0;
        for (let i = 0; i < texte.length; i++)
          if (str[i] === " ") { // if a space is found in str
            totalSoFar++; // add 1 to total so far
        }
        return (totalSoFar);
      }

    let len = WordCount(texte);
    let len2 = (len-(len%2))/2;
      

    const displayWordRange = (text, start, end) => {
        const words = text.split(" ");
        const selectedWords = words.slice(start, end).join(" ");
        return selectedWords; 
    }; 

  return (
    <div className="w-[1264px]">
        <div className="W-4/5 py-4 px-6 flex flex-col flex-wrap justify-center content-center bg-[#DEDEDE] font-poppins">
            <div className="flex justify-center sm:mb-3 mb-5">
                <h1 className="sm:text-3xl text-6xl font-meduim"> {article.titre}</h1>
            </div>

            <hr className="bg-[#E87D00] h-1 sm:h-0.5 w-full rounded-full border-none sm:mb-0 mb-4"/>

            <div className="flex justify-center mb-3 flex-col sm:px-4 px-6">
                <div className="flex content-center flex-nowrap my-3">
                    <LiaPenFancySolid  className="sm:h-6 h-10 sm:w-6 w-10 sm:mr-1 mr-2"/>
                    <p className='text-[#190B28] text-3xl sm:text-base font-semibold mr-1'>Auteurs:</p>
                    <p className='text-[#190B28] text-3xl sm:text-base '>
                        {article.auteurs.map(auteur =>{
                                return(auteur.nom + " " + auteur.prenom + ". ")
                        })};
                    </p>
                </div>

                <div className="flex content-center flex-nowrap">
                    <LiaPenFancySolid  className="sm:h-6 sm:w-6 h-10 w-10 sm:mr-1 mr-2"/>
                    <p className='text-[#190B28] text-3xl sm:text-base font-semibold mr-1'>Institutions:</p>
                    <p className='text-[#190B28] text-3xl sm:text-base '>
                        {article.auteurs.map(auteur =>{
                            return(auteur.institutions.map(institu=>{
                                return(institu.nom_institution + " ")
                            }));
                        })}
                    </p>
                </div>

                <div className="flex content-center flex-nowrap my-3">
                    <LiaPenFancySolid  className="sm:h-6 sm:w-6 h-10 w-10 sm:mr-1 mr-2"/>
                    <p className='text-[#190B28] text-3xl sm:text-base font-semibold mr-1'>Mots clés:</p>
                    <p className='text-[#190B28] text-3xl sm:text-base '>
                        {article.mot_cle.map(article => {
                            return(article + " ")
                                }
                        )}
                    </p>
                </div>
            </div>

            <hr className="bg-[#E87D00] h-1 sm:h-0.5 w-full rounded-full border-none sm:mb-0 mb-4"/>

            <div className="flex justify-center mb-3 flex-col sm:px-4 px-6 py-2">
                <p className="text-5xl sm:text-3xl font-meduim sm:my-2 mb-4 mx-1">Abstract:</p>
                <p className='text-[#190B28] text-3xl sm:text-sm'>{article.resume} </p>
            </div>

            <hr className="bg-[#E87D00] h-1 sm:h-0.5 w-full rounded-full border-none sm:mb-0 mb-4"/>

            <div className="flex justify-center mb-3 flex-col sm:px-4 px-6 py-2">
                <p className="text-5xl sm:text-3xl font-meduim sm:my-2 mb-4 mx-1">Article:</p>
                <div className="grid grid-cols-2 gap-10 px-4 ">
                    <div><p className='text-[#190B28] text-3xl sm:text-sm' >{displayWordRange(texte,1,len2)}</p></div>
                    <div><p className='text-[#190B28] text-3xl sm:text-sm col-span-1' > {displayWordRange(texte,len2, len)}</p></div>
                </div>
            </div>

            <hr className="bg-[#E87D00] h-1 sm:h-0.5 w-full rounded-full border-none sm:mb-0 mb-4"/>

            <div className="m-4 flex justify-center h-[95vh]">
                <iframe src={article.url_pdf} width="80%" height="100%"/>
            </div>
        </div>
    </div>
  );
};

export default ArticleDetails;