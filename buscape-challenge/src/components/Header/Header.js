import { Container, Logo, BadgeStyled } from "./styled"
import MenuIcon from '@material-ui/icons/Menu';
import buscapeLogo from '../../assets/buscapeLogo.png';

export const Header = () => {
    return (
        <Container>

            <Logo src={buscapeLogo} alt="Buscape Logo" />

            <BadgeStyled badgeContent={4} color="secondary" style={{ margin: "30px" }} >
                <MenuIcon />
            </BadgeStyled>

        </Container>
    )
}