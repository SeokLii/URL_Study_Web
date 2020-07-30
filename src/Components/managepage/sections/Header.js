import React, { useEffect, useState } from 'react'

//style
import style from '../../../utils/css/managepage/Header.css';

function Header() {
  //const [Name, setName] = useState("a");

  // useEffect(() => {
  //     Axios.get('/api/user/name')
  //       .then(response => {
  //         setName(response.data.name)
  //       })
  // }, [])

  return (
    (
      <div className="Header">
        <div className="Create"><i className="far fa-calendar-plus HeaderIcon"></i><b>목록추가</b></div>
        <div className="Delete"><i className="fas fa-trash HeaderIcon"></i><b>목록 삭제</b></div>
      </div>
    )
  )

}


export default Header;
