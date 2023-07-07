import React from "react";
import TextUI from "../../../../MAl/Components/TextUI";
import TabsUI from "../../../../MAl/Components/TabsUI";
import {BodyStatus} from "./styled";
import BlockUI from "../../../../MAl/Components/BlockUI";

const options = ["new", "working", "finished"]
const optionsColors = ["#ee5858", "#a2caec", "#b983d0"]

type StatusShowType = {
    data: {id: string, discord: string, status: string, isQuest: boolean, type: string, url: string, work: string}
    onClose: () => void;
}

const getStatus = (work) => {
    switch (work) {
        case 0:
            return "Не взяли в работу"

        case 1:
            return "В работе"

        case 2:
            return "Завершено"
    }
}

export const StatusShow: React.FC<StatusShowType> = ({data, onClose}) => {

    return (<BodyStatus>
        <div style={{height: "inherit",overflow: "hidden", position: "relative"}}>
            <div className={'close'} onClick={onClose}/>
            <TextUI text={data?.work} />
            <TabsUI options={options} selected={options[data?.status]} colors={optionsColors} />
            <BlockUI label={"Вы указали"}>
                <div className={"text"}><span>Работа: </span><span>{data?.work}</span><br /></div>
                <div className={"text"}><span>Ваш дискорд: </span><span>{data?.discord}</span><br /></div>
                <div className={"text"}><span>Тип аватара: </span><span>{data?.type}</span><br /></div>
                {data?.work === "ripper" && <div className={"text"}><span>Аватар: </span><a href={ "https://vrchat.com/home/avatar/" + data?.url}>Аватар</a></div>}
                {data?.work === "add" && <div className={"text"}><span>Юрл на работу: </span><a href={data?.url}>Ссылка</a></div>}
                <div className={"text"}><span>Статаус: </span><span>{getStatus(data?.status)}</span><br /></div>
                <div className={"text"}><span>Делает: </span><span>Я </span><br /></div>
            </BlockUI>
        </div>
    </BodyStatus>)
}