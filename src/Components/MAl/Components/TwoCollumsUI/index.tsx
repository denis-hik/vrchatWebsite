import React from 'react';
import {Body} from "./styled";

type Types = {
  justifyContent?: string;
  className?: string;
}

export const TwoCollumsUI: React.FC<Types> = ({children, justifyContent, className}) => {

  return (
    <Body className={className} justifyContent={justifyContent} >
      {children}
    </Body>
  )
}