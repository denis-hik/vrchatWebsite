import styled from 'styled-components';
import {getDark} from "../../Scripts/getDark";
import {colors} from "../../config/colors";

const isDark = getDark();

export const Body = styled.div<{Bottom?: boolean, to?: string}>`
  position: relative;
  border-radius: 20px;
  margin: ${props => props.to ? '15px' : 'unset'} ;
  padding: ${props => props.to ? 'unset' : '10px'};
  margin-bottom: 8px;
  text-align: center;
  position: ${props => props.Bottom ? 'absolute' : 'relative' };
  bottom: ${props => props.Bottom ? '10px' : 'unset' } ;
  //right: ${props => props.Bottom ? '10px' : 'unset' };
  left: ${props => props.Bottom ? '10px' : 'unset' };
  width: ${props => props.Bottom ? 'calc(100% - 40px)' : 'unset' };
  
  &.notoutline {
    background: ${props => isDark ? colors.blue2 : colors.blue1};
    color: ${props => isDark ? '#b9b9b9' : '#FFFFFF'};
    
  }
  
  &.outline {
    background: ${props => isDark ? '#b9b9b9' : '#FFFFFF'};
    color: ${props => isDark ? '#1e1e5f' : colors.blue1};
    & h4 {
      margin: 0;
    }
    margin: 0 10px 0 0;
  }
  
  & img {
    object-fit: cover;
    height: 20vh;
    width: 100%;
    border-radius: 20px;
  }
`;

export const Tags = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  column-gap: 5px;
  
  span {
    
    background-color: ${props => isDark ? colors.blue2 : colors.blue1};
    padding: 5px;
    border-radius: 10px;
  }
`;

// export const BodyTo = styled.div`
//   margin: 15px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: ${props => isDark ? '#1e1e5f' : colors.blue1};
//   border-radius: 20px;
//   color: white;
// `;