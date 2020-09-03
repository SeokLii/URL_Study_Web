import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Board, { moveCard } from "@lourenci/react-kanban";
import Axios from 'axios';


//style
import './test.css'
import { getFlatDataFromTree } from "react-sortable-tree";
import { valHooks } from "jquery";

function DragAndDrop() {
var defaultBoard = {columns:[]};
const [board, setBoard] = useState(defaultBoard);
const [cardtitle, setCardtitle] = useState('');
const [cardescription, setCardescription] = useState('');
const [renametitle, setRenametitle] = useState('');
const [change, setChange] = useState('off');
// const { columns } = board; //==const information = this.state.information

//style code
const DefaultStlye ={
  display: "none"
}

useEffect(() => {
  getBoard();
  if(change == 'on')
  {
    Axios.post('/update',{
      params: { // query string
        boardIdX :'hd',
        boardTitle : 'hd',
      }
    })
    // for(var a =0; a < board.columns.length; a++)
    // {
    //   Axios.get('/update',{
    //     params: { // query string
    //       boardIdX : board.columns[a].id,
    //       boardTitle : board.columns[a].title,
    //     }
    //   })
    //   for(var b=0; b< board.columns[a].cards.length; b++)
    //   {
    //     Axios.get('/update',{
    //       params: { // query string
    //         cardIdY : board.columns[a].cards[b].id,
    //         cardTitle : board.columns[a].cards[b].title,
    //         cardUrl : board.columns[a].cards[b].description
    //       }
    //     })
    //   }
    // }
  }
}, [change])

const getBoard = async () =>{
  let response = await Axios.get('/hello');
 
  var boardArr = new Array();
  for(var a=0; a<response.data.board.length; a++){
    var boardObj = new Object();
    
    var cardArr = new Array();
    boardObj.id = response.data.board[a].IdX;
    boardObj.title = response.data.board[a].Title;

    //card 만드는곳 Array 안에 Object
    for(var b = 0; b < response.data.card.length; b++){
      var cardObj = new Object();
      if(response.data.board[a].IdX == response.data.card[b].IdX){
        cardObj.id = response.data.card[b].IdY;
        cardObj.title = response.data.card[b].title;
        cardObj.description = response.data.card[b].url;
        cardArr.push(cardObj);
      }
    }
    //console.log(cardArr); // Card 확인
    boardObj.cards = cardArr;

    boardArr.push(boardObj);
  }
  defaultBoard.columns = boardArr;
  setBoard(defaultBoard);

}

//-- board 추가 --
const ColumnAdder = () => {
  return (
    <button className="AddColumBtn" onClick={()=> HandleAddColumn()}>
      +
    </button>
  )
}
const HandleAddColumn = () =>{
<<<<<<< HEAD
  var localboard = board;
  console.log(localboard.columns.length);
  localboard.columns.push({ id: localboard.columns.length +1, title: "New", cards:[]});
  setBoard(localboard);
  setChange("on");
=======
  setBoard({
    columns: board.columns.push({ id: board.columns.length +1, title: "New", cards:[]})
  })
>>>>>>> bcc7e566aa01ccb8a1503075253295a2196f16f4
  //addColumn({id:board.columns.length+1, title: 'Title', cards:[]})
}


//-- 이름 변경 눌럿을때 ---------------------------------------------------------
const HandleLoadRenameForm = ({id}) =>{
  //style 변경
  document.getElementsByClassName('RenameBtn' + id)[0].style.display = 'none';
  document.getElementsByClassName('RenameAddForm' + id)[0].style.display = 'block';
}

const HandleRenameBoard = ({id, renametitle}, {renameColumn}) =>{
<<<<<<< HEAD
  const localboard = board;
  localboard.columns[id-1].title = renametitle;
  setBoard(localboard);
=======
  const change = board;
  change.columns[id-1].title = renametitle;
  setBoard({
    columns: change.columns
  })
>>>>>>> bcc7e566aa01ccb8a1503075253295a2196f16f4
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
<<<<<<< HEAD
  var localboard = board;
  console.log(localboard);
  localboard.columns[id-1].cards.push({ id: localboard.columns[id-1].cards.length+1, title: cardtitle, description: cardescription });
  setBoard(localboard);
=======
  setBoard({
    columns: board.columns[id-1].cards.push({ id: board.columns[id-1].cards.length+1, title: cardtitle, description: cardescription })
  })
>>>>>>> bcc7e566aa01ccb8a1503075253295a2196f16f4
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
      initialBoard={board}

      /*----Column----*/
      allowAddColumn
      onColumnNew ={console.log}
      renderColumnAdder={() => ColumnAdder()}
      allowRemoveColumn
      onColumnRemove={(board, column) => {
        setDb(board);
        
      }}
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
      onCardRemove={(board, column, card) => {
        setDb(board);
        
      }}
      onCardNew={console.log}
      renderCard={({ title, description }, { removeCard, dragging }) => (
        <div className="Card" dragging={dragging}>
          <div className="CardTitle"><div className="CardTitleLeft"><b>{title}</b></div><i className="fas fa-times CardDelete" type="button" onClick={removeCard}></i></div>
          <a className="CardDescription" href={description} target="_blank"><b>{description}</b></a>
        </div>
      )}

      /*----Drag----*/
      onCardDragEnd={(board, column, source, destination) => {
        setDb(board);
        console.log(board.columns.findIndex(i => i.id == 1));
        console.log(board, column, source, destination);
        console.log(source.fromPosition, destination.toPosition);
      }}
      onColumnDragEnd={(board, column, source, destination) => {
        setDb(board);
        console.log(board.columns.findIndex(i => i.id == 1));
        console.log(board, column, source, destination);
        console.log(source.fromPosition, destination.toPosition);
      }}
    >
      {board}
    </Board>
  );
}

export default DragAndDrop;
