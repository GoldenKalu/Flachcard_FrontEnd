import React, { useState, useEffect, Component } from 'react';
import FlashcardList from './flashcardList';
import './app.css'
import axios from 'axios'
import Flashcard from './flashcard';


class App extends Component {
  state = {
    flashcards: [],
  };

  componentDidMount() {
    this.getFlashcards();
  }
}
// function App() {
//   const [flashcards, setFlashcards] = useState(sample_flashcards)

  useEffect(() => {
    const getFlashcards = async () => {
      try{
        let response = await axios.get('http://localhost:5000/api/flashcards/')
        setFlashcards(response.data)

      } catch(err){
        console.log(err)

      }
    }

    getFlashcards()
    

    return (
      <FlashcardList flashcards={flashcards} />
    );
      
  }, []); 


// const sample_flashcards = [
//   {
//     id: 1,
//     question: 'what is JavaScript?',
//     answer: 'a programming language',
//     options: [
//       'a programming language',
//       'a note taking app',
//     ]
//   },

//   {
//     id: 2,
//     question: 'Question 2?',
//     answer: 'Answer',
//     options: [
//       'Answer 1',
//       'Answer2',
//     ]
//   },
  

// ]
export default App;
