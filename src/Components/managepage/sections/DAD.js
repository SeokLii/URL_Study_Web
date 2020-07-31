import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Board, { moveCard } from "@lourenci/react-kanban";
import Axios from 'axios';

//page
import BoardForm from './BoardForm';
import Render from './Render';


//style
import style from '../../../utils/css/managepage/DragAndDrop.css';

function DAD() {

  const [state, setState] = useState({
    columns: //베열
    [
      { id: 1, title: "Backlog", cards:
        [
          {id: 1, title: "Card title 1", description: "Card content"},
          {id: 2, title: "Card title 2", description: "Card content"},
          {id: 3, title: "Card title 3", description: "Card content"}
        ]
      },
      { id: 2, title: "Wanseok", cards:
        [
          {id: 1, title: "Card title 5", description: "Card content"},
          {id: 2, title: "Card title 6", description: "Card content"},
          {id: 3, title: "Card title 7", description: "Card content"}
        ]
      }
    ]
  });

  useEffect(() => {
      Axios.get('/hello')
        .then(response => {
          console.log(response.data[0].number);
          console.log(response.data);
        })
  }, [])


  const onChange = () => {

  }
  const DivStyle ={
    marginLeft: '100px'
  }
  const handleCreate = (data) => {
    const { columns } = state;
    setState({
      columns: columns.concat({ id: state.columns.length+1, ...data })
    })
  }

  return (
    <>
    <Render/>
      <BoardForm
        onCreate={handleCreate}
      />
    <Board
      allowRemoveColumn
      allowRenameColumn

      allowRemoveLane
      onLaneRemove={console.log}
      onLaneRename={console.log}

      allowRemoveCard
      onCardRemove={console.log}

      initialBoard={state}
      allowAddCard={{ on: 'top' }}
      onNewCardConfirm={draftCard => ({
        id: new Date().getTime(),
        ...draftCard
      })}
      onCardNew={console.log}
    />
    </>
  );
}



export default DAD;
