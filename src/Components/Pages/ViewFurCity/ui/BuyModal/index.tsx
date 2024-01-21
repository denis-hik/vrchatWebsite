import SmallTextUI from "../../../../MAl/Components/SmallTextUI";
import ModalBodyUI from "../../../../MAl/Components/ModalBody";

type BuyModalType = {
    show: boolean
    onClose: () => void;
}
export const BuyModal = ({show, onClose}: BuyModalType) => {

    return (
        <ModalBodyUI show={show} label={"Buy"} onClose={onClose}>
            <SmallTextUI text={"----"}/>
        </ModalBodyUI>
    )
}