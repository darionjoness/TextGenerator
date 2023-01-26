import Header from "./components/Header";
import ParagraphNumber from "./components/ParagraphNumber";
import Paragraphs from "./components/Paragraphs";
import randParagraphs from "./paragrapharr";
import { useState } from "react";

function App() {
  const [selectedNum, setSelectedNum] = useState(0)
  const [genText, setGenText] = useState([])

  const generateText = () => {
    let newArr = []
    for(let i = 0; i < selectedNum; i++){
      newArr.push(randParagraphs[Math.floor(Math.random() * randParagraphs.length)])
    }
    setGenText(newArr)
  }

  return (
    <div className="app">
      <Header />
      <ParagraphNumber handleChange={(e) => setSelectedNum(e.target.value)} onClick={generateText} />
      <Paragraphs genText={genText} />
    </div>
  );
}

export default App;
