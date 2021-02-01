import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link
          href="https://twitter.com/JovaniPink"
          rel="noreferrer noopener"
          target="_blank"
        >
          Twitter
        </Styled.Link>
        <Styled.Link
          href="https://www.facebook.com/JOVANIPINK"
          rel="noreferrer noopener"
          target="_blank"
        >
          Facebook
        </Styled.Link>
        <Styled.Link
          href="https://www.instagram.com/jovanipink/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Instagram
        </Styled.Link>
        <Styled.Link
          href="https://www.linkedin.com/in/jovanipink/"
          rel="noreferrer noopener"
          target="_blank"
        >
          LinkedIn
        </Styled.Link>
        <Styled.Link
          href="https://github.com/JovaniPink"
          rel="noreferrer noopener"
          target="_blank"
        >
          Github
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
