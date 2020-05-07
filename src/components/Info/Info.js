import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {subPageContents} from '../../data/dataStore';



const Info = () => (
  <Container>
    <Hero titleText={subPageContents.info.title} imageText={subPageContents.info.image} />
    <h2>{subPageContents.info.subTitle}</h2>
    <p>{subPageContents.info.description}</p>
  </Container>
);

export default Info;