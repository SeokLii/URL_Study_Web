import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault(); // 페이지 리로딩 방지
    this.props.onCreate(this.state); // 상태값을 onCreate 를 통하여 부모에게 전달
    this.setState({ // 상태 초기화
      name: '',
      phone: ''
    })
  }

  render() {
      const DivStyle = {
        marginLeft : "100px"
      }
    return (
      <div style ={DivStyle}>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="New Board"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
        {/*<input
          placeholder="description"
          value={this.state.phone}
          onChange={this.handleChange} //텍스트 값이 바뀔때마다 발생하는 이벤트
          name="phone"
        />*/}
        <button type="submit">추가</button>
        </form>
      </div>

    );
  }
}

export default PhoneForm;
