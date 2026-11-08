import { useState } from 'react'
import { Button } from './components/atoms/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <h1 className="text-3xl font-semibold tracking-tight">Code Connect</h1>
      <Button onClick={() => setCount((value) => value + 1)}>Count is {count}</Button>
    </main>
  )
}

export default App
