import { memo } from 'react'
import styled from 'styled-components'

import { Flex } from './flex'

export const Wrapper = memo(styled(Flex).attrs((props) => ({
  direction: 'column',
  align: 'center',
  minHeight: '400px',
  maxHeight: '80%',
  padding: '1.2rem 0.5rem 1.2rem 1.2rem',
  borderRadius: '0.5rem',
  ...props,
}))`
  background-color: #ffffff;
  color: ${({ color }) => color || '#334155'};
`)
