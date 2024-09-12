import { Dialog } from './components/ui/Dialog'

import { CreateGoal } from './components/CreateGoal'
import { Summary } from './components/Summary'

export function App() {
  return (
    <Dialog>
      {/* <EmptyGoals /> */}
      <Summary />

      <CreateGoal />
    </Dialog>
  )
}
