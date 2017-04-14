import React, { Component } from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'

import Input from 'antd/lib/input';
const Search = Input.Search;
import Card from 'antd/lib/card';
import ListCard from './listCard'

class List extends Component {
	constructor(props){
		super(props);
		this.state={
			videoInfo: []
		};
	}
	componentWillMount(){
		var keywords = this.props.params.words

		fetch(`/search/${keywords}`)
		.then(response => {
			return response.json()
		}).then(json => {			
			var videoContent = JSON.parse(json.videoContent);
			var videoInfo = [];
			for (var i = 0; i < videoContent.length && i<9; i++) {
				videoInfo[i] = {
					videoUrl: `${videoContent[i].url}?start=${videoContent[i].start}&end=${videoContent[i].end}`,
					videoTitle: videoContent[i].title,
					contentSource: videoContent[i].content.split('|')[1],
					contentTrans: videoContent[i].content.split('|')[0],
					url: videoContent[i].url
				}
			}
			console.log(videoInfo);

			this.setState({
				videoInfo: videoInfo
			});
		})
	}
	render() {
		let cards = [];
		this.state.videoInfo.map(function(item, index) {
			if ( (index)%3==0 ) {
				cards.push(<div className="wode-br-div" key={`div${index}`}></div>);
			}
			cards.push(<ListCard info={item} key={index}/>)
			
		})
		return (
				<div className="wode-list-content">
					{cards}
			  </div>
			)
	}
}

export default List