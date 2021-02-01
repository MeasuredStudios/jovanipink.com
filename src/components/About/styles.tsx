import styled from 'styled-components';
import tw from 'tailwind.macro';

export const About = styled.div`
  ${tw`max-w-screen-sm w-full mx-auto px-0 sm:px-16 mb-4`};
`;

export const AboutItem = styled.div`
  ${tw`flex flex-col items-start mt-6`};
`;

export const Image = styled.figure`
  ${tw`w-16 h-16 mr-auto border border-theme-450 rounded-full`};

  img {
    ${tw`border-4 border-white rounded-full`};
  }
`;

export const Title = styled.h3`
  ${tw`font-semibold my-4`};
`;
