var express = require('express');
var router = express.Router();
const http = require('http');
const corpusUrl = 'http://210.30.97.146/FindVideo/fvApiSearch?keywords=';
const baiduAPI = 'http://api.fanyi.baidu.com/api/trans/vip/translate?'
var crypto = require('crypto');
var content = 'password'


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/result/:words', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/space', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/search/:words', function(req, response, next) {
	var q = encodeURI(req.params.words);
	let net = `${corpusUrl}${q}`
	console.log(net);

	var appid = '20160422000019408';
	var key = 'wVR4zg94ez8fsbzjgRxC';
	var salt = (new Date()).getTime();

	var md5 = crypto.createHash('md5');
	md5.update(`${appid}${req.params.words}${salt}${key}`);
	var sign = md5.digest('hex'); 
  
	let baiduNet = `${baiduAPI}q=${q}&from=jp&to=zh&appid=${appid}&salt=${salt}&sign=${sign}`;
	console.log(baiduNet);
	
	http.get(baiduNet, function (res) {
		var html = '';

		res.on('data', function (data) {
			html += data;
			console.log(data);
		})
		res.on('end', function () {
			http.get(net, function (resv) {
				var videoContent = '';
				resv.on('data', function (data) {
					videoContent += data;
				})
				resv.on('end', function () {
					response.send({result: html, videoContent: videoContent})
				})
			}).on('error', function () {
				console.log('获取数据出错！');
			})
		})
	}).on('error', function () {
		console.log('获取数据出错！');
	})

});

router.get('/list/:words', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
