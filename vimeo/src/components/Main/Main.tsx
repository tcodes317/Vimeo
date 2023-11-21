import Phase_iv from "./Phases/Phase.iv";
import Phase_i from "./Phases/Phase_i";
import Phase_ii from "./Phases/Phase_ii";
import Phases_iii from "./Phases/Phase_iii";
import Phases_v from "./Phases/Phase_v";
import Phase_vi from "./Phases/Phase_vi";
import Phases_vii from "./Phases/Phase_vii";
import Phases_viii from "./Phases/Phase_viii";
import Phase_viv from "./Phases/Phase_viv";
import Phases_x from "./Phases/Phases_x";

function Main(){
    return(
        <>
            <div>
                <div className="xs:pt-24"></div>
                <Phase_i />
                <Phase_ii />
                <Phases_iii />
                <Phase_iv />
                <Phases_v />
                <Phase_vi />
                <Phases_vii />
                <Phases_viii />
                <Phase_viv />
                <Phases_x />
            </div>
        </>
    )
}
export default Main;