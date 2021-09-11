import React, { useState, useEffect } from 'react';
import tw, { styled, css, theme } from 'twin.macro';
import { Container } from '@/components/Container';

const HeaderWrapper = styled.header`
  ${tw`fixed top-0 left-0 z-50 w-full bg-white py-md`}
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>Header</Container>
    </HeaderWrapper>
  );
};

export default Header;
