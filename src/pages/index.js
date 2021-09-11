import React from 'react';
import Head from 'next/head';
import { GoogleFonts } from 'nextjs-google-fonts/GoogleFonts';
import tw, { styled } from 'twin.macro';
import { Container } from '@/components/Container';
import Layout from '@/templates/Layout/Layout';

export default function Home() {
  return (
    <>
      <Head>{GoogleFonts()}</Head>
      <Layout>
        <Container>Content</Container>
      </Layout>
    </>
  );
}
