import React, {ReactElement, useMemo, useState} from "react";
import {dataAssetType, dataAvatarType} from "../../../../../Backend/types";
import {FormBody, SuggestionsBlock} from "./styled";
import {InputUI} from "../../../../MAl/Components/InputUI";
import {TwoCollumsUI} from "../../../../MAl/Components/TwoCollumsUI";
import ButtonUI from "../../../../MAl/Components/ButtonUI";
import {getErrorUrl, getErrorValueAvatar, getErrorValueDiscord} from "./modal/checkValues";
import CheckboxUI from "../../../../MAl/Components/CheckboxUI";
import Scrollbars from "react-custom-scrollbars-2";
import ItemAssets from "./components/ItemAssets";
import {RootState, useAppDispatch} from "../../../../../context/store";
import {postAvatar} from "../../modal/actions/postAvatar";
import {TAvatarsTypes} from "../../modal/types";
import {useSelector} from "react-redux";
import {getAvatar} from "../../modal/actions/getAvatar";

type FormBlockType = {
    data: dataAvatarType;
    onClose: () => void;
    assets?: dataAssetType[];
}
const avatarsType = ["Nardoragon", "Rexouium", "Kitavali", "Sergal", "Canine", "Other"];

const getStyles:() => React.CSSProperties = () => {
    const styleList: React.CSSProperties = {
        height: "50px",
    }
    return styleList;
}

const uploadSelector = (root: RootState) => root.avatars.post
const FormBlock:React.FC<FormBlockType> = ({data, onClose, assets}) => {
    const dispatch = useAppDispatch()

    const [isQuestPlatform, setIsQuestPlatform] = useState(false);
    const [typeSelected, setTypeSelected] = useState("");
    const [isErrorAgree, setIsErrorAgree] = useState(false);
    const [discordValue, setDiscordValue] = useState("");
    const [avatarValue, setAvatarValue] = useState("");
    const [agreeValue, setAgreeValue] = useState(false);

    const post = useSelector(uploadSelector)

    const myAssets: dataAssetType | undefined =  data.id !== "ripper"
        ? assets?.find(({image, download}: dataAssetType) => (image === avatarValue || avatarValue === download))
        : undefined


    const listAssets: ReactElement<any, any>[] = useMemo(() => {
        if (assets === undefined || assets?.length === 0) {
            return [<div></div>]
        }
        return assets
            .filter(({tags}) => tags ? tags[0] === "My" : false)
            .map(({name, image, download}) => (
            <ItemAssets
                download={download}
                setAvatarValue={setAvatarValue}
                name={name}
                image={image}
            />
        ))
    }, [assets]);

    const sendData = () => {
        if (!(!!(data.id === "ripper"
                ? getErrorValueAvatar(avatarValue)
                : getErrorUrl(avatarValue))
            || !!getErrorValueDiscord(discordValue)
            || typeSelected === "Other")) {

            if (agreeValue) {
                const promise = dispatch(postAvatar({
                    discord: discordValue,
                    type: typeSelected as TAvatarsTypes,
                    url: avatarValue,
                    work: data.id === "ripper" ? 0 : 1,
                })).unwrap()
                promise
                    .then(avatar => {
                        localStorage.setItem("workAssetId", avatar.id);
                        localStorage.setItem("workAssetName", avatar.id);
                    })
            } else {
                setIsErrorAgree(true);
            }
        }
    }

    const onShow = () => {
        if (post.avatar !== undefined)
            dispatch(getAvatar({id: post.avatar.id}))
    }

    return (
        <FormBody>
            {post.state === "succeeded" && <>
                <div className={"title-block"}><span>✔️ Заявка подана!</span></div>
                <div className={"suc-block"}>
                    <span>Ваша заявка подана, ее id: {post.avatar?.id}. C вами свяжутся по дискорду.</span>
                    <ButtonUI className={"button"} text={"Закрыть"} onClick={onClose} />
                    <ButtonUI className={"button"} text={"Просмотреть"} onClick={onShow} />
                </div>
            </>}
            {post.state === "failed"  && <>
                <div className={"title-block"}><span>❌ Заявка не подана!</span></div>
                <div className={"suc-block"}>
                    <span>Ваша заявка не подана! По причине {post.error.toString()}</span>
                    <ButtonUI className={"button"} text={"Закрыть"} onClick={onClose} />
                </div>
            </>}
            {post.state === "idle" && <>
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
                {!!myAssets && <ItemAssets
                    onClose={() => setAvatarValue("")}
                    image={myAssets.image}
                    name={myAssets.name}
                    download={myAssets.download}
                />}
                {!myAssets && data.id !== "ripper" && <InputUI
                    className={"input-avatar-id input-block"}
                    error={getErrorUrl(avatarValue)}
                    onChange={(e) => setAvatarValue(e)}
                    hint={"url unity package"}
                    value={avatarValue}
                    renderSuggestion={assets ? <SuggestionsBlock>
                        <Scrollbars>
                            <h2>Мои ассеты</h2>
                            {listAssets}
                        </Scrollbars>
                    </SuggestionsBlock> : undefined}
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
                    <ButtonUI disable text={"Unity 2019"} />
                    <ButtonUI text={"Unity 2022"} />
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
                        disableText={"Что-то не указано"}
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