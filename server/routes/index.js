var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { // 捕获 / 路径的 GET 请求
  res.render('index', { title: 'Express' });
});

//首页greentea的数据
router.get('/api/index_list/2/data/1', function(req, res, next) {
	res.send({
		code:0,
		data:[
			{
				id:0,
				type:'adList',
				data:[
					{
						id:1,
						imgUrl:'./images/greentea.jpeg'
					}
					
				]
			},
			{
				id:1,
				type:'iconsList',
				data:[
							{
								id:1,
								title:'Tee zum Selbsttrinken',
								imgUrl:'./images/icons1.png'
							},
							{
								id:2,
								title:'Teezubehör',
								imgUrl:'./images/icons2.png'
							},
							{
								id:3,
								title:'Tee Geschenkbox',
								imgUrl:'./images/icons3.png'
							},
							{
								id:4,
								title:'Vorteile erhalten',
								imgUrl:'./images/icons4.png'
							},
							{
								id:5,
								title:'Quellenprüfung',
								imgUrl:'./images/icons5.png'
							}
				]
			},
			{
				id:2,
				type:'likeList',
				data:[
					{
						id:1,
						imgUrl:'./images/like1.jpeg',
						name:'BASILUR Chinese White Tea Papierverpackung 100g',
						price:6.22
					},
					{
						id:2,
						imgUrl:'./images/like2.jpeg',
						name:'Ronnefeldt Pu-Erh Schwarzer Tee 1250 g',
						price:79
					},
					{
						id:3,
						imgUrl:'./images/like3.jpeg',
						name:'Purasana Pu-Erh Fatburner Tee 20 St Filterbeutel',
						price:3.87
					},
				]
			}
			
		]
	})
})
//首页black tea的数据
router.get('/api/index_list/1/data/1', function(req, res, next) {
	res.send({
		code:0,
		data:[
			{
				id:1,
				type:'adList',
				data:[
					{
						id:1,
						imgUrl:'./images/blacktea.jpeg'
					},
					{
						id:2,
						imgUrl:'./images/blacktea.jpeg'
					}
				]
			},
			{
				id:2,
				type:'likeList',
				data:[
					{
						id:1,
						imgUrl:'./images/like1.jpeg',
						name:'BASILUR Chinese White Tea Papierverpackung 100g',
						price:6.22
					},
					{
						id:2,
						imgUrl:'./images/like2.jpeg',
						name:'Ronnefeldt Pu-Erh Schwarzer Tee 1250 g',
						price:79
					},
					{
						id:3,
						imgUrl:'./images/like3.jpeg',
						name:'Purasana Pu-Erh Fatburner Tee 20 St Filterbeutel',
						price:3.87
					}
				]
			}
			
		]
	})
})
//首页推荐的数据
router.get('/api/index_list/0/data/1', function(req, res, next) {
	res.send({
		code:0,
		data:{
			tabsItems: [
				{ id:'0', title: 'Recommend' },
				{ id:'1', title: 'Black Tea'},
				{ id:'2', title: 'Green Tea' },
				{ id:'3', title: 'Oolong Tea'}, //, badge: 22
				{ id:'4', title: 'White Tea' },
				{ id:'5', title: 'Pu-erh' },
				{ id:'6', title: 'Yellow Tea' },
				{ id:'7', title: 'Dark Tea' },
			],
			data:[
				//这是swiper
				{
					id:0,
					type:'swiperList',
					data:[
						{id:1,imgUrl:'./images/swiper1.jpeg'},
						{id:2,imgUrl:'./images/swiper2.jpeg'},
						{id:3,imgUrl:'./images/swiper3.jpeg'}
					]
				},
				//这是icons
				{
					id:1,
					type:'iconsList',
					data:[
								{
									id:1,
									title:'Tee zum Selbsttrinken',
									imgUrl:'./images/icons1.png'
								},
								{
									id:2,
									title:'Teezubehör',
									imgUrl:'./images/icons2.png'
								},
								{
									id:3,
									title:'Tee Geschenkbox',
									imgUrl:'./images/icons3.png'
								},
								{
									id:4,
									title:'Vorteile erhalten',
									imgUrl:'./images/icons4.png'
								},
								{
									id:5,
									title:'Quellenprüfung',
									imgUrl:'./images/icons5.png'
								}
					]
				},
				//爆款推荐
				{
					id:2,
					type:'recommendList',
					data:[
								{
									id:1,
									imgUrl:'./images/recommend1.jpeg',
									name:'Long Jing Grüner Tee Green Tea 125g',
									content:'aus der HangZhou, China (Frühjahrsernte 2022)',
									price:24.99
								},
								{
									id:2,
									imgUrl:'./images/recommend2.jpeg',
									name:'Milch Oolong Tee Hohe Qualität 250g',
									content:'100% Natural Green Food',
									price:13.51
								}
					]
				},
				//猜你喜欢
				{
					id:3,
					type:'likeList',
					data:[
						{
							id:1,
							imgUrl:'./images/like1.jpeg',
							name:'BASILUR Chinese White Tea Papierverpackung 100g',
							price:6.22
						},
						{
							id:2,
							imgUrl:'./images/like2.jpeg',
							name:'Ronnefeldt Pu-Erh Schwarzer Tee 1250 g',
							price:79
						},
						{
							id:3,
							imgUrl:'./images/like3.jpeg',
							name:'Purasana Pu-Erh Fatburner Tee 20 St Filterbeutel',
							price:3.87
						},
					]
				}
				
			]
		}
	})
});

module.exports = router;
