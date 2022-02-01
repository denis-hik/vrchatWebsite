import {Body} from "./styled";
import AdapterWorlds from "../../AdapterWorlds/AdapterWorlds";
import worldsData from '../../../../../Backend/worlds-config'
import TextUI from "../../../../MAl/TextUI";

const Panel = ({setIndex}) => {

    return (
        <Body>
            <div className={'panel'}>
                <TextUI text={'Worlds'} />
                {/*/ @ts-ignore*/}
                <AdapterWorlds data={worldsData}  setIndex={setIndex}/>
            </div>

        </Body>
    )
}

export default Panel