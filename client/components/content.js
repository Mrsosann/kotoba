import React, { Component } from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'

import Input from 'antd/lib/input';
const Search = Input.Search;

class Content extends Component {
	handleSearch = (value) => {
		console.log(value)
		browserHistory.push(`/result/${value}`)
	}
	render() {
		return (
			<div className="wode-content-input">
			<Search size="large"
		    placeholder="input search words"
		    onSearch={this.handleSearch}
		  />
		  </div>
			)
	}
}

export default Content