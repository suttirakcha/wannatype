import { useNavigate } from "react-router-dom"
import Button from "./Button"
import { useState } from "react"

const NoHearts = () => {

  const navigate = useNavigate()
  const noHeart = ["No hearts left", "Oops, out of hearts", "Still want more hearts?", "I will give you hearts"]
  const [noHeartText, setNoHeartText] = useState(noHeart[Math.floor(Math.random() * noHeart.length)])

  return (
    <div className="flex flex-col gap-y-8 items-center h-screen justify-center">
      <h1 className="text-7xl text-red-500">{noHeartText}</h1>

      <div className="flex flex-col gap-y-4">
        <Button onClick={() => window.location.reload()} text="Try again"/>
        <Button onClick={() => navigate("/")} text="Go back"/>
      </div>
    </div>
  )
}

export default NoHearts