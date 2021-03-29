import { Container, Logo } from "./styled"
import MenuIcon from '@material-ui/icons/Menu';
import buscapeLogo from '../../assets/buscapeLogo.png';
import Badge from '@material-ui/core/Badge';

export const Header = () => {
    return (
        <Container>
            <div>
                <Logo src={buscapeLogo} alt="Buscape Logo" />
            </div>
            <Badge badgeContent={4} color="primary">
                <MenuIcon style={{ margin: "30px" }} />
            </Badge>
        </Container>
    )
}