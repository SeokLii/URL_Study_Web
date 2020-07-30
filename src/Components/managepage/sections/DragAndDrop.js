import React, { useEffect, useState, useRef } from 'react'
import UncontrolledBoard from './UncontrolledBoard';


function DragAndDrop(){
const inputEl = useRef(null);
  const ListFucntion=(e)=>{
    console.log(inputEl);
  }
  const style = {
      border : '1px solid black',
      height : '300px',
      width : '300px',
      overflow : 'auto',
  }

  const innerStyle ={
      height : '650px',
      background : 'linear-gradient(white, black)',
  }
      return (
        <UncontrolledBoard/>
      )
}

export default DragAndDrop;
