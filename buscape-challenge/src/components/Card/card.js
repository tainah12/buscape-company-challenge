import { Container, CardContainer, Carousel, Img, TitleDescription, ContainerPrice, CardPrice, Tag, Price, AddToCart, ImgCarousel, DescriptionContainer } from "./styled"
import tvLedCarousel from '../../assets/tv-led-carousel.jpg';

export const Card = () => {
    return (
        <Container>
            <CardContainer>
                <Carousel>
                    <ImgCarousel src={tvLedCarousel} alt="tvLedCarousel" />
                    <ImgCarousel src={tvLedCarousel} alt="tvLedCarousel" />
                    <ImgCarousel src={tvLedCarousel} alt="tvLedCarousel" />
                    <ImgCarousel src={tvLedCarousel} alt="tvLedCarousel" />
                </Carousel>
                <Img src={tvLedCarousel} alt="tvLedCarousel" />
                <DescriptionContainer>
                    <TitleDescription>TV Led blablabal</TitleDescription>
                    <ContainerPrice>
                        <CardPrice>
                            <Tag>Melhor Preço</Tag>
                            <Price>
                                <p>10x R$</p><h1>134,00</h1>
                            </Price>
                            <Price>
                                <p>ou R$1139,00 à vista</p>
                            </Price>
                        </CardPrice>
                        <AddToCart>Adicionar ao carrinho + </AddToCart>
                    </ContainerPrice>

                </DescriptionContainer>
            </CardContainer>
        </Container>
    )
}