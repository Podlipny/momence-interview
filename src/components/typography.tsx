import styled from 'styled-components'

interface HeadingProps {
  lineHeight?: string
}

export const Heading = styled.h1<HeadingProps>`
  font-size: 1.6rem;
  line-height: ${({ lineHeight }) => lineHeight || '2rem'};
  color: ${({ color }) => color || '#1e293b'};
`
