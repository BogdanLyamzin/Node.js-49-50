import Chat from "./components/Chat/Chat";
import ChatForm from "./components/ChatForm/ChatForm";
import SigninChatForm from "./components/SigninChatForm/SigninChatForm";

import './App.css';

function App() {
  
  return (
    <div className="App">
      <SigninChatForm />
      <ChatForm />
      <Chat items={messages} />
    </div>
  )
}

export default App;
