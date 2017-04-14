import React, { Component } from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import Input from 'antd/lib/input';
const Search = Input.Search;
import Card from 'antd/lib/card';

class Result extends Component {
	constructor(props){
		super(props);
		this.state={
			videoUrl: '',
			title: '',
			contentSource: '',
			contentTrans: '',
			wordsTrans: '',
			needFetch: true
		};
	}
	componentWillMount(){
		this.handleLoadData()
	}
	handleLoadData = (value) => {
		if(value === undefined) {
			console.log('test')
			var keywords = this.props.params.words
		} else {
			if(value === '') return
			browserHistory.push(`/result/${value}`)
			var keywords = value
		}

		fetch(`/search/${keywords}`)
		.then(response => {
			return response.json()
		}).then(json => {
			console.log(json);
			var result = JSON.parse(json.result);
			var videoContent = JSON.parse(json.videoContent);
			var videoUrl = `${videoContent[0].url}?start=${videoContent[0].start}&end=${videoContent[0].end}`;
			
			console.log(videoContent[0].content.split('|'));
			console.log(result);
			var contentSource = videoContent[0].content.split('|')[0];
			var contentTrans = videoContent[0].content.split('|')[1];
			var wordsTrans = result.trans_result[0].dst;
			console.log(wordsTrans);

			this.setState({
				videoUrl: videoUrl,
				title: videoContent[0].title,
				contentSource: contentSource,
				contentTrans: contentTrans,
				wordsTrans: wordsTrans
			});
		})
	}
	
	render() {
		return (
			<div style={{ padding: '30px' , overflow: 'hidden'}}>
				<div className="wode-result-left">
					<Search size="large"
				    placeholder="input search words"
				    defaultValue={this.props.params.words}
				    onSearch={value => this.handleLoadData(value)}
				  />
				
			    <Card 
				    title={this.props.params.words}
				    bordered={false} 
				    width="100%"
				    style={{ margin: '30px 0' ,fontSize: '1.2em' }}>
			      <p>释义：</p>
			      <p>{this.state.wordsTrans}</p>
			      <p>Card content</p>
			    </Card>
		    </div>
		    <div className="wode-result-right">
			    <Card 
				    title={this.state.title} 
				    bordered={false} 
				    style={{ width: 480 }} 
				    extra={<a href={`../list/${this.props.params.words}`} target="_blank">More&gt;&gt;</a>} 
				    bodyStyle={{ padding: 0 }}>
			      <video className="wode-result-video" width="100%" controls="controls" 
			      src={this.state.videoUrl}>
							Your browser does not support the html5 video tag.
						</video>
				    <div className="wode-video-message">
				      <p className="wode-p1">{this.state.contentSource}</p>
				      <p className="wode-p2">{this.state.contentTrans}</p>
				    </div>
			    </Card>
		    </div>		    
		  </div>
			)
	}
}

export default Result