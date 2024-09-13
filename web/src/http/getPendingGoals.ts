import type { pendingGoalsResponse } from '../types/pendingGoalsResponse'

import { httpClient } from './libs/httpClient'

export async function getPendingGoals(): Promise<pendingGoalsResponse> {
  const response = await httpClient.get('pending-goals')
  const data = response.data.pendingGoals

  return data
}
