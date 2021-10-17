import styled from "styled-components";


const green = "#253f36";
const pink = "#e5b7a8";
const orange = "#ff7d5b"

export const ProjectSectionContainer = styled.div`
    background: ${green};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        padding: 20px;
    }
`

export const ProjectContainer = styled.div`
    margin-bottom: 25px;
    background: ${pink};
    width: 100%;
    border-radius: 20px;  
    display: flex;
    padding: 30px;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (max-width: 768px) {
       flex-direction: column;
       padding: 10px;
    }

`

export const ProjectSectionTitle = styled.h1`
    font-size: 48px;
    margin-bottom: 30px;
    color: ${pink};

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const ProjectGrid = styled.div`
    width: 50%;
    padding: 12px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const ProjectImg = styled.img`
    width: 100%;
    height: 100%;
`  

export const ProjectTitle = styled.h2`
    color: ${green};
`

export const ProjectP = styled.p`
    color: ${green};
    margin-bottom: 10px;
    font-size: 17px;
`

export const ProjectUl = styled.ul`
    list-style: inside;
    color: ${green};
    padding: 0;
    font-size: 15px;
`

export const ProjectBarGrid = styled.div`
    margin: 10px 0px;
`

export const ProjectH4 = styled.h4`
    color: ${green};
    text-align: center;
    margin-bottom:5px;
`

export const ProjectBarChart = styled.div`
    overflow: hidden;
	width: 100%;
    border-radius: 10px;
    margin-bottom:5px;
`

export const BarBlock = styled.span`
    display: block;
    height: 10px;
    font-size: .75em;
    float: left;
    position: relative;
    overflow: hidden;
    opacity: 1;
    cursor: pointer;

    &.Ruby {
        background: #532025
    }

    &.JavaScript {
        background: #f4dc64
    }

    &.HTML {
        background: #e14d30
    }

    &.CSS {
        background: #563e7b
    }
`


export const ProjectCategoryUl = styled.ul`
    margin: 0 auto;
    padding: 0;
    font-size: .9em;
    text-align: center;
`

export const ProjectCategoryLi = styled.li`
    display: inline-block;
    padding: .5em 1em;
    line-height: 1em;
    font-size: 12px;
    color: ${green};


    &:before {
        content: "";
        margin-right: .5em;
        display: inline-block;
        width: 8px;
        height: 8px;
    }

    &.Ruby:before {
        background-color: #532025;
    }

    &.JavaScript:before {
        background-color: #f4dc64;
    }

    &.HTML:before {
        background-color: #e14d30;
    }

    &.CSS:before {
        background-color: #563e7b;
    }
`


export const ProjectBtnGrid = styled.div`
    width: 100%;
    // align-items: center;
    // justify-content: space-evenly;
    margin-top: 5px;
    text-align: center;
`
export const ProjectLink = styled.a`
    text-decoration: none;
    
    &.disabled {
        display: none;
    }
`

export const ProjectBtn = styled.button`

    margin: 5px 10px 0px 0px;
    display: inline-block;
    text-decoration: none;
    padding: 10px 20px;
    height: 100%;
    width: 140px;
    border: none;
    outline: none;
    border-radius: 0px;
    background: ${green};
    color: ${pink};
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        background: ${orange};
    }

    &.disabled {
        display: none;
    }
`
