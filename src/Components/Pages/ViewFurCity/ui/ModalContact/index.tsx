import ModalBodyUI from "../../../../MAl/Components/ModalBody"
import ButtonUI from "../../../../MAl/Components/ButtonUI";
import {useCallback} from "react";
import TextUI from "../../../../MAl/Components/TextUI";
import SmallTextUI from "../../../../MAl/Components/SmallTextUI";
import EmptyUI from "../../../../MAl/Components/EmptyUI";

type ModalContactType = {
    show: boolean
    onClose: () => void;
}
export const ModalContact = ({show, onClose}: ModalContactType) => {

    const onDiscord = useCallback(() => {
        window.open("https://discordapp.com/users/370583534647246848", "_blank")
    }, [])

    return (
        <ModalBodyUI show={show} label={"Contact"} onClose={onClose}>
            <SmallTextUI text={"Contact me "}/>
            <EmptyUI height={"10px"} />
            <ButtonUI text={"Discord"} onClick={onDiscord}  />
        </ModalBodyUI>
    )
}