import React, {CSSProperties} from 'react';
import {Body} from "./styled";

type Types = {
  justifyContent?: CSSProperties["justifyContent"];
  gap?: number | string
  className?: string;
}

export const TwoCollumsUI: React.FC<Types> = ({children, justifyContent, gap, className}) => {

  return (
    <Body className={className} gap={gap} justifyContent={justifyContent} >
      {children}
    </Body>
  )
}