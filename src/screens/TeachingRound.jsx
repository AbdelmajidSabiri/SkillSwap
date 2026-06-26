import { useState, useEffect, useRef } from 'react'
import { useApp } from '../context/AppContext'
import { TEACHING_MESSAGES, TEACHING_CHECKLIST, getSessionTopics } from '../data/mockData'
import { PARTNER_REPLIES } from '../data/assets'
import { CircleStepper } from '../components/ProgressStepper'
import TaskChecklistCard from '../components/TaskChecklistCard'
import ChatBubble from '../components/ChatBubble'
import MessageInput from '../components/MessageInput'
import SessionTimer from '../components/SessionTimer'

export default function TeachingRound() {
  const { completeTeachingRound, selectedMatch } = useApp()
  const [checklist, setChecklist] = useState(TEACHING_CHECKLIST.map((c) => ({ ...c })))
  const [messages, setMessages] = useState([])
  const [timer, setTimer] = useState(29)
  const [msgIndex, setMsgIndex] = useState(0)
  const replyIndex = useRef(0)
  const topics = getSessionTopics(selectedMatch)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((t) => (t > 0 ? t - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (msgIndex < TEACHING_MESSAGES.length) {
      const timeout = setTimeout(() => {
        setMessages((prev) => [...prev, TEACHING_MESSAGES[msgIndex]])
        setMsgIndex((i) => i + 1)
      }, msgIndex === 0 ? 500 : 2000)
      return () => clearTimeout(timeout)
    }
  }, [msgIndex])

  function toggleCheck(id) {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    )
  }

  function handleSend(text) {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: 'you', text },
    ])
    const reply = PARTNER_REPLIES.teaching[replyIndex.current % PARTNER_REPLIES.teaching.length]
    replyIndex.current += 1
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'partner', text: reply },
      ])
    }, 1200)
  }

  const allChecked = checklist.every((c) => c.done)

  return (
    <div className="animate-slide-in flex flex-col h-full">
      <CircleStepper currentStep={2} totalSteps={4} />

      <div className="mt-4 mb-3">
        <h1 className="text-lg font-bold text-text">Teaching Round</h1>
        <div className="flex items-center justify-between mt-1 gap-2">
          <p className="text-sm text-text-muted flex-1">
            You are teaching: <span className="font-bold text-peach">{topics.teach}</span>
          </p>
          <SessionTimer seconds={timer} variant="teach" />
        </div>
      </div>

      <div className="mb-3">
        <TaskChecklistCard
          title="Your Teaching Check List:"
          items={checklist}
          onToggle={toggleCheck}
        />
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 mb-3 min-h-[120px]">
        {messages.map((msg) => (
          <ChatBubble
            key={msg.id}
            message={msg}
            isOwn={msg.sender === 'you'}
            avatar={msg.sender === 'partner' ? selectedMatch?.avatar : undefined}
          />
        ))}
      </div>

      <div className="mb-3">
        <MessageInput placeholder="Type message..." onSend={handleSend} />
      </div>

      <button
        type="button"
        onClick={completeTeachingRound}
        disabled={!allChecked}
        className={`w-full py-3.5 font-bold rounded-2xl transition-all duration-200 active:scale-[0.98] ${
          allChecked
            ? 'bg-peach text-white hover:bg-peach-dark'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        {allChecked ? 'Complete Teaching Round →' : 'Check all items to continue'}
      </button>
    </div>
  )
}
