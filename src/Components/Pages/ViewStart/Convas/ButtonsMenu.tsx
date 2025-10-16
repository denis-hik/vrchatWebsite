import React from "react";
import Button from "./Button/Button";
import {LogoUI} from "../../../MAl/Components/LogoUI";
import SmallTextUI from "../../../MAl/Components/SmallTextUI";
import BodyCenterUI from "../../../MAl/Components/BodyCenterUI";
import Flex from "../../../MAl/Components/Flex";
import {colors} from "../../../MAl/config/colors";

import logo from "../../../../media/logo.png";

interface propsI {

}

const ButtonsMenu = (props: propsI): JSX.Element => {

    return (
        <BodyCenterUI>
            <Flex direction={"column"} className={'panel'}>
                <LogoUI
                    urlOpen={'https://denishik.ru'}
                    src={logo}
                />
                <Button text={'Worlds'} url={'/worlds'}  />
                <Button text={'Assets'} url={'/assets'}  />
                <Button
                    text={'My stack vr'}
                    url={'/stack'}
                />
                <Button
                    text={'Gumroad'}
                    color={colors.gumroad}
                    url={'https://denishik.gumroad.com/'}
                />
                <SmallTextUI style={{flex: "1", alignItems: "flex-end", paddingBottom: "10px"}} text={'Denis Hik 2025'} />
            </Flex>
        </BodyCenterUI>
    )
};

export default ButtonsMenu;