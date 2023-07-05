import styled from "styled-components";
import {getDark} from "../../../../MAl/Scripts/getDark";
import {colors} from "../../../../MAl/config/colors";
const isDark = getDark();
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
    border-radius: 10px;
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
    width: 200px;
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
  
`