import React from 'react';

//page
import Header from './sections/Header';
import DragAndDrop from './sections/DragAndDrop';
import Render from './sections/Render';
import DAD from './sections/DAD';



//style
import style from '../../utils/css/mainpage/Main.css';

function Management() {
  return (
  (
    <>
      <Header/>
      {/*<DAD/>*/}
      {/*<DragAndDrop/>*/}
      <DragAndDrop/>
    </>
  )
  );
}

function list(){

}
function listItem(){

}

export default Management;
