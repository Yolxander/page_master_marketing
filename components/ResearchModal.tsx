"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, ExternalLink } from "lucide-react"

interface ResearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResearchModal({ isOpen, onClose }: ResearchModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-light text-gray-900 font-serif">📚 See The Research</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          {/* Research Content */}
          <div className="space-y-8">
            {/* The Reading Problem */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Reading Problem</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#FFB347] font-bold">•</span>
                  <div>
                    Most people forget what they read within weeks — the "Forgetting Curve" in action.
                    <a 
                      href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6607761/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="ml-2 text-[#FFB347] hover:underline inline-flex items-center gap-1"
                    >
                      Source <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFB347] font-bold">•</span>
                  <div>
                    Passive reading = low retention. Active practice and discussion stick much better.
                    <a 
                      href="https://www.psychotactics.com/art-retain-learning/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="ml-2 text-[#FFB347] hover:underline inline-flex items-center gap-1"
                    >
                      Source <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* The Implementation Gap */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Implementation Gap</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#FFB347] font-bold">•</span>
                  <div>
                    Reading creates an <em>illusion of learning</em> — you feel productive, but behavior rarely changes.
                    <a 
                      href="https://jamesclear.com/reading-comprehension-strategies" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="ml-2 text-[#FFB347] hover:underline inline-flex items-center gap-1"
                    >
                      Source <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFB347] font-bold">•</span>
                  <div>
                    Without systems like reflection and spaced reviews, knowledge fades instead of becoming habit.
                    <a 
                      href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6607761/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="ml-2 text-[#FFB347] hover:underline inline-flex items-center gap-1"
                    >
                      Source <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* What Works */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What Works (Page Master's Foundations)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#FFB347] font-bold">•</span>
                  <div>
                    <strong>Spaced Repetition</strong> → Reviewing in intervals dramatically boosts retention.
                    <a 
                      href="https://www.worklearning.com/wp-content/uploads/2017/10/Spacing_Learning_Over_Time__March2009v1_.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="ml-2 text-[#FFB347] hover:underline inline-flex items-center gap-1"
                    >
                      Source <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFB347] font-bold">•</span>
                  <div>
                    <strong>Retrieval Practice</strong> → Testing yourself strengthens memory more than rereading.
                    <a 
                      href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6607761/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="ml-2 text-[#FFB347] hover:underline inline-flex items-center gap-1"
                    >
                      Source <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFB347] font-bold">•</span>
                  <div>
                    <strong>Implementation Intentions</strong> → "If–then" plans turn ideas into real actions.
                    <a 
                      href="https://pubmed.ncbi.nlm.nih.gov/16671394/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="ml-2 text-[#FFB347] hover:underline inline-flex items-center gap-1"
                    >
                      Source <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFB347] font-bold">•</span>
                  <div>
                    <strong>Digital Habit Nudges</strong> → Challenges and small rewards keep people practicing long after incentives end.
                    <a 
                      href="https://arxiv.org/abs/2310.10850" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="ml-2 text-[#FFB347] hover:underline inline-flex items-center gap-1"
                    >
                      Source <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Scientific Foundations */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Scientific Foundations</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#FFB347] font-bold">•</span>
                  <div>Backed by <strong>cognitive science</strong> (spacing effect, retrieval practice).</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFB347] font-bold">•</span>
                  <div>Built on <strong>behavioral psychology</strong> (implementation intentions, habit loops).</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFB347] font-bold">•</span>
                  <div>Reinforced by <strong>education research</strong> (reflection, structured practice, nudges).</div>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <Button 
              onClick={onClose}
              className="bg-[#FFB347] hover:bg-[#FFA726] text-[#2C2C2C] px-8 py-3 rounded-[20px] shadow-md font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              Got It - Let's Transform My Reading
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
