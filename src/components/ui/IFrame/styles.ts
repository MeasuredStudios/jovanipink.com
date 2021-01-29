import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  center?: boolean;
}

export const IFrameSection = styled.div`
  ${tw`flex flex-col max-w-screen-md w-full mx-auto pt-8 sm:pt-16 px-5`};
`;

export const IFrameTitle = styled.h2<StyledProps>`
  ${tw`uppercase mb-4 text-lg font-bold w-full text-left`};
  ${({ center }) => center && tw`text-center`};
`;

export const IFrameSubTitle = styled.h4<StyledProps>`
  ${tw`text-xs text-indigo-600 w-full text-left`};
  ${({ center }) => center && tw`text-center`};
`;

export const Separator = styled.h2<StyledProps>`
  ${tw`relative w-2 h-8 mb-6 -mt-2`};
  ${({ center }) => center && tw`mx-auto`};

  &:before {
    content: '';
    ${tw`bg-indigo-500 h-full w-px absolute left-0`};
  }

  &:after {
    content: '';
    ${tw`bg-theme-450 h-6 w-px absolute ml-1`};
  }
`;

export const IFrameCard = styled.div<StyledProps>`
  ${tw`w-full`};
`;
