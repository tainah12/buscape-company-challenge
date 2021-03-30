import styled from "styled-components"
import {primaryColor} from "../../constants/colors"
import Badge from '@material-ui/core/Badge';
import {secondaryColor} from "../../constants/colors"

export const Container = styled.div`
background-color: ${primaryColor};
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
height: 50px;
`
export const Logo = styled.img`
max-width: 50px;
margin-left: 30px;
`
export const BadgeStyled = styled(Badge)`
max-width: 50px;
margin-left: 30px;
cursor: pointer;

`
