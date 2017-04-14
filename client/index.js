import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import Content from './components/content'
import Result from './components/result'
import Space from './components/space'
import List from './components/list'
import '../public/stylesheets/style.css'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'


render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Content}></IndexRoute>
			<Route path='index' component={Content} />
			<Route path='result/:words' component={Result} />
			<Route path='space' component={Space} />
			<Route path='list/:words' component={List} />
		</Route>

	</Router>,
	document.getElementById('root')
	)