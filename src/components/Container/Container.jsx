import PropTypes from 'prop-types';
import tw, { styled, css, theme } from 'twin.macro';

const ContainerWrapper = styled.div`
  ${tw`max-w-screen-xl mx-auto px-lg lg:px-xl `}
`;

export const Container = (props) => {
  const { children } = props;

  return <ContainerWrapper>{children}</ContainerWrapper>;
};

Container.defaultProps = {};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
