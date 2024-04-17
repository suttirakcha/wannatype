import { useNavigate } from "react-router-dom"
import Button from "../components/Button"

const Home = () => {

  const navigate = useNavigate()

  return (
    <main className="flex flex-col gap-y-8 items-center justify-center h-screen">
      <h1 className="text-7xl">Wannatype</h1>

      <div className="flex flex-col gap-y-4">
        <Button text="Play now" onClick={() => navigate("/game")}/>
        <Button text="How to play" onClick={() => console.log("HELLOTEST")}/>
      </div>
    </main>
  )
}

export default Home