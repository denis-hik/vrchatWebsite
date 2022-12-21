import React from 'react';
import {Body} from "./styled";
import PanelUI from "../../MAl/Components/PanelUI";
import BodyUI from "../../MAl/Components/BodyUI";
import TextUI from "../../MAl/Components/TextUI";
import ButtonUI from "../../MAl/Components/ButtonUI";
import EmptyUI from "../../MAl/Components/EmptyUI";
import SmallTextUI from "../../MAl/Components/SmallTextUI";
import bannerImage from "../../../media/banner1.jpg";
// @ts-ignore
import video from "../../../media/video.mp4";

type Types = {

}

export const ViewVrchatApi = (): JSX.Element => {

    const onOpen = () => {
      open("https://mega.nz/folder/Ru4nkKbK#53AOqXeuMi070j3ptHLDjQ", "_blank")
    }

  return (
    <BodyUI
        backVideo={video}
    >
      <PanelUI>
          <TextUI text={'VRCat App'} />
          <SmallTextUI text={'VRCat app on android'} />
          <EmptyUI height={'80%'}/>
          <ButtonUI text={'Download'} onClick={onOpen} />
      </PanelUI>
    </BodyUI>
  )
}