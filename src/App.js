import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🎅": "santa claus",
  "🎄": "christmas tree",
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

const emojilist = Object.keys(emojiDictionary);

export default function App() {
  const [emojiMeaningOutput, setEmojiMeaningOutput] = useState(
    "translation will appear here"
  );
  const [emoji, setEmoji] = useState("");
  function onChangeHandler() {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    if (inputEmoji in emojiDictionary) {
      setEmojiMeaningOutput(emojiDictionary[inputEmoji]);
    } else {
      setEmojiMeaningOutput("falure to recognize this emoji");
    }
  }
  function emojiClickHandler(inputEmoji) {
    setEmoji(inputEmoji);
    setEmojiMeaningOutput(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>inside Out!!</h1>
      <input onChange={onChangeHandler} />
      <div>{emoji}</div>
      <div>{emojiMeaningOutput}</div>
      {emojilist.map((emoji) => (
        <span onClick={() => emojiClickHandler(emoji)}> {emoji} </span>
      ))}
    </div>
  );
}
