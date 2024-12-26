import styled from 'styled-components';
import {getDark} from "../../Scripts/getDark";

const isDark = getDark();

export const Body = styled.div<{ hideButtonBack?: boolean }>`
    width: 20vw;
    min-width: 330px;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

  .panel {
    height: calc(100vh - 16px);
    width: 100%;
    padding: 8px;
    position: relative;
    background: ${props => isDark ? '#363535' : '#FFFFFF'};
    border-radius:  0 20px 20px 0;
    overflow-y: auto;
    -webkit-box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35);
    box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35);
    .close {
        opacity: 0;
        transition: opacity 0.3s;
        position: absolute;
        left: 10px;
        top: 10px;
        width: 40px;
        height: 61px;
        object-fit:contain;
    }
    .backText {
        cursor: pointer;
    }
    #backText:hover ~ #close {
        opacity: 1;
    }
    #backText ~ #close {
        animation: fadeIn 1s ease-in-out;
    }
    

    @media (max-width: 1000px) {
        .backText {
            background-repeat: no-repeat;
            background-size: 30px;
            background-position: center left;
            background-image: ${props => props.hideButtonBack ? undefined : "url(\"data:image/png;base64,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\");"}
        }
    }
    }

    .panel::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 1000px) {
        z-index: 0;
        justify-content: center;
        align-items: flex-end;
        width: 100vw;

        .panel {
            width: 100%;
            min-width: unset;
            height: 70vh;
            border-radius: 20px 20px 0 0;
        }
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    } 

`;