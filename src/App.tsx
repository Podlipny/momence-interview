import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { Exchange } from '@features/exchange'

import './App.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // TODO: this could be changed to save fetching, or stateTime coudl be calculated up to next
      // day 14:00 for new exchnage rates
      // refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Exchange />
      {process.env.NODE_ENV !== 'production' && <ReactQueryDevtools />}
    </QueryClientProvider>
  )
}

export default App
