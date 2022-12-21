import React from 'react';
import {Body} from "./styled";

type Types = {
  gap?: number;
}

export const ListMapVerticalUI: React.FC<Types> = (
    {children, gap}
) => {

  return (
    <Body gap={gap}>
      {children}
    </Body>
  )
}