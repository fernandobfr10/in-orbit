import { Plus } from 'lucide-react'

import { Button } from './ui/Button'
import { DialogTrigger } from './ui/Dialog'

import letsStart from '../assets/lets-start-illustration.svg'
import logo from '../assets/logo-in-orbit.svg'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="Logotipo do in.orbit" />
      <img src={letsStart} alt="Lets Start Illustration" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
