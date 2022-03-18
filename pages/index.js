import Chatbot from "../components/chatbot";

export default function Home() {
  return (
    <div className="flex min-h-screen py-2 justify-center items-center bg-slate-700">
      <head>
        <title>Chat Bot</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <Chatbot />
    </div>
  )
}