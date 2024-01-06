import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import Pop from './PopDeleteModer.jsx';
import React, {useState} from 'react';

function Moderateurs({modlist}){
    const [Display,SetDisplay] = useState(false);
    const Popup = () =>{
        SetDisplay(true);
    }
    const Close = () =>{
        SetDisplay(false);
    }

    const [Data,SetData] = useState(modlist);
    const FilterData = (key) => {
        const Newdata = {...Data};
        delete Newdata[key];
        SetData(Newdata)
    }

    const [key,Setkey] = useState("");
    
    return (
    <div className="w-full h-4/6">
        {Display && <Pop Close={Close} Delete={FilterData(key)} />}
        <div className="w-4/5 py-2 px-6 flex flex-col flex-wrap justify-center content-center bg-[#ffffff] font-poppins">
            <div className="w-full flex justify-between content-center flex-nowrap my-1 mx-4">
                <div className="flex justify-between content-center flex-nowrap mx-4 w-[64%] px-4">
                    <input type='checkbox'className="w-5 h-5 border-none"></input>
                    <p className="h-6">nom</p>
                    <p className="h-6">prenom</p>
                    <p className="h-6">surnom</p>
                    <p className="h-6 ml-4 ">role</p>
                </div>
                <div className="flex justify-end content-center flex-nowrap mx-4 w-16">
                    <CiMenuKebab className="text-black" />
                </div>
            </div>
        </div>
        {modlist.map(list => {
            return(
                <div key={list.surnom} className="w-4/5 py-4 px-6 flex flex-col flex-wrap justify-center content-center bg-[#DEDEDE] font-poppins">
                    <div className="flex justify-between content-center flex-nowrap my-1 mx-4">
                        <div className="flex justify-between content-center flex-nowrap mx-4 w-4/6">
                            <input type='checkbox'className="w-5 h-4 border-none"></input>
                            <p className="h-6">{list.nom}</p>
                            <p className="h-6">{list.prenom}</p>
                            <p className="h-6">{list.surnom}</p>
                            <p className="h-6">{list.role}</p>
                        </div>
                        <div className="flex justify-between content-center flex-nowrap ml-4 w-16">
                            <button><MdModeEditOutline className="w-5 h-5"/></button>
                            <button onClick={() => {Popup}}><FaTrash className="w-5 h-5"/></button>
                        </div>
                    </div>
                    <hr className="bg-[#E87D00] h-1 sm:h-0.5 w-full rounded-full border-none sm:mb-0 mb-4"/>
                </div>
            )
        })}
      </div>
    );
  };
  
  export default Moderateurs;