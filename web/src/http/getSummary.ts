import type { SummaryResponse } from '../types/summaryResponse'

import { httpClient } from './libs/httpClient'

export async function getSummary(): Promise<SummaryResponse> {
  const response = await httpClient.get('/summary')
  const data = response.data

  return data.summary
}
