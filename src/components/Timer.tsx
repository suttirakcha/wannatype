import { useEffect, useState } from "react"

interface TimerProps {
  setIsTimeUp: (val: boolean) => void
}

const Timer = ({ setIsTimeUp } : TimerProps) => {

  const [time, setTime] = useState(30)

  useEffect(() => {
    const countTime = setInterval(() => {
      if (time > 0){ setTime(time - 1) }
      if (time == 0){ setIsTimeUp(true) }
    }, 1000)

    return () => clearInterval(countTime)
  }, [time])

  return (
    <h1 className="text-5xl font-bold">{time}</h1>
  )
}

export default Timer