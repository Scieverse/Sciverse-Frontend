import Moderateur from "../components/Moderateurs";
import { moderatorsArray } from "../constants";

const Moderateurs = () =>{
    return (
        <div className="w-full h-full flex justify-start items-start flex-col bg-grey max-md:pt-2">
            <Moderateur modlist={moderatorsArray} />
        </div>
      );
}

export default Moderateurs;