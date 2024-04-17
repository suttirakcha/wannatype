import { useEffect, useState } from "react"
import { WORDS } from "../data"
import { ArrowLeft, Heart } from "lucide-react"
import { Link } from "react-router-dom"
import NoHearts from "../components/NoHearts"

const GamePage = () => {

  const [word, setWord] = useState<string>(WORDS[Math.floor(Math.random() * WORDS.length)])
  const [limit, setLimit] = useState(Math.floor(Math.random() * 10) + 10)
  const [typedWords, setTypedWords] = useState(0)

  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  const [wordState, setWordState] = useState<Array<{ character: string; color: string }>>(
    word.split("").map((character) => ({ character, color: "text-gray-400" }))
  );

  const hearts: number[] = [1, 2, 3]
  const [heart, setHeart] = useState(hearts.length)

  const handleNextWord = (inputWord: string) => {
    setWord(inputWord)
    setWordState(
      inputWord.split("").map((character) => ({
        character,
        color: "text-gray-400",
      }))
    );

    setTypedWords(next => next + 1)
    setCurrentLetterIndex(0)
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const pressedKey = e.key.toUpperCase();
      const currentCharacter = word[currentLetterIndex].toUpperCase();

      const validLetters = /^[a-zA-Z]$/;

      if (!validLetters.test(e.key)) {
        return;
      }

      if (pressedKey === currentCharacter) {
        setWordState((prevWordState) =>
          prevWordState.map((item, index) => ({
            ...item,
            color: index === currentLetterIndex ? "text-green-500" : item.color,
          }))
        );
        setCurrentLetterIndex((prevIndex) => prevIndex + 1);
      } else {
        setWordState((prevWordState) =>
          prevWordState.map((item, index) => ({
            ...item,
            color: index === currentLetterIndex ? "text-red-500" : item.color,
          }))
        );
        setHeart(heart - 1)
      }
    };

    if (currentLetterIndex === word.length){
      handleNextWord(WORDS[Math.floor(Math.random() * WORDS.length)])
    }

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentLetterIndex, wordState]);

  const HeartSystem = () => {
    return (
      <div className="flex justify-end items-center gap-x-2">
        {hearts.map((_, index) => 
          (<Heart key={index} className="h-8 w-8" fill={heart > index ? "rgb(239, 68, 68)" : "transparent"} stroke={heart > index ? "rgb(239, 68, 68)" : "rgb(156, 163, 175)"}/>)
        )}
      </div>
    )
  }

  return (
    <main>
      {heart > 0 ? (
        <>
          <header className="grid grid-cols-3 p-10 items-center">
            <Link to="/" className="w-fit flex items-center gap-x-2 text-2xl">
              <ArrowLeft />
              Back
            </Link>
            <h1 className="text-4xl text-center w-full">{typedWords} / {limit}</h1>
            <HeartSystem />
          </header>
          <div className="flex flex-col items-center justify-center h-[50vh]">
            <h1 className="text-7xl uppercase">
              {wordState.map(({ character, color }, index) => (
                <span key={index} className={`${color} ${currentLetterIndex === index ? 'border-b' : ''}`}>
                  {character}
                </span>
              ))}
            </h1>
          </div>
        </>
      ) : (
        <NoHearts />
      )}
    </main>
  )
}

export default GamePage