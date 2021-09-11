import tw, { styled, css, theme } from 'twin.macro';
import { Container } from '@/components/Container';

const FooterContainer = styled.footer`
  ${tw`py-lg `}
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>Footer</Container>
    </FooterContainer>
  );
};

export default Footer;
