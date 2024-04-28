import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import { useEffect, useState } from "react"

const Home = () => {

  const navigate = useNavigate()
  const [animate, setAnimate] = useState('fade-in-slide')

  const linkToPage = (link: string) => {
    setAnimate("fade-out-slide");
    setTimeout(() => {
      navigate(link)
    }, 800)
  }

  return (
    <main className={`flex flex-col gap-y-8 items-center justify-center h-screen ${animate}`}>
      <h1 className="text-6xl sm:text-7xl font-bold">Wannatype</h1>

      <div className="flex flex-col gap-y-4">
        <Button text="Play now" onClick={() => linkToPage("/game")}/>
        <Button text="How to play" onClick={() => linkToPage("/how-to-play")}/>
      </div>
    </main>
  )
}

export default Home