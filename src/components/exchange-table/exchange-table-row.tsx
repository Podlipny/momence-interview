import { memo } from 'react'
import styled from 'styled-components'

import { ExchangeRate } from '@hooks/useExchangeRate'

const Row = styled.tr`
  color: #6b7280;
  &:nth-child(even) {
    color: #1e293b;
    background-color: #f1f5f9;
  }
`

const Cell = styled.td`
  padding: 0.4rem 0.2rem 0.4rem 0;
  width: ${({ width }) => width || 'auto'};
  text-align: ${({ align }) => align || 'left'};

  &:first-child {
    padding: 0.2rem 0rem;
  }
`

export const ExchangeTableRow = memo<ExchangeRate>(({ code, country, amount, rate, currency }: ExchangeRate) => (
  <Row>
    <Cell width='7rem'>{country}</Cell>
    <Cell width='6rem'>{currency}</Cell>
    <Cell align='left'>{amount}</Cell>
    <Cell>{code}</Cell>
    <Cell align='right'>{rate}</Cell>
  </Row>
))

ExchangeTableRow.displayName = 'ExchangeTableRow'
