import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Board, { moveCard } from "@lourenci/react-kanban";
import Axios from 'axios';

//style
import '@lourenci/react-kanban/dist/styles.css'

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
useEffect(() => {
    Axios.get('/hello')
      .then(response => {
        console.log(response.data[0].number);
        console.log(response.data);
      })
}, [])

const [board, setBoard] = useState(ttee);
const ColumnAdder = ({ addColumn }) => {
  return (
    <div onClick={()=> (
      console.log("ghi"),
      addColumn({id:board.columns.length+1, title: 'Title', cards:[]})
      )}>
      보드 추가
    </div>
  )
}
const HandleAddCard = ({ id, title, description }, { addCard }) =>{
      addCard({ id: board.columns[id-1].cards.length+1, title: title, description: description })
}

  return (
    <Board
      initialBoard={board}

      allowAddColumn
      onColumnNew ={console.log}
      renderColumnAdder={({ addColumn }) => <ColumnAdder addColumn={addColumn} />}
      allowRemoveColumn
      onColumnRemove={console.log}
      allowRenameColumn
      onColumnRename={console.log}

      allowRemoveLane
      onLaneRemove={console.log}
      onLaneRename={console.log}

      allowRemoveCard
      onCardRemove={
        A =>(console.log)
      }
      allowAddCard={{ on: "top" }}
    
      onCardNew={console.log}

      renderColumnHeader={({ id, title, description }, { removeColumn, renameColumn, addCard }) => (
        <div>
          {title}
          <button type='button' onClick={removeColumn}>삭제</button>
          <button type='button' onClick={() => renameColumn('New title')}>이름 변경</button>
          <button type='button' onClick={() => HandleAddCard({ id, title, description }, { addCard })}>추가</button>
        </div>
  )}
  renderCard={({ title, description }, { removeCard, dragging }) => (
    <div dragging={dragging}>
      {title}<br/>{description}
      <button type="button" onClick={removeCard}>삭제</button>
    </div>
  )}
    >
      {board}
    </Board>
  );
}

export default DragAndDrop;
