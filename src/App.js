import './App.scss';
import {useState} from 'react'

function App() {
  const data = [
    "I'm practicing for a bug-eating contest and I've got butterflies in my stomach.",
    "I used to be addicted to the hokey pokey, but I turned myself around.",
    "Two satellites decided to get married. The wedding wasn't much, but the reception was incredible.",
    "My wife told me to rub the herbs on the meat for better flavor. That's sage advice.",
    "How does a penguin build it’s house? Igloos it together.",
    "If two vegans are having an argument, is it still considered beef?",
    "Why do choirs keep buckets handy? So they can carry their tune",
    "I was thinking about moving to Moscow but there is no point Russian into things.",
    "Where was the Declaration of Independence signed? At the bottom!",
    "At the boxing match, the dad got into the popcorn line and the line for hot dogs, but he wanted to stay out of the punchline.",
    "What do you call a group of disorganized cats? A cat-tastrophe.",
    "Why are graveyards so noisy? Because of all the coffin."
  ]
  const [text,setText] = useState(data[0])


  const handleClickBtn = () => {
    const randomNumber = Math.floor(Math.random() * (data.length - 1))
    setText(data[randomNumber])
  }

  return (
    <div className="App">
    
      <div className='btn'>
        <div className='btnItem' onClick={handleClickBtn}>Random Dad Joke</div>
      </div>

      <p className='text'>{text}</p>
    </div>
  );
}

export default App;
