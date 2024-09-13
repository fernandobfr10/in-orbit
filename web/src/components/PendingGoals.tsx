import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'

import { createGoalCompletion } from '../http/createGoalCompletion'
import { getPendingGoals } from '../http/getPendingGoals'
import { OutlineButton } from './ui/OutlineButton'

export function PendingGoals() {
  const queryClient = useQueryClient()

  const { data: pendingGoals } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
  })

  async function handleCompeteGoal(goalId: string) {
    await createGoalCompletion(goalId)

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
  }

  if (!pendingGoals) return null

  return (
    <div className="flex flex-wrap gap-3">
      {pendingGoals.map(pendingGoal => {
        const isGoalCompleted =
          pendingGoal.completionCount >= pendingGoal.desiredWeeklyFrequency

        return (
          <OutlineButton
            key={pendingGoal.id}
            disabled={isGoalCompleted}
            onClick={() => handleCompeteGoal(pendingGoal.id)}
          >
            <Plus className="size-4 text-zinc-600" />
            {pendingGoal.title}
          </OutlineButton>
        )
      })}
    </div>
  )
}
