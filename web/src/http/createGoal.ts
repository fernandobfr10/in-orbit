import type { CreateGoalRequest } from '../types/createGoalRequest'
import { httpClient } from './libs/httpClient'

export async function createGoal({
  title,
  desiredWeeklyFrequency,
}: CreateGoalRequest) {
  await httpClient.post('/goals', {
    title,
    desiredWeeklyFrequency,
  })
}
