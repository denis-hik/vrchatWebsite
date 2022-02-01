import {Body} from "./styled";

type PropsI = {
    text: string;
    onClick?: () => void
    image?: string;
    outline?: boolean;
}

const Button: React.FC<PropsI> = ({text,onClick, image, outline}) => {

    return (
        <Body className={outline ? 'outline' : 'notoutline'} onClick={onClick} >
            {image && <img src={image} alt={'button_image'}/> }
            <h4>{text}</h4>
        </Body>
    )
}

export default Button