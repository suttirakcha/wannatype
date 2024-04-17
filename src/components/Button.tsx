import { ReactNode, useEffect, useState } from "react"

interface ButtonProps {
  text: string
  onClick: () => void
}

const Button = ({ text, onClick } : ButtonProps) => {

  const firstLetter = text[0]

  useEffect(() => {
    const press = (e: KeyboardEvent) => {
        if (e.key === firstLetter.toLowerCase()){
            onClick()
        }
    }
    window.addEventListener("keypress", press)
  }, [firstLetter, onClick])

  return (
    <button onClick={onClick} className="text-4xl">{text}</button>
  )
}

export default Button