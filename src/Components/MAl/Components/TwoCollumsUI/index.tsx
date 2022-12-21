import React from 'react';
import {Body} from "./styled";

type Types = {

}

export const TwoCollumsUI: React.FC<Types> = ({children}) => {

  return (
    <Body>
      {children}
    </Body>
  )
}