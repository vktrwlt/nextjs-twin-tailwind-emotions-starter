import PropTypes from 'prop-types';
import tw, { styled, css, theme, TwStyle } from 'twin.macro';

const primaryVariants = {
  // Named class sets
  primary: tw``,
  secondary: tw``,
};

const sizeVariants = {
  // Named class sets
  sm: tw`px-6 py-2 text-white text-base`,
  md: tw`px-8 py-4 text-white text-lg`,
  lg: tw`px-10 py-5 text-white text-xl`,
};

const Button = styled.button(({ variant, size }) => [
  // Base Styles
  tw`bg-black rounded-md `,

  // Dynamic Styles
  primaryVariants[variant],
  sizeVariants[size],
]);

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Button;
