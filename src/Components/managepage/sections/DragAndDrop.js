import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Board, { moveCard } from "@lourenci/react-kanban";
import Axios from 'axios';


//style
import './test.css'


function DragAndDrop() {

const ttee = {
  columns: [
    {
      id: 1,
      title: "포털 사이트",
      cards: [
        {
          id: 1,
          title: "NAVER",
          description: "https://www.naver.com"
        },
        {
          id: 2,
          title: "Daum",
          description: "https://www.daum.net"
        },
        {
          id: 3,
          title: "YouTube",
          description: "https://www.youtube.com"
        }
      ]
    },
    {
      id: 2,
      title: "공부",
      cards: [
        {
          id: 9,
          title: "MDN web docs",
          description: "https://developer.mozilla.org/ko"
        }
      ]
    }
  ]
}
const [board, setBoard] = useState(ttee);
const [db, setDb] = useState(ttee);
const [cardtitle, setCardtitle] = useState('');
const [cardescription, setCardescription] = useState('');
const [renametitle, setRenametitle] = useState('');
// const { columns } = board; //==const information = this.state.information

//style code
const DefaultStlye ={
  display: "none"
}


useEffect(() => {
    Axios.get('/hello')
      .then(response => {
        // console.log(response.data[0].number);
        // console.log(response.data);
      })

}, [])


//-- board 추가 --
const ColumnAdder = () => {
  return (
    <button className="AddColumBtn" onClick={()=> HandleAddColumn()}>
      +
    </button>
  )
}
const HandleAddColumn = () =>{
  setDb({
    columns: board.columns.push({ id: board.columns.length +1, title: "New", cards:[]})
  })
  //addColumn({id:board.columns.length+1, title: 'Title', cards:[]})
}


//-- 이름 변경 눌럿을때 ---------------------------------------------------------
const HandleLoadRenameForm = ({id}) =>{
  //style 변경
  document.getElementsByClassName('RenameBtn' + id)[0].style.display = 'none';
  document.getElementsByClassName('RenameAddForm' + id)[0].style.display = 'block';
}

const HandleRenameBoard = ({id, renametitle}, {renameColumn}) =>{
  const change = board;
  change.columns[id-1].title = renametitle;
  setDb({
    columns: change.columns
  })
  // renameColumn('New title');

  //input 초기화
  setRenametitle('');

  //style 변경
  document.getElementsByClassName('RenameBtn' + id)[0].style.display = 'inline';
  document.getElementsByClassName('RenameAddForm' + id)[0].style.display = 'none';
}

const HandleRenameCancle = ({id}) =>{
  document.getElementsByClassName('RenameBtn' + id)[0].style.display = 'block';
  document.getElementsByClassName('RenameAddForm' + id)[0].style.display = 'none';
}


//-- + 눌럿을때 ----------------------------------------------------------------
const HandleLoadAddForm = ({id}) =>{
  //style 변경
  document.getElementsByClassName('AddBtn' + id)[0].style.display = 'none';
  document.getElementsByClassName('CardAddForm' + id)[0].style.display = 'inline';
}
//--카드 추가 눌렀을때--
const HandleAddCard = ({id, cardtitle, cardescription}, { addCard }) =>{
  setDb({
    columns: board.columns[id-1].cards.push({ id: board.columns[id-1].cards.length+1, title: cardtitle, description: cardescription })
  })
  // addCard({ id: board.columns[id-1].cards.length+1, title: cardtitle, description: cardescription })

  //input 초기화
  setCardtitle("");
  setCardescription("");

  //style 변경
  document.getElementsByClassName('AddBtn' + id)[0].style.display = 'block';
  document.getElementsByClassName('CardAddForm' + id)[0].style.display = 'none';
}
//--취소 눌렀을때--
const HandleAddCancle = ({id}) => {
  //style 변경
  document.getElementsByClassName('AddBtn' + id)[0].style.display = 'block';
  document.getElementsByClassName('CardAddForm' + id)[0].style.display = 'none';
}


//--input----------------------------------------------------------------------
const onChangeTitle = (e) => {
  setCardtitle(e.target.value);
}

const onChangeDescription = (e) => {
  setCardescription(e.target.value);
}
const onchangeRenametitle = (e) => {
  setRenametitle(e.target.value);
}

const test =() =>{
  console.log();
}

  return (
    <Board
      initialBoard={db}

      /*----Column----*/
      allowAddColumn
      onColumnNew ={console.log}
      renderColumnAdder={() => ColumnAdder()}
      allowRemoveColumn
      onColumnRemove={console.log}
      allowRenameColumn
      onColumnRename={console.log}
      renderColumnHeader={({ id, title, description }, { removeColumn, renameColumn, addCard }) => (
        <div>
            <div className="ColumnTitle">
                <b className="ColumnLeft">{title}</b>
                <button className ={"RenameBtn" + id} id="ReLoadBtn" type='button' onClick={() => HandleLoadRenameForm({id})}><b>변경</b></button>
            </div>
              <i className="fas fa-times ColumnDelete" type='button' onClick={removeColumn}></i>




            <div className = {"RenameAddForm" + id} style={DefaultStlye}>
              <form >
                <input
                  className="InputRename"
                  placeholder="새로운 제목"
                  value = {renametitle}
                  onChange={onchangeRenametitle}
                  name="name"
                />
              <div className="BtnPackage">
                <button className="RenameColumnBtn" type="button" onClick={() => HandleRenameBoard({id, renametitle}, {renameColumn})}>확인</button>
                <button className="RenameCancelBtn" type="button" onClick={() => HandleRenameCancle({id})}>취소</button>
              </div>
              </form>
            </div>


            <div className = {"CardAddForm" + id} style={DefaultStlye}>
              <form className="Form">
                <input
                  className="InputTitle"
                  placeholder="제목"
                  value = {cardtitle}
                  onChange={onChangeTitle}
                  name="title"
                />
                <input
                  className="InputURL"
                  placeholder="URL주소"
                  value = {cardescription}
                  onChange={onChangeDescription}
                  name="URL"
                />
                <div className="BtnPackage">
                  <button className="Addcardbtn" type="button" onClick={()=> HandleAddCard({id, cardtitle, cardescription}, { addCard })}>추가</button>
                  <button className="AddCancelbtn" type="button" onClick={()=> HandleAddCancle({id})}>취소</button>
                </div>
              </form>
            </div>
          <button className ={"AddBtn" + id } id="AddLoadbtn" type='button' onClick={() => HandleLoadAddForm({id})}>+</button>
        </div>
      )}
      /*----Lane----*/
      allowRemoveLane
      onLaneRemove={console.log}
      onLaneRename={console.log}

      /*----Card----*/
      allowRemoveCard
      onCardRemove={console.log}
      onCardNew={console.log}
      renderCard={({ title, description }, { removeCard, dragging }) => (
        <div className="Card" dragging={dragging}>
          <div className="CardTitle"><div className="CardTitleLeft"><b>{title}</b></div><i className="fas fa-times CardDelete" type="button" onClick={removeCard}></i></div>
          <a className="CardDescription" href={description} target="_blank"><b>{description}</b></a>
        </div>
      )}

      /*----Drag----*/
      onCardDragEnd={({ toColumnId, toPosition }) => console.log(toColumnId)}
      onColumnDragEnd={() => console.log(board.columns)}
    >
      {board}
    </Board>
  );
}

export default DragAndDrop;
