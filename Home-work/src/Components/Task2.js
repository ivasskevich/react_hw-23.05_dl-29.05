import React, { useState } from 'react';

export function ClubPhoto() {
   return (
      <img className='ClubPhoto-img' src="https://www.ua-region.com.ua/firms/photo/305981/1.jpg" alt="Фото клубу" />
   );
}

export function Club() {
   const сlubinform = {
      clubName: 'ФК Динамо Київ',
      city: 'Київ',
      dateOfFoundation: '1927 рік',
      goalsScored: 'Найбільше забитих голів 148'
   };

   return (
      <div>
         <div className='box3'>
            <div className='box-photos'>
               <ClubPhoto />
            </div>
            <p>Назва клубу: {сlubinform.clubName}</p>
            <p >Місто: {сlubinform.city}</p>
            <p>Дата заснуваня: {сlubinform.dateOfFoundation}</p>
            <p>Забитих голів: {сlubinform.goalsScored}</p>
         </div>
      </div>
   );
}
