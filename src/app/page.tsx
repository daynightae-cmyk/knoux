"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Home() {
  const [code, setCode] = useState("")
  const [output, setOutput] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const handleCodeEdit = async () => {
    setIsProcessing(true);
    setOutput(code);
    setIsProcessing(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Knoux-IO
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            AI-Powered Code Editor & Generator
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="p-6 bg-black/50 backdrop-blur-lg border-purple-500/50 shadow-purple-500/20 shadow-lg">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">Code Input</h2>
            <Textarea 
              placeholder="Enter your code here (any programming language)..."
              className="min-h-[400px] bg-black/30 border-purple-500/30 text-gray-200"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              dir="auto"
            />
            <div className="mt-4 flex justify-end">
              <Button
                onClick={handleCodeEdit}
                disabled={isProcessing || !code}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                {isProcessing ? "Processing..." : "Edit & Improve Code"}
              </Button>
            </div>
          </Card>

          {/* Output Section */}
          <Card className="p-6 bg-black/50 backdrop-blur-lg border-purple-500/50 shadow-purple-500/20 shadow-lg">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">Enhanced Output</h2>
            <ScrollArea className="h-[400px] w-full rounded-md border border-purple-500/30 bg-black/30 p-4">
              <pre className="text-gray-200 whitespace-pre-wrap">
                {output || "Your enhanced code will appear here..."}
              </pre>
            </ScrollArea>
          </Card>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-black/50 backdrop-blur-lg border-purple-500/50">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Multi-Language Support</h3>
            <p className="text-gray-300">Edit and improve code in any programming language</p>
          </Card>
          <Card className="p-6 bg-black/50 backdrop-blur-lg border-purple-500/50">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">AI-Powered</h3>
            <p className="text-gray-300">Advanced AI models for intelligent code enhancement</p>
          </Card>
          <Card className="p-6 bg-black/50 backdrop-blur-lg border-purple-500/50">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Bilingual</h3>
            <p className="text-gray-300">Full support for Arabic and English input</p>
          </Card>
        </div>
      </div>
    </main>
  )
}
