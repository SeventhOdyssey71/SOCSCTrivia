"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { suiQuestions } from "@/lib/questions"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Clock, Award } from "lucide-react"
import confetti from "canvas-confetti"

export default function GamePage() {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [timer, setTimer] = useState(0)
  const [questionStartTime, setQuestionStartTime] = useState(Date.now())
  const [questionTimes, setQuestionTimes] = useState<number[]>([])

  const currentQuestion = suiQuestions[currentQuestionIndex]

  // Start timer when component mounts
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Reset question start time when moving to a new question
  useEffect(() => {
    setQuestionStartTime(Date.now())
  }, [currentQuestionIndex]) //Corrected dependency array

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer) return // Prevent changing answer after selection

    setSelectedAnswer(answer)
    const isCorrect = answer === currentQuestion.correctAnswer
    setIsAnswerCorrect(isCorrect)

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1)
    }

    // Record time taken for this question
    const timeTaken = Math.floor((Date.now() - questionStartTime) / 1000)
    setQuestionTimes((prev) => [...prev, timeTaken])
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < suiQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
      setSelectedAnswer(null)
      setIsAnswerCorrect(null)
    } else {
      setGameOver(true)
      // Trigger confetti for good scores
      if (score > suiQuestions.length * 0.7) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
      }
    }
  }

  const restartGame = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setIsAnswerCorrect(null)
    setScore(0)
    setGameOver(false)
    setTimer(0)
    setQuestionTimes([])
    setQuestionStartTime(Date.now())
  }

  if (gameOver) {
    const totalTime = questionTimes.reduce((sum, time) => sum + time, 0)
    const averageTime = totalTime / questionTimes.length

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center justify-center p-4"
      >
        <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">Game Complete!</h1>

          <div className="space-y-6">
            <div className="bg-slate-700/50 p-4 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-300">Final Score:</span>
                <span className="text-2xl font-bold text-white">
                  {score} / {suiQuestions.length}
                </span>
              </div>
              <Progress value={(score / suiQuestions.length) * 100} className="h-2" />
            </div>

            <div className="flex items-center justify-between bg-slate-700/50 p-4 rounded-xl">
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-slate-400" />
                <span className="text-slate-300">Total Time:</span>
              </div>
              <span className="font-mono text-white">{formatTime(totalTime)}</span>
            </div>

            <div className="flex items-center justify-between bg-slate-700/50 p-4 rounded-xl">
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-slate-400" />
                <span className="text-slate-300">Avg. Time Per Question:</span>
              </div>
              <span className="font-mono text-white">{formatTime(Math.round(averageTime))}</span>
            </div>

            {score > suiQuestions.length * 0.7 && (
              <div className="flex items-center justify-center bg-blue-900/30 p-4 rounded-xl">
                <Award className="mr-2 h-6 w-6 text-yellow-400" />
                <span className="text-yellow-100">Great job! You're a Sui expert!</span>
              </div>
            )}
          </div>

          <div className="mt-8 flex gap-4">
            <Button
              onClick={() => router.push("/")}
              variant="outline"
              className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              Home
            </Button>

          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col">
      {/* Header with progress */}
      <header className="p-4 border-b border-slate-700">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-02-13_at_03.11.20_06965518-removebg-preview-rOrC7h4F5BDbUhBtBNet4jggTvtDAY.png" alt="Sui Logo" className="h-16 w-auto mr-2" />
            <span className="text-white font-medium">SOCSC Hangout Trivia</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center text-slate-300">
              <Clock className="mr-1 h-4 w-4" />
              <span className="font-mono">{formatTime(timer)}</span>
            </div>

            <div className="text-slate-300">
              Score: <span className="font-bold text-white">{score}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          {/* Question progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-slate-400 mb-2">
              <span>
                Question {currentQuestionIndex + 1} of {suiQuestions.length}
              </span>
           
            </div>
            <Progress value={((currentQuestionIndex + 1) / suiQuestions.length) * 100} className="h-1" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 shadow-xl"
            >
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6">{currentQuestion.question}</h2>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  let buttonClass = "w-full text-left p-4 rounded-xl border border-slate-600 transition-all"

                  if (selectedAnswer) {
                    if (option === currentQuestion.correctAnswer) {
                      buttonClass += " bg-green-600/20 border-green-500 text-green-100"
                    } else if (option === selectedAnswer && option !== currentQuestion.correctAnswer) {
                      buttonClass += " bg-red-600/20 border-red-500 text-red-100"
                    } else {
                      buttonClass += " opacity-60"
                    }
                  } else {
                    buttonClass += " hover:bg-slate-700 hover:border-slate-500 bg-slate-800/80"
                  }

                  return (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswerSelect(option)}
                      className={buttonClass}
                      whileHover={!selectedAnswer ? { scale: 1.02 } : {}}
                      whileTap={!selectedAnswer ? { scale: 0.98 } : {}}
                      disabled={!!selectedAnswer}
                    >
                      <div className="flex items-start">
                        <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-slate-300 mr-3">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="pt-1">{option}</span>
                      </div>
                    </motion.button>
                  )
                })}
              </div>

              {selectedAnswer && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-6"
                >
                  <div
                    className={`p-4 rounded-lg ${isAnswerCorrect ? "bg-green-600/20 text-green-100" : "bg-red-600/20 text-red-100"}`}
                  >
                    <p className="font-medium">{isAnswerCorrect ? "Correct!" : "Incorrect!"}</p>
                    <p className="text-sm mt-1 opacity-90">{currentQuestion.explanation}</p>
                  </div>

                  <Button onClick={handleNextQuestion} className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                    {currentQuestionIndex < suiQuestions.length - 1 ? (
                      <>
                        Next Question <ChevronRight className="ml-1 h-4 w-4" />
                      </>
                    ) : (
                      "See Results"
                    )}
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

