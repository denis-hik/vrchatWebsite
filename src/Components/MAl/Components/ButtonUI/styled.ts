import styled from 'styled-components';
import {getDark} from "../../Scripts/getDark";
import {colors} from "../../config/colors";

const isDark = getDark();

export const Body = styled.div<{Bottom?: boolean, to?: string, height?: number, disable?: boolean}>`
  position: relative;
  border-radius: 20px;
  margin: ${props => props.to ? '15px' : 'unset'} ;
  padding: ${props => props.to ? 'unset' : '10px'};
  text-align: center;
  position: ${props => props.Bottom ? 'absolute' : 'relative' };
  bottom: ${props => props.Bottom ? '10px' : 'unset' } ;
  //right: ${props => props.Bottom ? '10px' : 'unset' };
  left: ${props => props.Bottom ? '10px' : 'unset' };
  width: ${props => props.Bottom ? 'calc(100% - 40px)' : 'unset' };
  height: ${props => props.height ? `${props.height}px` : 'unset' };
  cursor: ${props => props.disable ? `not-allowed` : 'pointer' };
  opacity: ${props => props.disable ? `0.5` : '1' };
  a {
    width: 100%;
    text-decoration: none;
    color: ${props => isDark ? '#b9b9b9' : '#FFFFFF'};
  }
  
  &.icon {
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: row;
    gap: 10px;
  }
  
  &.notoutline {
    background: ${props => isDark ? colors.blueDark : colors.blue};
    color: ${props => isDark ? '#b9b9b9' : '#FFFFFF'};
    & h4 {
      margin: 0;
    }
  }
  
  &.outline {
    background: ${props => isDark ? '#737373' : '#FFFFFF'};
    color: ${props => isDark ? colors.blueDark : colors.blue};
    border:  2px solid ${props => isDark ? colors.blueDark : colors.blue};
    & h4 {
      margin: 0;
    }
  }
  
 .image-img {
      object-fit: cover;
      height: 20vh;
      width: 100%;
      border-radius: 20px;
    }
  }

.icon-img {
  object-fit: cover;
  height: inherit;
  width: auto;
  border-radius: 20px;
}
}
`;

export const Tags = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  column-gap: 5px;
  
  span {
    
    background-color: ${props => isDark ? colors.blueDark : colors.blue};
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