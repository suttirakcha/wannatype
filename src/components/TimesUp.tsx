import { useNavigate } from "react-router-dom"
import Button from "./Button"

const TimesUp = () => {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-y-8 items-center h-screen justify-center">
      <h1 className="text-7xl text-red-500">Time's up!</h1>

      <div className="flex flex-col gap-y-4">
        <Button onClick={() => window.location.reload()} text="Try again"/>
        <Button onClick={() => navigate("/")} text="Go back"/>
      </div>
    </div>
  )
}

export default TimesUp