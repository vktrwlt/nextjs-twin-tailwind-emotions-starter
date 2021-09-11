import React from 'react';
import { Container } from '@/components/Container/Container';

export default {
  title: 'Container',
  component: Container,
};

const Template = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {};
