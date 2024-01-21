import styled from "styled-components";
import {getDark} from "../../../../MAl/Scripts/getDark";
import {colors} from "../../../../MAl/config/colors";
export const FormBody = styled.div `
  height: calc(100% - 100px);
  width: calc(100% - 10px);
  border-radius: 10px;
  border: solid 2px ${props => isDark ? colors.blueDark : colors.blue};
  position: relative;

  .title-block {
    position: absolute;
    top: -17px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      background: ${props => isDark ? colors.blueDark : colors.blue};
      color: ${props => isDark ? "#737373" : "white"};
      padding: 5px;
      border-radius: 10px;
    }
  }

  .input-discord {
    padding: 5px;
    margin: 5px;
    margin-top: 20px;

    input {
      border-radius: 12px;
    }
  }

  .input-block {
    padding: 5px;
    margin: 5px;
    margin-top: 0px;

    input {
      border-radius: 12px;
    }
  }

  .platform-block {
    margin: 5px;
    gap: 10px;

    .button-platform {
      width: 100%;
    }
  }

  .hint-quest {
    color: #6D8694;
    text-align: center;
    font-size: 16px;
    font-family: PT Astra Sans;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    border-radius: 5px;
    background: ${props => isDark ? "rgba(96, 112, 141, 0.22)" : "rgba(96, 141, 129, 0.22)"};
    margin: 0 5px;
  }
  
  .list-type {
    display: flex;
    overflow: hidden;
    overflow-x: auto;
    flex-wrap: nowrap;
    margin: 10px 5px;
    gap: 5px;
    
    .type-item {
      
    }
  }
  
  .alert-block {
    border-radius: 10px;
    border: 1px solid rgba(255,0,0,0.7);
    background:  rgba(255,0,0,0.5);
    padding: 5px;
    margin: 10px 5px 0 5px;
    color: ${props => isDark ? '#000000' : "white"};
    text-align: center;
  }
  
  .unity-block {
    display: flex;
    margin: 10px 5px;
    gap: 10px;
  }
  
  .action-block {
    position: absolute;
    bottom: 10px;
    left: 5px;
    right: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .suc-block {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100px;
    background: ${props => isDark ? colors.blueDark : colors.blue};
    border-radius: 20px 20px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    span {
      text-align: center;
      color: ${props => isDark ? colors.whiteTextDark : colors.whiteText};
    }
    
    .button {
      margin-top: 10px;
      width: calc(100% - 50px);
      background:${props => isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)"};
    }
  }
  
`
const isDark = getDark();

export const SuggestionsBlock = styled.div<{selected?: boolean}> `
  background: ${props => isDark ? "#363535" : "white" };
  border-radius: 10px;
  position: absolute;
  height: 100px;
  width: 100%;
  top: 0;
  overflow: hidden;
  z-index: 7;
  gap: 5px;
  transition: .3s ease;
  
  h2 {
    margin-bottom: 0px;
    margin-left: 5px;
    margin-top: 5px;
    border-bottom: 1px solid ${props => isDark ? colors.whiteTextDark : "black"};
    color: ${props => isDark ? colors.whiteTextDark : "black"};
  }
  
  .item {
    padding: 5px;
    background: ${props => isDark ? colors.blueDark : colors.blue};
    height: 70px;
    display: flex;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    position: relative;
    
    img {
      border-radius: 10px;
      height: 70px;
      width: 70px;
      object-fit: cover;
    }
    
    span {
      margin-left: 10px;
      height: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
      color: ${props => isDark ? colors.whiteTextDark : colors.white};
    }
    
    .sel {
      position: absolute;
      left: 75px;
      background: green;
      height: 20px;
      border-radius: 5px;
      padding: 3px;
      color: ${props => isDark ? colors.whiteTextDark : colors.white};
      margin-left: 10px;
    }
  }
`