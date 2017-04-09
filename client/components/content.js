import React, { Component } from 'react'
import { render } from 'react-dom'

import Input from 'antd/lib/input';
const Search = Input.Search;

class Content extends Component {
	render() {
		return (
			<div className="wode-input">
			<Search size="large"
		    placeholder="input search words"
		    onSearch={value => console.log(value)}
		  />
		  </div>
			)
	}
}

export default Content