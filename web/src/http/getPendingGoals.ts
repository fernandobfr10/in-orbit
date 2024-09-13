import type { pendingGoalsResponse } from '../types/pendingGoalsResponse'

export async function getPendingGoals(): Promise<pendingGoalsResponse> {
  const response = await fetch('http://localhost:3333/pending-goals')
  const data = await response.json()

  return data.pendingGoals
}
