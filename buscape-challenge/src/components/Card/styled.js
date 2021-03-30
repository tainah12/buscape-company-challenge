import styled from "styled-components"
import {primaryColor, neutralColor, terciaryColor, secondaryColor} from "../../constants/colors"

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #FFFFFF;
box-shadow: 4px 4px 4px #e7e7e7;
min-width: 50vw;
margin-top: 10px;
height: 220px;
border-radius: 5px;
`

export const CardContainer = styled.div`
/* background-color: blue; */
width: 95%;
max-height: 95%;
justify-content: space-around;

display: flex;
align-items: center;
`

export const Carousel = styled.div`
/* background-color: red; */
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
`

export const ImgCarousel = styled.img`
/* background-color: gray; */
margin-top: 4px;
padding: 5px;
display: flex;
max-width: 30px;
border: 1px solid ${neutralColor};
border-radius: 3px;
&:hover{
    border: 1.5px solid ${primaryColor};
    border-radius: 2px;
    cursor: pointer;
}
`

export const Img = styled.img`
/* background-color: purple; */
max-height:200px;
`

export const DescriptionContainer = styled.div`
/* background-color: yellow; */
`

export const TitleDescription = styled.div`
/* background-color: green; */
display: flex;
justify-content: flex-start;
padding: 10px;
font-size: 23px;
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;
color: #a3a3a3;
`

export const ContainerPrice = styled.div`
/* background-color: gray; */
display:flex;
align-items: center;

`

export const CardPrice = styled.div`
/* background-color: darkblue; */
padding: 5px;
`

export const Tag = styled.div`
background-color: ${terciaryColor};
display: flex;
align-items: center;
justify-content: center;
font-size: 9px;
font-family: Arial, Helvetica, sans-serif;
color: white;
height:30px;
width: 60px;
margin: 5px;
padding: 0px 7px;
border-radius: 3px;
&:hover {
    background-color: ${secondaryColor};
    cursor: pointer;
}

`

export const Price = styled.div`
/* background-color: darkgrey; */
display:flex;
align-items: center;
font-weight: bold;
color: ${terciaryColor};
padding: 5px;

`

export const AddToCart = styled.div`
display: flex;
align-items: center;
font-size: 11px;
font-family: Arial, Helvetica, sans-serif;
color: white;
background-color: #22b14c;
height:30px;
margin: 5px;
padding: 0px 10px;
border-radius: 3px;
&:hover {
    background-color: ${secondaryColor};
    cursor: pointer;
}

`


