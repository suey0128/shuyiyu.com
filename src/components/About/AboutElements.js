import styled from "styled-components";
import {Link as LinkScroll } from 'react-scroll';

export const AboutContainer = styled.div`
    background: #253f36;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    // height: 800px;
    height: 100vh;
    position: relative;
    z-index: 1;

    /* add :before styles*/
`

export const AboutBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height:100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width:100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #253f36;
`

export const AboutContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position absolute;
    padding: 36px 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    background: rgb(37, 63, 54,0.8);

    @media screen and (max-width: 768px) {
        padding: 24px 36px;
    }

`
export const AboutH2 = styled.h2`
    color: #ff7d5b;
    font-size:36px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 28px;
    }

    @media screen and (max-width: 480px) {
        font-size: 24px;
    }
`

export const AboutH1 = styled.h1`
    margin-top: 12px;
    color: #ff7d5b;
    font-size:48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`


export const AboutP = styled.p`
    color: #ff7d5b;
    margin-top: 24px;
    font-size:24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const ScrollerWrapper = styled(LinkScroll)`
    z-index: 3;    
    position:absolute;
    bottom: 8%;
    cursor: pointer;

`

export const Scroller = styled.div`
    z-index: 3;    
    position:relative;
    width:30px;
    height:30px;

    transform:rotate(45deg);
`


export const Span = styled.span`
    z-index: 3;    
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    box-sizing:border-box;
    border:none;
    border-bottom:3px solid #ff7d5b;
    border-right:3px solid #ff7d5b;
    animation:animate 1s linear infinite;

    &:nth-child(1){
        top:-10px;
        left:-10px;
        animation-delay:0.2s;
    }
    &:nth-child(2){
        top:0;
        left:0;
        animation-delay:0.4s;
    }
    &:nth-child(3){
        top:10px;
        left:10px;
        animation-delay:0.6s;
    }

    @keyframes animate{
        0%{
            border-color:#ff7d5b;
            transform:translate(0,0);
        }
            20%{
            border-color:#ff7d5b;
            transform:translate(15px,15px);
        }
            20.1%,100%{
            border-color:#253f36;
        }
    }
`