import { ReactNode, useEffect, useState } from "react"

interface ButtonProps {
  text: string
  onClick: () => void
}

const Button = ({ text, onClick } : ButtonProps) => {

  const firstLetter = text[0]

  useEffect(() => {
    const press = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === firstLetter.toLowerCase()){
        onClick()
      }
    }
    window.addEventListener("keypress", press)
  }, [firstLetter, onClick])

  return (
    <button onClick={onClick} className="text-4xl py-3 px-8 hover:bg-zinc-600 transition-all rounded-full">{text}</button>
  )
}

export default Button