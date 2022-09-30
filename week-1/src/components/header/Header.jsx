import { Component } from "react";

export default class HeaderBar extends Component {
	render() {
		return (
			<div>
      제목 <input autoComplete="off" id="inputText" type="text"></input>
      내용 <input autoComplete="off" id="inputText" type="text"></input>
				<input type="button" value="추가하기"></input></div>
		);
	}
}