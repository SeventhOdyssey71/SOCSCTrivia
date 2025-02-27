import type React from "react"
import "./globals.css"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata = {
  title: "Sui Blockchain Trivia",
  description: "Test your knowledge of the Sui blockchain with this interactive trivia game",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans`}>{children}</body>
    </html>
  )
}



import './globals.css'