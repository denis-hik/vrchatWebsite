import {BodyModal} from "./styled";
import icon from "../../../../../media/vrcat/icon.png"
import down from "../../../../../media/vrcat/dowload.png"
import file from "../../../../../media/vrcat/file.png"
import s0 from "../../../../../media/vrcat/s0.jpg"
import s1 from "../../../../../media/vrcat/s1.jpg"
import loading from "../../../../../media/loading.png"
import ButtonUI from "../../../../MAl/Components/ButtonUI";
import React, {useState} from "react";
import Scrollbars from "react-custom-scrollbars-2";

const imagesIOS = [s0, s1]
export const getStyles:() => React.CSSProperties = () => {
    const styleList: React.CSSProperties = {
        height: "50vh",
    }
    return styleList;
}
export const ModalIOS = ({onClose}) => {

    const [step, setStep] = useState(0);

    return (
        <BodyModal onClick={onClose}>
            <div onClick={e => e.stopPropagation()} className={"panel" + (step == 1 ? " step1" : "") }>
                {step == 0
                    ?  (<>
                        <div className={"top-block"}>
                            <img className={"icon-block"} src={icon} />
                            <div className={"info-block"}>
                                <h4>VRCat</h4>
                                <span>IOS 16.0+</span>
                            </div>

                            <a href={"https://vrchat.denishik.ru/ios/VRCat.ipa"}>
                                <ButtonUI onClick={() => setStep(1)} icon={file} text={""} />
                            </a>
                            <a href={"itms-services://?action=download-manifest&url=https://vrchat.denishik.ru/ios/manifest.plist"}>
                                <ButtonUI onClick={() => setStep(1)} icon={down} text={"Install"} />
                            </a>
                        </div>
                        <div className={"images-block"}>
                            <Scrollbars
                                renderView={(e) => <div {...e} className={"list-type"} />}
                                style={getStyles()}>
                                {imagesIOS.map((img) => (<img src={img} />))}
                            </Scrollbars>
                        </div>
                    </>)
                    : <div className={"step-2"}>
                        <img src={loading}/>
                    </div>}

            </div>
        </BodyModal>
    )
}
