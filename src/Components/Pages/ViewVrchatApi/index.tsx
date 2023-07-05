import React, {useState} from 'react';
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

    const [text, setText] = useState('Download on IOS');
    const onOpen = () => {
      open("https://play.google.com/store/apps/details?id=com.denishik.vrchat", "_blank")
    }

  return (
    <BodyUI
        backVideo={video}
    >
      <PanelUI name={"VRCat App"}>
          <SmallTextUI text={'VRCat app on android'} />
          <EmptyUI height={'80%'}/>
          <ButtonUI text={'Download on android'} onClick={onOpen} />
          <EmptyUI height={'10px'} />
          <ButtonUI outline text={text} onClick={() => {setText("Creating..")}} />
      </PanelUI>
    </BodyUI>
  )
}