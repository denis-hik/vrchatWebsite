import React, {useEffect, useState} from "react";
import {dataAvatarType} from "../../../../../Backend/types";
import TextUI from "../../../../MAl/Components/TextUI";
import {FormBody} from "./styled";
import {InputUI} from "../../../../MAl/Components/InputUI";
import {TwoCollumsUI} from "../../../../MAl/Components/TwoCollumsUI";
import ButtonUI from "../../../../MAl/Components/ButtonUI";
import {getErrorUrl, getErrorValueAvatar, getErrorValueDiscord} from "./modal/checkValues";
import CheckboxUI from "../../../../MAl/Components/CheckboxUI";
import Scrollbars from "react-custom-scrollbars-2";
import {SendDataAvatarAction} from "./modal/sendDataAvatarAction";

type FormBlockType = {
    data: dataAvatarType;
    onClose: () => void;
}
const avatarsType = ["Nardoragon", "Rexouium", "Kitavali", "Sergal", "Canine", "Other"];

const getStyles:() => React.CSSProperties = () => {
    const styleList: React.CSSProperties = {
        height: "50px",
    }
    return styleList;
}

const FormBlock:React.FC<FormBlockType> = ({data, onClose}) => {

    const [isQuestPlatform, setIsQuestPlatform] = useState(false);
    const [typeSelected, setTypeSelected] = useState("");
    const [isErrorAgree, setIsErrorAgree] = useState(false);
    const [step1, setStep1] = useState<{id: string, discord: string, status: string} | boolean>(false);
    const [stepError, setStepError] = useState<string | boolean>(false);

    const [discordValue, setDiscordValue] = useState("");
    const [avatarValue, setAvatarValue] = useState("");
    const [agreeValue, setAgreeValue] = useState(false);

    const sendData = () => {
        if (!(!!(data.id === "ripper"
                ? getErrorValueAvatar(avatarValue)
                : getErrorUrl(avatarValue))
            || !!getErrorValueDiscord(discordValue)
            || typeSelected === "Other")) {

            if (agreeValue) {
                SendDataAvatarAction({
                    data: {
                        discord: discordValue,
                        // @ts-ignore
                        type: typeSelected,
                        url: avatarValue,
                        work: data.id === "ripper" ? 0 : 1,
                    },
                    SuccessCallback: data1 => {
                        setStep1(data1);
                        localStorage.setItem("workAssetId", data1.id);
                        localStorage.setItem("workAssetName", data?.id);
                    },
                    ErrorCallback: e => setStepError(e),
                })
            } else {
                setIsErrorAgree(true);
            }
        }
    }

    return (
        <FormBody>
            {!!step1 && typeof step1 !== "boolean" && <>
                <div className={"title-block"}><span>✔️ Заявка подана!</span></div>
                <div className={"suc-block"}>
                    <span>Ваша заявка подана, ее id: {step1?.id}</span>
                    <ButtonUI className={"button"} text={"Закрыть"} onClick={onClose} />
                </div>
            </>}
            {!!stepError && typeof stepError !== "boolean" && <>
                <div className={"title-block"}><span>❌ Заявка не подана!</span></div>
                <div className={"suc-block"}>
                    <span>Ваша заявка не подана! По причине {stepError}</span>
                    <ButtonUI className={"button"} text={"Закрыть"} onClick={onClose} />
                </div>
            </>}
            {!step1 && !stepError && <>
                <div className={"title-block"}><span>Оставить заявку</span></div>
                <InputUI
                    className={"input-discord"}
                    error={getErrorValueDiscord(discordValue)}
                    onChange={(e) => setDiscordValue(e)}
                    hint={"Discord id"}/>
                {data.id === "ripper" && <InputUI
                    error={getErrorValueAvatar(avatarValue)}
                    className={"input-avatar-id input-block"}
                    onChange={(e) => setAvatarValue(e)}
                    hint={"Avatar id"}
                />}
                {data.id !== "ripper" && <InputUI
                    className={"input-avatar-id input-block"}
                    error={getErrorUrl(avatarValue)}
                    onChange={(e) => setAvatarValue(e)}
                    hint={"url unity package"}
                />}
                <TwoCollumsUI className={"platform-block"} justifyContent={"normal"} >
                    <ButtonUI
                        outline={isQuestPlatform}
                        className={"button-platform"}
                        text={"Only PC"}
                        onClick={() => setIsQuestPlatform(false)}
                    />
                    <ButtonUI
                        outline={!isQuestPlatform}
                        className={"button-platform"}
                        text={"PC & Quest +500rub"}
                        onClick={() => setIsQuestPlatform(true)}
                    />
                </TwoCollumsUI>
                {isQuestPlatform && <div className={'hint-quest'}>Некоторые обьекты могут не добавлены под квест</div>}
                <Scrollbars
                    renderView={(e) => <div {...e} className={"list-type"} />}
                    style={getStyles()}>
                    {avatarsType.map((type, index) => (
                        <ButtonUI key={index} onClick={() => setTypeSelected(type)} outline={type !== typeSelected} text={type} className={"type-item"}/>
                    ))}
                </Scrollbars>
                {typeSelected === "Other" && <div className={"alert-block"}>
                    На данный момент не делаю под другие аватары!
                </div>}
                <div className={"unity-block"}>
                    <ButtonUI text={"Unity 2019"} />
                </div>
                <div className={"action-block"} >
                    <CheckboxUI
                        value={agreeValue}
                        onChange={(e) => {
                            setAgreeValue(e);
                            if (e) {
                                setIsErrorAgree(false);
                            }
                        }}
                        disable={(!!(data.id === "ripper"
                                ? getErrorValueAvatar(avatarValue)
                                : getErrorUrl(avatarValue))
                            || !!getErrorValueDiscord(discordValue)
                            || typeSelected === "Other")}
                        error={isErrorAgree ? "Ошибка" : undefined}
                        label={"Я передал всю информацию правильно"}
                    />
                    <ButtonUI
                        text={"Отправить"}
                        onClick={sendData}
                        disable={(!!(data.id === "ripper"
                                ? getErrorValueAvatar(avatarValue)
                                : getErrorUrl(avatarValue))
                            || !!getErrorValueDiscord(discordValue)
                            || typeSelected === "Other")}
                    />
                </div>
            </> }


        </FormBody>
    )
}

export default FormBlock;