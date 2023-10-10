import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Form from './components/Form';

function App() {
  const [CardHolderName, setCardHolderName] = useState("")
  const [cardNumber, setCardNumber] =useState("")
  const [cardcv, setCardCV] =useState("")
  const [date, setDate] =useState("") 


  return (
    <>
    <div >
        <div className="flex flex-col md:flex-row md:justify-between">
  <Cards
    CardHolderName={CardHolderName}
    cardNumber={cardNumber}
    cardcv={cardcv}
    date={date}
  />
  <div className="md:mr-48 mt-4 md:mt-0 form-container ">

      <div className='form-container '>
        <Form 
         CardHolderName={CardHolderName}
         setCardHolderName={setCardHolderName}
         cardNumber={cardNumber}
         setCardNumber={setCardNumber}
         cardcv={cardcv}
         setCardCV={setCardCV}
         date={date}
        setDate={setDate}
    />
      </div>
  </div>
</div>

    </div>
    </>
  );
}
export default App;
