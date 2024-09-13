import { httpClient } from './libs/httpClient'

export async function createGoalCompletion(goalId: string) {
  await httpClient.post('/completions', { goalId })
}
