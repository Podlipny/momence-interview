import csv from 'csvtojson'
import { useQuery } from 'react-query'

const BASE_URL = '/api/financial-markets/foreign-exchange-market'
const EXCHANGE_URL = `${BASE_URL}/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt`

export interface ExchangeRate {
  country: string
  code: string
  amount: number
  currency: string
  rate: number
}

type Selector<T> = (data: ExchangeRate[]) => T

const csvOptions = {
  delimiter: '|',
  headers: ['country', 'currency', 'amount', 'code', 'rate'],
  colParser: {
    amount: (item: string) => Number(item),
    rate: (item: string) => Number(item),
  },
}

export const useExchangeRatesQuery = <T = ExchangeRate[]>(select?: Selector<T>) => useQuery({
  queryKey: ['exchangeRate'],
  queryFn: async (): Promise<ExchangeRate[]> => {
    const response = await fetch(EXCHANGE_URL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/text; charset=UTF-8',
      },
    })
    const csvExchange = await response?.text()

    return csv(csvOptions).fromString(csvExchange.substring(csvExchange.indexOf('\n') + 1))
  },
  select,
})
