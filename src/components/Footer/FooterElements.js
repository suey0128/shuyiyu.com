import styled from 'styled-components';

const green = '#253f36'; 
const pink = '#e5b7a8'; 
const orange = "#ff7d5b";


export const FooterContainer = styled.footer`
    background: ${green};
    height: 200px;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30x;
    color: ${pink};
`

export const FooterContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const FooterH1 = styled.h1`

`

export const FooterP = styled.p`

`

export const SocialMediaContainer = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.8rem;
`
export const SocialMediaIcon = styled.a`
    margin: 0px 10px;
    color: ${pink};

    &:hover {
        color: ${orange};
    }
`

export const Email = styled.a`
    color: ${pink};
    text-decoration: underline;
    &:hover {
        color: ${orange};
    }
`