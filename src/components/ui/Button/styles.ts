import styled from 'styled-components';
import tw from 'tailwind.macro';
import { motion } from 'framer-motion';

export interface StyledProps {
  primary?: boolean;
  block?: boolean;
}

export const Button = motion.custom(styled.button<StyledProps>`
  outline: none !important;
  ${tw`py-2 px-8 rounded-full border border-theme-450 text-indigo-900`};

  ${({ primary }) => (primary ? tw`bg-theme-450` : tw`text-indigo-600`)};

  ${({ block }) => block && tw`w-full`};
`);
