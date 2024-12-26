import React from "react";
import Button from "./Button/Button";
import {LogoUI} from "../../../MAl/Components/LogoUI";
import SmallTextUI from "../../../MAl/Components/SmallTextUI";
import BodyCenterUI from "../../../MAl/Components/BodyCenterUI";
import Flex from "../../../MAl/Components/Flex";
import {colors} from "../../../MAl/config/colors";

interface propsI {

}

const ButtonsMenu = (props: propsI): JSX.Element => {

    return (
        <BodyCenterUI>
            <Flex direction={"column"} className={'panel'}>
                <LogoUI
                    urlOpen={'https://denishik.ru'}
                    src={'data:image/png;base64,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'}
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
                <SmallTextUI style={{flex: "1", alignItems: "flex-end", paddingBottom: "10px"}} text={'Denis Hik 2024'} />
            </Flex>
        </BodyCenterUI>
    )
};

export default ButtonsMenu;