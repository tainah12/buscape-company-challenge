import styled from "styled-components"
import {primaryColor} from "../../constants/colors"

export const Container = styled.div`
background-color: ${primaryColor};
display: flex;
justify-content: space-between;
align-items: center;
width: 100vw;
height: 60px;
`
export const Logo = styled.img`
max-width: 60px;
margin-left: 30px;
`
