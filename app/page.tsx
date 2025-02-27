import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/5 rounded-lg animate-float"
            style={{
              width: `${Math.random() * 150 + 100}px`,
              height: `${Math.random() * 150 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 15}s`,
              transform: `rotate(${Math.random() * 45}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div className="mb-8">
          <img src="https://pbs.twimg.com/profile_images/1894393408833077248/cXY6lyL-_400x400.jpg" alt="Sui Logo" className="h-32 w-auto" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Sui Blockchain Trivia</h1>

        <p className="text-lg text-slate-300 max-w-md mb-8">
          Test your knowledge with 20 questions about the Sui blockchain ecosystem
        </p>

        <Link href="/game">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-6 rounded-xl text-lg group transition-all"
          >
            Start Game
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      <footer className="absolute bottom-4 text-slate-500 text-sm">4Dummies Labs</footer>
    </div>
  )
}

