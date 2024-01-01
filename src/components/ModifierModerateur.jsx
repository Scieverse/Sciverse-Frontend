import { useState } from "react";
import Pop from './PopModifierModerateur.jsx'

function ModifierModerateur({moder}){
    const [user,Setuser] = useState(moder);
    const [nom,Setnom] = useState(moder.nom);
    const [prenom,Setprenom] = useState(moder.prenom);
    const [surnom,Setsurnom] = useState(moder.surnom);
    const [mail,Setmail] = useState(moder.mail);
    const [photo,Setphoto] = useState(moder.photo);

    const [Display,SetDisplay] = useState(false);
    const Close = () =>{
        SetDisplay(false);
    }
    const Confirm = () =>{
        SetDisplay(!Display);
    }

    const handleChangeNom = (event) => {
        Setnom(event.target.value);
    }
    const handleChangePreom = (event) => {
        Setprenom(event.target.value);
    }
    const handleChangeSurnom = (event) => {
        Setsurnom(event.target.value);
    }
    const handleChangeMail = (event) => {
        Setmail(event.target.value);
    }
    const handleChangePhoto = (event) => {
        Setphoto(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        Setuser({
            "nom" : nom,
            "prenom" : prenom,
            "surnom" : surnom,
            "role" : "moderateur",
            "mail" : mail,
            "photo": photo
        });       
        console.log(user)
        SetDisplay(!Display);
    }

    return (
        <div className="w-full h-4/6">
            {Display && <Pop Close={Close} Confirmer={handleSubmit} />}
            <div className="w-4/5 py-6 px-6 flex flex-col flex-wrap justify-center content-center bg-[#dedede] font-poppins">
                <form action="post" className="w-full flex flex-col flex-wrap justify-center content-center">
                    <p className=" font-poppins text-xs pl-1 text-[#190B28] my-1">Nom: {nom}</p>
                    <input type="text" defaultValue={moder.nom} onChange={handleChangeNom} className="py-2.5 pl-8 w-1/2 rounded-full bordre-none bg-[#E87D00] bg-opacity-25 text-base mb-4"/>
                    <p className=" font-poppins text-xs pl-1 text-[#190B28] my-1">Prenom:</p>
                    <input type="text" defaultValue={moder.prenom} onChange={handleChangePreom} className="py-2.5 pl-8 w-1/2 rounded-full bordre-none bg-[#E87D00] bg-opacity-25 text-base mb-4"/>
                    <p className=" font-poppins text-xs pl-1 text-[#190B28] my-1">Nom d'utilisateur:</p>
                    <input type="text" defaultValue={moder.surnom} onChange={handleChangeSurnom} className="py-2.5 pl-8 w-1/2 rounded-full bordre-none bg-[#E87D00] bg-opacity-25 text-base mb-4"/>
                    <p className=" font-poppins text-xs pl-1 text-[#190B28] my-1">photo de profile:</p>
                    <input type="text" defaultValue={moder.photo} onChange={handleChangePhoto} className="py-2.5 pl-8 w-1/2 rounded-full bordre-none bg-[#E87D00] bg-opacity-25 text-base mb-4"/>
                    <p className=" font-poppins text-xs pl-1 text-[#190B28] my-1">Email:</p>
                    <input type="text" defaultValue={moder.mail} onChange={handleChangeMail} className="py-2.5 pl-8 w-1/2 rounded-full bordre-none bg-[#E87D00] bg-opacity-25 text-base mb-10"/>
                    <div className='flex justify-evenly mb-4'>
                        <button className='lg:text-lg text-sm font-poppins font-bold text-white lg:py-2.5 py-2 lg:px-6 px-5 rounded-[20px] shadow-md shadow-[rgba(0,0,0,0.25)] bg-[#A7A7A7]'>Annuler</button>
                        <button onClick={handleSubmit} className='lg:text-lg text-sm font-poppins font-bold text-white lg:py-2.5 py-2 lg:px-6 px-5 rounded-[20px] shadow-md shadow-[rgba(0,0,0,0.25)] bg-[#E87D00]'>Enregistrer</button>
                    </div>
                </form>
            </div>
        </div>
    );
  };
  export default ModifierModerateur;