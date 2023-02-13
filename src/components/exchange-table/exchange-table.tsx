import { memo } from 'react'
import styled from 'styled-components'

import { ExchangeTableRow } from './exchange-table-row'

import { useExchangeRatesQuery } from '@hooks/useExchangeRate'
import { Heading, Loader, Wrapper } from '@components'

const Table = styled.table`
  thead, tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;

    text-align: left;
  }
`

const Header = styled.thead`
  width: calc(100% - 1em) !important; /* scrollbar */
`

const Body = styled.tbody`
  display: block;
  height: 70vh;
  overflow: auto;
`

const HeaderCell = styled.th<{ width?: string }>`
  width: ${({ width }) => width || 'auto'};
  text-align: ${({ align }) => align || 'left'};

  &:first-child {
    padding: 0.2rem 0rem;
  }
`

export const ExchangeTable = memo(() => {
  const { isLoading, data: exchangeRates } = useExchangeRatesQuery()

  return (
    <Wrapper width='32rem'>
      <Heading>Exchange rates</Heading>

      {isLoading ? (
        <Loader />
      ) : (
        <Table>
          <Header>
            <tr>
              <HeaderCell width='7rem'>Country</HeaderCell>
              <HeaderCell width='6rem'>Currency</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Code</HeaderCell>
              <HeaderCell>Rate</HeaderCell>
            </tr>
          </Header>

          <Body>
            {exchangeRates?.map(({ code, country, amount, rate, currency }) => (
              <ExchangeTableRow
                key={code}
                code={code}
                country={country}
                amount={amount}
                rate={rate}
                currency={currency}
              />
            ))}
          </Body>
        </Table>
      )}
    </Wrapper>
  )
})

ExchangeTable.displayName = 'ExchangeTable'
