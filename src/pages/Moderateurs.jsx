import moderateurs from "../components/Moderateurs";
import { moderatorsArray } from "../constants";

const Moderateurs = () =>{
    return (
        <div className="w-full h-full flex justify-start items-start flex-col bg-grey pt-4 max-md:pt-2">
            <moderateurs modlist={moderatorsArray} />
        </div>
      );
}

export default Moderateurs;