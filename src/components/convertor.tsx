import { memo, useCallback, useMemo, useState, ChangeEvent } from 'react'
import { Input, Select, SelectItem } from '@mantine/core'
import styled from 'styled-components'

import { Wrapper } from './wrapper'
import { Flex } from './flex'
import { Heading } from './typography'
import { Loader } from './loader'

import { useExchangeRatesQuery } from '@hooks/useExchangeRate'

const UpperPart = styled(Flex).attrs({
  direction: 'column',
  align: 'center',
  minWidth: '15rem',
  padding: '1.2rem',
  flex: 1,
})`
  background: rgb(255,157,157);
  background: linear-gradient(342deg, rgba(255,157,157,1) 0%, rgba(255,0,0,1) 100%);

  border-radius: 0.5rem 0.5rem 0 0;

  color: #f3f4f6;
`

const inputStyle = {
  opacity: 0.6,
}

export const Convertor = memo(() => {
  const [amount, setAmount] = useState(0)
  const [selectedRate, setSelectedRate] = useState(0)

  const { isLoading, data: exchangeRates } = useExchangeRatesQuery<SelectItem[]>((rates) => rates
    ?.map(({ code, rate, amount }) => ({
      label: code,
      value: (rate / amount).toString(),
    })))

  const onSelectChange = useCallback((rate: string) => {
    setSelectedRate(Number(rate))
  }, [])

  const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event?.target?.value))
  }, [])

  const converted = useMemo(() => (selectedRate ? amount / selectedRate : 0), [amount, selectedRate])

  return (
    <Wrapper minHeight='360px' padding='0'>
      <UpperPart>
        <Heading color='#fca5a5'>CZK</Heading>
        <Input type='number' defaultValue={0} onChange={onInputChange} style={inputStyle} />
      </UpperPart>
      <Flex direction='column' align='center' flex={0.5} padding='1.2rem'>
        <Heading color='#fca5a5' lineHeight='2rem'>
          {converted.toFixed(2)}
        </Heading>

        {isLoading || !exchangeRates ? (
          <Loader />
        ) : (
          <Select
            searchable
            placeholder='Select currency'
            onChange={onSelectChange}
            data={exchangeRates}
          />
        )}
      </Flex>
    </Wrapper>
  )
})

Convertor.displayName = 'Convertor'
