import styled from 'styled-components';

const green = '#253f36'; 
const pink = '#e5b7a8'; 
const orange = "#ff7d5b"

export const PastSectionContainer = styled.div`
    padding: 0 30px;
    height: 800px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        height: "";
    }

`

export const PastBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height:100%;
    overflow: hidden;

`

export const ImgBg = styled.img`
    width:100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #253f36;

`

export const PastContentBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    position: absolute;
    right: 0;
    left: 0;
    background: ${green};


    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 30px;
        height: 100%;
    }

    opacity: 80%

`

export const PastContentContainer = styled.div`
    height: 450px;
    width: 70%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin: auto;
    padding: 20px;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;
        padding: 0px;
    }
`
export const EducationContainer = styled.div`
    height: 450px;
    padding: 20px;
    width: 30%;
    border-left: 1px solid ${pink};
    display: flex;
    align-items:flex-start;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        width: 100%;
        border-left: 0px;
        height: auto;
        padding: 0px;
    }
`

export const PastH1 = styled.h1`
    color:${orange};
    font-size: 48px;
    opacity:100%;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const PastContent = styled.div`

`

export const PastCompany = styled.h3`
    color:${pink};

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }

    @media screen and (max-width: 480px) {
        font-size: 14px;
    }

`

export const PastPosition = styled.span`
    font-size: 16px;
    color:${pink};

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`

export const PastWorkSummary = styled.ul`
    list-style: inside;
`

export const PastWorkPoint = styled.li`
    color:${pink};

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`


export const Degree = styled.h5`
    font-size: 14px;
    color: ${pink}
`

export const Time = styled.p`
    color: ${pink}
`