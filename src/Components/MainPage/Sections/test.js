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
  const [Name, setName] = useStae("")

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
