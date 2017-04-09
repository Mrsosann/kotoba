import React, { Component } from 'react'
import { render } from 'react-dom'
import Nav from './nav'
import Content from './content'
import Footer from './footer'

class App extends Component {
	render() {
		return (
			<div>
				<Nav />
				<Content />
				<Footer />
			</div>
			)
	}
}

export default App