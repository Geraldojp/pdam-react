import photoBlog1 from '../../assets/blog-photo-1.jpg';
import photoBlog2 from '../../assets/blog-photo-2.jpg';
import photoBlog3 from '../../assets/blog-photo-3.jpg';
import {
  Container,
  FlexColumnContainer,
  FlexContainer,
  MainTitle,
  PillButton,
  SubTitle,
  TItleSection,
} from './styles/Blog.styled.js';
import Card from '../../components/Card/index.jsx';

const blogData = [
  {
    type: 'Pengumuman',
    image: photoBlog1,
    content: 'Pemberhentian Air Mengalir Sementara Pada Daerah ...',
    buttonColor: '#DA2525',
  },
  {
    type: 'Berita Terbaru',
    image: photoBlog2,
    content: 'PDAM Purwa Tirta Dharma memberikan bantuan ...',
    buttonColor: '#CCBC29',
  },
  {
    type: 'Pengumuman',
    image: photoBlog3,
    content: 'Tarif per-Bulan Naik Menjadi 10% Dari Tarif Normal ...',
    buttonColor: '#DA2525',
  },
];
function Blog() {
  return (
    <Container>
      <TItleSection>
        <MainTitle>Ikuti Pengumuman Terbaru Kami</MainTitle>
        <SubTitle>
          Jangan sampai ketinggalan pengumuman hingga berita terbaru kami
        </SubTitle>
      </TItleSection>
      <FlexContainer>
        {blogData.map((data, i) => (
            <FlexColumnContainer key={i}>
              <PillButton bg={data.buttonColor} color="#FFFFFF" padding="10px">
                {data.type}
              </PillButton>
              <Card imgSrc={data.image} content={data.content} />
            </FlexColumnContainer>
          ))}
      </FlexContainer>
    </Container>
  );
}

export default Blog;
