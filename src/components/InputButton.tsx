import { useEffect, useRef, useState } from "react"

interface InputButtonProps {
  onType: (e: any) => void 
}

const InputButton = ({ onType } : InputButtonProps) => {

  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handlePress = (e: KeyboardEvent) => {
      if (e.key === "Enter"){
        setIsFocused(true)
        inputRef?.current?.focus()
      }

      if (e.key === "Escape"){
        setIsFocused(false)
        inputRef?.current?.blur()
      }
    }

    window.addEventListener("keydown", handlePress)

    return () => window.removeEventListener("keydown", handlePress)
  }, [isFocused])

  return (
    <input 
      ref={inputRef}
      placeholder={isFocused ? "Please type the characters" : "Click here or press Enter to type"} 
      className={`bg-maingray ${isFocused ? "placeholder:text-white" : ""} w-[300px] md:w-[360px] text-lg md:text-xl font-medium text-center border px-3 py-2 md:p-3 rounded-full`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      value=""
      onKeyDown={onType}
    />
  )
}

export default InputButton