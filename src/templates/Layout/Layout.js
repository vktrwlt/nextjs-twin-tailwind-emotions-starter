import React, { useState } from 'react';
import PropTypes from 'prop-types';
import tw, { styled, css, theme } from 'twin.macro';
import Footer from '@/templates/Layout/Footer/Footer';
import Header from '@/templates/Layout/Header/Header';

const LayoutContainer = styled.div`
  ${tw`flex flex-col h-screen bg-white `}
`;
const ContentWrapper = styled.div`
  ${tw`flex-auto w-full mt-xl `}
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <ContentWrapper>
        <main>{children}</main>
      </ContentWrapper>
      <Footer />
    </LayoutContainer>
  );
};

Layout.defaultProps = {
  children: null,
};
Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
