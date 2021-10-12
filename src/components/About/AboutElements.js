import styled from "styled-components";

export const AboutContainer = styled.div`
    background: #253f36;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
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
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
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