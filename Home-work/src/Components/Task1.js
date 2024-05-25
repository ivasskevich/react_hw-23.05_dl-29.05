import React from 'react';

export function Person() {
   const person = {
      fullName: 'Ілон Маск',
      birthDate: '28 червня 1971',
      biografi: 'Ілон Рів Маск – американський підприємець, інженер та мільярдер південноафриканського походження. Він є засновником, генеральним директором і головним інженером SpaceX; інвестор, генеральний директор і архітектор продукту Tesla, Inc.; власник, виконавчий голова та CTO X (колишня Twitter); президент Musk Foundation.',
      Url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg',
   };

   return (
      <div>
         <div className='box1'>
            <img src={person.Url} alt="Mask"></img>
            <p className='text2'>{person.fullName}</p>
            <p className='text2'>{person.birthDate}</p>
            <p className='text2'>{person.biografi}</p>
         </div>
      </div>
   );
}