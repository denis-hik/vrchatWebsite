import {Body, Tags} from "./styled";

type PropsI = {
    text: string;
    onClick?: () => void
    image?: string;
    outline?: boolean;
    tags?: string[],
}

const Button: React.FC<PropsI> = ({text,onClick, image, outline, tags}) => {

    return (
        <Body className={outline ? 'outline' : 'notoutline'} onClick={onClick} >
            {image && <img src={image} alt={'button_image'}/> }
            <h4>{text}</h4>
            <Tags>{tags && tags.map((text) => (<span>{text.replace('"', "").replace('"', "")}</span>))}</Tags>
        </Body>
    )
}

export default Button