import React, { useState, useEffect } from 'react'

function TextChange() {
  const texts = ["Hi, I'm Nayyar", "Hi, I'm Nayyar", "Hi, I'm Nayyar"]
  const [currentText, setCurrentText] = useState("")
  const [endValue, setEndValue] = useState(0)
  const [isForward, setIsForward] = useState(true)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue))

      if (isForward) {
        setEndValue((prev) => prev + 1)
      } else {
        setEndValue((prev) => prev - 1)
      }

      if (endValue > texts[index].length + 10) {
        setIsForward(false)
      }

      if (endValue < 1) {
        setIsForward(true)
        setIndex((prev) => (prev + 1) % texts.length)
      }
    }, 50)

    return () => clearInterval(intervalId)
  }, [endValue, isForward, index, texts])

  return <div className="transition ease duration-300">{currentText}</div>
}

export default TextChange
