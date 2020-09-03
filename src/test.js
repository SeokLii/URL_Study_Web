// 다양한 컴포넌트 유형 정리
// 1. 클래스 형식
import React, { Component } from 'react'
import Axios from 'axios'

class Hello extends Component {
  constructor(props) {
    super(props); //this를 사용하기 위해서 부모 클래스 선언
    this.state = { name : "" };
  }
  //Mount 됬을 때
  ComponentDidMount() {
    Axios.get('/api/user/name')
    .then(response => {
      this.setState({name : response.data.name})
    })
  }
  render() {
    return (
      <div>
        My name is {this.state.name}
      </div>
    )
  }
}
export default Hello;


// 2. 함수 형식 : hooks 덕분에 가능하다.
import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function Hello() {
  const [Name, setName] = useState("");

  useEffect(() => {
      Axios.get('/api/user/name')
        .then(response => {
          setName(response.data.name)
        })
  }, [])

  return (
    <div>
      My name is {Name}
    </div>
  )

}
export default Hello;


// react 조건부 랜더링
import React, { useEffect, useState } from 'react'
import style from '../../utils/css/mainpage/Main.css';

function Main() {
  const [Size, setSize] = useState(window.innerWidth);
  console.log(Size);
  if(parseInt(Size) > 768)
  {
    return (
      <table className="table">
        <tr>
          <td className="MainTitle" >URL<br/>STUDY</td>
          <td className="SubTitle">
            <b>URL STUDY is a web application that allows you to record</b>
            <b>and manage URLs used for a variety of purposes.</b>
          </td>
        </tr>
      </table>
    );
  }
  else{
    return (
      <table className="table">
        <tr>
          <td className="MainTitle" >URL<br/>STUDY</td>
        </tr>
        <tr>
          <td className="SubTitle">
            <b>URL STUDY is a web application that allows you to record</b>
            <b>and manage URLs used for a variety of purposes.</b>
          </td>
        </tr>
      </table>
    );
  }
}
function A(){
  setInterval(Main,1000);
}

export default Main;


render() {
  const tempStyle={
    display:"inline-block",
    width:"100px",
    height:"100px",
    boder:"1px solid black",
    background:"orange",
  }
  return
    (
      <Fragment>
      <div style={tempStyle}></div>
      </Fragment>
    );
  }
}
