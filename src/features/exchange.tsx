import React, { memo } from 'react'
import styled from 'styled-components'

import { Convertor, ExchangeTable } from '@components'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 4rem 0;
  gap: 2rem;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Exchange = memo(() => (
  <Wrapper>
    <Convertor />
    <ExchangeTable />
  </Wrapper>
))

Exchange.displayName = 'Exchange'
