import { useMemo } from 'react'

import { useQuery } from '@tanstack/react-query'
import { CreateGoal } from './components/CreateGoal'
import { EmptyGoals } from './components/EmptyGoals'
import { Summary } from './components/Summary'
import { Dialog } from './components/ui/Dialog'

import { getSummary } from './http/getSummary'

export function App() {
  const { data: summary } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
  })

  const hasSummaryGoals = useMemo(() => summary && summary.total > 0, [summary])

  return (
    <Dialog>
      {hasSummaryGoals && <Summary />}
      {!hasSummaryGoals && <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}
