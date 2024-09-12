import { useEffect, useMemo, useState } from 'react'

import { CreateGoal } from './components/CreateGoal'
import { EmptyGoals } from './components/EmptyGoals'
import { Summary } from './components/Summary'
import { Dialog } from './components/ui/Dialog'

type SummaryResponse = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >
}

export function App() {
  const [summary, setSummary] = useState<SummaryResponse | null>(null)

  useEffect(() => {
    fetch('http://localhost:3333/summary')
      .then(response => response.json())
      .then(data => setSummary(data.summary))
  }, [])

  const hasSummaryGoals = useMemo(() => summary && summary.total > 0, [summary])

  return (
    <Dialog>
      {hasSummaryGoals && <Summary />}
      {!hasSummaryGoals && <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}
