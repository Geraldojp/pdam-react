import { Container, Wrapper, Text, ButtonCard } from "./styles/Card.styled";

const Card = (props, { className }) => {
    const { content, imgSrc } = props;
    return (
        <Container>
            <Wrapper className='item-container'>
                <img className='image-card' src={imgSrc} />
                <Text className='card-content-text'>{content}</Text>
                <ButtonCard
                    className='button-card'
                    bg='#FFF'
                    border='1px solid #157599'
                    color='#157599'
                    padding='10px 22px'>
                    Lebih Lanjut
                </ButtonCard>
            </Wrapper>
        </Container>
    );
};

export default Card;
