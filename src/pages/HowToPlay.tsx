import { useState } from "react"
import InputButton from "../components/InputButton"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

const HowToPlay = () => {

  const [typing, setTyping] = useState(false)
  const [animate, setAnimate] = useState({
    header: 'fade-in',
    main: 'fade-in-slide'
  })
  const navigate = useNavigate()

  const handleType = () => {
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
    }, 1000)
  }

  const goBack = () => {
    setAnimate({
      header: 'fade-out',
      main: 'fade-out-slide'
    })
    setTimeout(() => {
      navigate("/")
    }, 800)
  }

  return (
    <>
      <header className={`p-5 md:p-10 flex items-start absolute top-0 w-full left-0 ${animate.header}`}>
        <button onClick={goBack} className="w-fit flex items-center gap-x-2 md:text-2xl lg:text-3xl">
          <ArrowLeft />
          Back
        </button>
      </header>
      <main className={`flex flex-col gap-y-8 items-center justify-center h-screen max-w-[600px] mx-auto text-center ${animate.main}`}>
        <h1 className="text-7xl font-bold">How to play</h1>

        <p className="text-2xl">You will be given the words to type and you need to type the characters correctly. You can type incorrectly only four times or you have to start over. To start typing, you can click the button below or press Enter.</p>
        <InputButton onType={handleType}/>

        {typing && <p className="text-2xl">TYPING...</p>}
      </main>
    </>
  )
}

export default HowToPlay