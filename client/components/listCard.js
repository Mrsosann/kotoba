import React, { Component } from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'

import Card from 'antd/lib/card';

class ListCard extends Component {
	handleSearch = (value) => {
		console.log(value)
		browserHistory.push(`/result/${value}`)
	}
	render() {
		let {info} = this.props
		
		return (
			<div className="wode-listCard">
		    <Card 
			    title={info.videoTitle} 
			    bordered={false} 
			    width="100%"
			    extra={<a href={info.url} target="_blank">whole&gt;&gt;</a>} 
			    bodyStyle={{ padding: 0 }}>
		      <video className="wode-list-video" width="100%" controls="controls" 
		      src={info.videoUrl}>
						Your browser does not support the html5 video tag.
					</video>
			    <div className="wode-video-message">
			      <p className="wode-p1">{info.contentSource}</p>
			      <p className="wode-p2">{info.contentTrans}</p>
			    </div>
		    </Card>
		   </div>
			)
	}
}

export default ListCard