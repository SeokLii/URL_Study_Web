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
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Card title 1",
          description: "Card content"
        },
        {
          id: 2,
          title: "Card title 2",
          description: "Card content"
        },
        {
          id: 3,
          title: "Card title 3",
          description: "Card content"
        }
      ]
    },
    {
      id: 2,
      title: "Doing",
      cards: [
        {
          id: 9,
          title: "Card title 9",
          description: "Card content"
        }
      ]
    }
  ]
}
const [board, setBoard] = useState(ttee);
const [db, setDb] = useState(ttee);
const [cardtitle, setCardtitle] = useState('');
const [cardescription, setCardescription] = useState('');
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
    <button onClick={()=> HandleAddColumn()}>
      보드 추가
    </button>
  )
}
const HandleAddColumn = () =>{

  setDb({
    columns: board.columns.push({ id: board.columns.length +1, title: "New", cards:[]})
  })
  //addColumn({id:board.columns.length+1, title: 'Title', cards:[]})
}
console.log(board.columns);
//-- + 눌럿을때 --
const HandleLoadAddForm = ({id}) =>{
  //style 변경
  document.getElementsByClassName('AddBtn' + id)[0].style.display = 'none';
  document.getElementsByClassName('CardAddForm' + id)[0].style.display = 'block';
}

//--카드 추가 눌렀을때--
const HandleAddCard = ({id, cardtitle, cardescription}, { addCard }) =>{
  setDb({
    columns: board.columns[id-1].cards.push({ id: board.columns[id-1].cards.length+1, title: cardtitle, description: <a href={cardescription}>{cardescription}</a> })
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

//--input--
const onChangeTitle = (e) => {
  setCardtitle(e.target.value);
}

const onChangeDescription = (e) => {
  setCardescription(e.target.value);
}
const handleSubmit = (e) => {
  e.target.reset(); //input 초기화

}
  return (
    <Board
      initialBoard={board}
      /*ㅇ*/
      allowAddColumn
      onColumnNew ={console.log}
      renderColumnAdder={() => ColumnAdder()}
      allowRemoveColumn
      onColumnRemove={console.log}
      allowRenameColumn
      onColumnRename={console.log}

      allowRemoveLane
      onLaneRemove={console.log}
      onLaneRename={console.log}

      allowRemoveCard
      onCardRemove={console.log}
      onCardNew={console.log}

      renderColumnHeader={({ id, title, description }, { removeColumn, renameColumn, addCard }) => (
        <div>
          {title}
          <i className="fas fa-times" type='button' onClick={removeColumn}></i>
            <div className = {"RenameAddForm" + id} style={DefaultStlye}>
              <form >
                <input
                  placeholder="New Board"
                  name="name"
                />
                <input
                  placeholder="New Board"
                  name="name"
                />
              {/*<input
                placeholder="description"
                value={this.state.phone}
                onChange={this.handleChange} //텍스트 값이 바뀔때마다 발생하는 이벤트
                name="phone"
              />*/}
              <button type="submit">추가</button>
              <button type="submit">취소</button>
              </form>
            </div>
          <button className ={"RenameBtn" + id} type='button' onClick={() => renameColumn('New title')}>이름 변경</button>

            <div className = {"CardAddForm" + id} style={DefaultStlye}>
              <form onSubmit={handleSubmit}>
                <input
                  value = {cardtitle}
                  onChange={onChangeTitle}
                  name="title"
                />
                <input
                  placeholder="URL주소"
                  value = {cardescription}
                  onChange={onChangeDescription}
                  name="URL"
                />
              <button type="button" onClick={()=> HandleAddCard({id, cardtitle, cardescription}, { addCard })}>추가</button>
              <button type="button" onClick={()=> HandleAddCancle({id})}>취소</button>
              </form>
            </div>
          <button className ={"AddBtn" + id } id="btn" type='button' onClick={() => HandleLoadAddForm({id})}>+</button>
        </div>
      )}

      renderCard={({ title, description }, { removeCard, dragging }) => (
        <div dragging={dragging}>
          {title}<br/>
          <i className="fas fa-times" type="button" onClick={removeCard}></i>
          {description}
        </div>
      )}
    >
      {board}
    </Board>
  );
}

export default DragAndDrop;
