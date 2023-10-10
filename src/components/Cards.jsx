import React from 'react';
import frontcardcircle from '../images/frontcardcircle.png';
// import './Cards.css'; 

const Cards = ({ CardHolderName, cardNumber, cardcv, date }) => {
  return (
    <div className='card-container'>
      <div className='pt-14'>
        <div className='centered-form'>
          {/* FRONTEND CARD */}
          <div className='relative frontcard ml-28'>
            <img src={frontcardcircle} alt="logo" width="70px" className='ml-12 relative top-7' />
            <div className='absolute bottom-32 left-10 right-16 top-32 tracking-widest text-[23px] font-bold text-white text-center'>
              <h1>{cardNumber}</h1>
            </div>
            <div className='flex justify-between mr-12 ml-14 items-center text-white pt-20'>
              <div className='pt-14 pt tracking-wider'>
                <p>{CardHolderName}</p>
              </div>
              <div className='pt-14 tracking-wider'>
                <p>09/89</p>
              </div>
            </div>
          </div>
          {/* END OF FRONTCARD */}

          {/* BACKCARD */}
          <div className='mt-5 backcard ml-52'>
            <div className='pt-6'>
              <p className='bg-[#2F2F2F] shadow-2xl p-5'></p>
            </div>
            <div className='mt-5 pr-14 pl-14 text-right'>
              <div className='bg-[#ADB5BE] rounded-sm py-4 text-white'>
                <p className='text-[15px] text-slate-50 mr-3'>{cardcv}</p>
              </div>
            </div>
          </div>
          {/* END OF BACKCARD */}
        </div>
      </div>
      {/* <Form /> */}
    </div>
  );
};
export default Cards;
