import React, { useState } from 'react';
import ThankYou from './ThankYou';

const Form = ({
  CardHolderName,
  setCardHolderName,
  cardNumber,
  setCardNumber,
  cardcv,
  setCardCV,
  setDate,
  date,
}) => {
  
  const [Thankyou, setThankYou] = useState(false);

  // Function to format card number input with maximum length
  const formatCardNumber = (input) => {
    // Remove non-numeric characters
    const numericInput = input.replace(/\D/g, '');

    // Limit to a maximum length (e.g., 19 characters)
    const maxLength = 19;
    if (numericInput.length > maxLength) {
      return numericInput.slice(0, maxLength);
    }

    // Add spaces for readability (e.g., 4-digit blocks)
    const formattedInput = numericInput.replace(/(\d{4})/g, '$1 ').trim();

    return formattedInput;
  };

  return (
    <>
      
      {!Thankyou && (
        <div className='flex justify-start items-center mt-20'>
          <div className='ml-4 mt-16'>
            <div className='form'>
              <div className='mb-4'>
                <label htmlFor='username' className='text-sm shadow tracking-widest'>
                  CARD NUMBER
                </label>{' '}
                <br />
                <input
                  type='text'
                  placeholder='e.g. 5655 7756 6466 6799'
                  className='mb-5 w-[100%] border-2 rounded-md shadow-sm outline-none py-1'
                  name='cardNumber'
                  value={formatCardNumber(cardNumber)}
                  onChange={(e) => setCardNumber(e.target.value)}
                  maxLength={19}
                  required
                />
              </div>

              <div className='mb-4'>
                <label htmlFor='username' className='text-sm tracking-widest'>
                  CARDHOLDER NAME
                </label>{' '}
                <br />
                <input
                  type='text'
                  placeholder='e.g. Chioma franca'
                  className='mb-5 w-[100%] border-2 rounded-md shadow-sm outline-none py-1'
                  required
                  name='CardHolderName'
                  value={CardHolderName}
                  onChange={(e) => setCardHolderName(e.target.value)}
                />
              </div>

              <div className='mb-4'>
                <label htmlFor='expiration' className='text-sm tracking-widest text-'>
                  EXP. Date(MM/YY)
                </label>
                <label htmlFor='number' className='ml-10 tracking-widest'>
                  Cvc
                </label>
                <div className='flex gap-2'>
                  <input
                    type='date'
                    placeholder='YY'
                    className='mb-5 w-[50%] h-[40px] border-2 rounded-md shadow-sm outline-none'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />

                  <input
                    type='text'
                    placeholder='e.g. 123'
                    className='w-[50%] h-[40px] border-2 rounded-md shadow-sm outline-none'
                    value={cardcv}
                    maxLength={3}
                    required
                    onChange={(e) => setCardCV(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={() => setThankYou(true)}
                  className='bg-[#21092F] shadow-md w-[100%] text-white py-2 rounded-lg'
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {Thankyou && <ThankYou setThankYou={setThankYou} />}
    </>
  );
};

export default Form;
