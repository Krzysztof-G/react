import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {subPageContents} from '../../data/dataStore';



const Faq = () => (
  <Container>
    <Hero titleText={subPageContents.faq.title} imageText={subPageContents.faq.image} />
    <h2>{subPageContents.faq.subTitle}</h2>
    <p>{subPageContents.faq.description}</p>
  </Container>
);

export default Faq;