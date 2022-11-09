var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { // 捕获 / 路径的 GET 请求
  res.render('index', { title: 'Express' });
});

//greentea的数据
// router.get('/api/index_list/2/data/1', function(req, res, next) {
// 	res.send({
// 		code:0,
// 		data:[
// 			{
// 				id:0,
// 				type:'adList',
// 				data:[
// 					{
// 						id:1,
// 						imgUrl:'./images/greentea.jpeg'
// 					}
					
// 				]
// 			},
// 			{
// 				id:1,
// 				type:'recommendList',
// 				data:[
// 					{
// 						id:1,
// 						imgUrl:'./images/recommend1.jpeg',
// 						name:'Long Jing Grüner Tee Green Tea 125g',
// 						content:'aus der HangZhou, China (Frühjahrsernte 2022)',
// 						price:24.99
// 					},
// 					{
// 						id:2,
// 						imgUrl:'./images/recommend_g1.jpeg',
// 						name:'Bio-Karigane vom Premium Gyokuro 100g',
// 						content:'1. Ernte, Top-Region Shibushi, Blend aus Yabukita, Okumidori und Saemidori, vollbeschattet',
// 						price:10.90
// 					},
// 					{
// 						id:3,
// 						imgUrl:'./images/recommend_g2.jpeg',
// 						name:'Royal Green Teas 5 packs',
// 						content:'Entspannen Sie sich und machen Sie Ihren Kopf frei mit dieser köstlichen grünen Kollektion',
// 						price:15.99
// 					}
// 				]
// 			},
// 			{
// 				id:2,
// 				type:'likeList',
// 				data:[
// 					{
// 						id:1,
// 						imgUrl:'./images/like1.jpeg',
// 						name:'BASILUR Chinese White Tea Papierverpackung 100g',
// 						price:6.22
// 					},
// 					{
// 						id:2,
// 						imgUrl:'./images/like2.jpeg',
// 						name:'Ronnefeldt Pu-Erh Schwarzer Tee 1250 g',
// 						price:79
// 					},
// 					{
// 						id:3,
// 						imgUrl:'./images/like3.jpeg',
// 						name:'Purasana Pu-Erh Fatburner Tee 20 St Filterbeutel',
// 						price:3.87
// 					},
// 					{
// 						id:4,
// 						imgUrl:'./images/like4.jpeg',
// 						name:'RICHARD "HAVE A SPARKLING NEW YEAR!", Loose leaf black tea, 80 g',
// 						price:9.99
// 					}
					
// 				]
// 			}
			
// 		]
// 	})
// });
// //black tea的数据
// router.get('/api/index_list/1/data/1', function(req, res, next) {
// 	res.send({
// 		code:0,
// 		data:[
// 			{
// 				id:0,
// 				type:'adList',
// 				data:[
// 					{
// 						id:1,
// 						imgUrl:'./images/blacktea.jpeg'
// 					}
// 					// {
// 					// 	id:2,
// 					// 	imgUrl:'./images/blacktea.jpeg'
// 					// }
// 				]
// 			},
// 			{
// 				id:1,
// 				type:'recommendList',
// 				data:[
// 					{
// 						id:1,
// 						imgUrl:'./images/recommend_b1.jpeg',
// 						name:'Royal Love, flavoured loose leaf black tea 80g',
// 						content:'Schwarzer Tee mit aromatisierten Blättern',
// 						price:2.99
// 					},
// 					{
// 						id:2,
// 						imgUrl:'./images/recommend_b2.jpeg',
// 						name:'Hampstead Tea Black Tea Selection, Aufgussbeutel, 20 x 2 g',
// 						content:'Mit 4 verschiedenen Schwarz-Tee Sorten',
// 						price:2.99
// 					},
// 					{
// 						id:3,
// 						imgUrl:'./images/recommend_b3.jpeg',
// 						name:'Discovery Collection Orangery of Lady Grey 100g Loose Tea',
// 						content:'Schwarzer Tee mit Zitrusaroma.',
// 						price:6.89
// 					},
					
// 					{
// 						id:4,
// 						imgUrl:'./images/recommend2.jpeg',
// 						name:'Milch Oolong Tee Hohe Qualität 250g',
// 						content:'100% Natural Green Food',
// 						price:13.51
// 					}
// 				]
// 			},
// 			{
// 				id:2,
// 				type:'likeList',
// 				data:[
// 					{
// 						id:1,
// 						imgUrl:'./images/like1.jpeg',
// 						name:'BASILUR Chinese White Tea Papierverpackung 100g',
// 						price:6.22
// 					},
// 					{
// 						id:2,
// 						imgUrl:'./images/like2.jpeg',
// 						name:'Ronnefeldt Pu-Erh Schwarzer Tee 1250 g',
// 						price:79
// 					},
// 					{
// 						id:3,
// 						imgUrl:'./images/like3.jpeg',
// 						name:'Purasana Pu-Erh Fatburner Tee 20 St Filterbeutel',
// 						price:3.87
// 					},
// 					{
// 						id:4,
// 						imgUrl:'./images/like4.jpeg',
// 						name:'RICHARD "HAVE A SPARKLING NEW YEAR!", Loose leaf black tea, 80 g',
// 						price:9.99
// 					}
// 				]
// 			}
			
// 		]
// 	})
// });
// //首页推荐的数据
// router.get('/api/index_list/0/data/1', function(req, res, next) {
// 	res.send({
// 		code:0,
// 		data:{
// 			tabsItems: [
// 				{ id:'0', title: 'Recommend' },
// 				{ id:'1', title: 'Black Tea'},
// 				{ id:'2', title: 'Green Tea' },
// 				{ id:'3', title: 'Oolong Tea'}, //, badge: 22
// 				{ id:'4', title: 'White Tea' },
// 				{ id:'5', title: 'Pu-erh' },
// 				{ id:'6', title: 'Yellow Tea' },
// 				{ id:'7', title: 'Dark Tea' },
// 			],
// 			data:[
// 				//这是swiper
// 				{
// 					id:0,
// 					type:'swiperList',
// 					data:[
// 						{id:1,imgUrl:'./images/swiper1.jpeg'},
// 						{id:2,imgUrl:'./images/swiper2.jpeg'},
// 						{id:3,imgUrl:'./images/swiper3.jpeg'}
// 					]
// 				},
// 				//这是icons
// 				{
// 					id:1,
// 					type:'iconsList',
// 					data:[
// 						{
// 							id:1,
// 							title:'Tee zum Selbsttrinken',
// 							imgUrl:'./images/icons1.png'
// 						},
// 						{
// 							id:2,
// 							title:'Teezubehör',
// 							imgUrl:'./images/icons2.png'
// 						},
// 						{
// 							id:3,
// 							title:'Tee Geschenkbox',
// 							imgUrl:'./images/icons3.png'
// 						},
// 						{
// 							id:4,
// 							title:'Vorteile erhalten',
// 							imgUrl:'./images/icons4.png'
// 						},
// 						{
// 							id:5,
// 							title:'Quellenprüfung',
// 							imgUrl:'./images/icons5.png'
// 						}
// 					]
// 				},
// 				//爆款推荐
// 				{
// 					id:2,
// 					type:'recommendList',
// 					data:[
// 						{
// 							id:1,
// 							imgUrl:'./images/recommend1.jpeg',
// 							name:'Long Jing Grüner Tee Green Tea 125g',
// 							content:'aus der HangZhou, China (Frühjahrsernte 2022)',
// 							price:24.99
// 						},
// 						{
// 							id:2,
// 							imgUrl:'./images/recommend2.jpeg',
// 							name:'Milch Oolong Tee Hohe Qualität 250g',
// 							content:'100% Natural Green Food',
// 							price:13.51
// 						},
// 						{
// 							id:3,
// 							imgUrl:'./images/recommend_b2.jpeg',
// 							name:'Hampstead Tea Black Tea Selection, Aufgussbeutel, 20 x 2 g',
// 							content:'Mit 4 verschiedenen Schwarz-Tee Sorten',
// 							price:2.99
// 						},
// 						{
// 							id:4,
// 							imgUrl:'./images/recommend_b3.jpeg',
// 							name:'Discovery Collection Orangery of Lady Grey 100g Loose Tea',
// 							content:'Schwarzer Tee mit Zitrusaroma.',
// 							price:6.89
// 						}
// 					]
// 				},
// 				//猜你喜欢
// 				{
// 					id:3,
// 					type:'likeList',
// 					data:[
// 						{
// 							id:1,
// 							imgUrl:'./images/like1.jpeg',
// 							name:'BASILUR Chinese White Tea Papierverpackung 100g',
// 							price:6.22
// 						},
// 						{
// 							id:2,
// 							imgUrl:'./images/like2.jpeg',
// 							name:'Ronnefeldt Pu-Erh Schwarzer Tee 1250 g',
// 							price:79
// 						},
// 						{
// 							id:3,
// 							imgUrl:'./images/like3.jpeg',
// 							name:'Purasana Pu-Erh Fatburner Tee 20 St Filterbeutel',
// 							price:3.87
// 						},
// 						{
// 							id:4,
// 							imgUrl:'./images/like4.jpeg',
// 							name:'RICHARD "HAVE A SPARKLING NEW YEAR!", Loose leaf black tea, 80 g',
// 							price:9.99
// 						}
// 					]
// 				}
				
// 			]
// 		}
// 	})
// });

// //oolong的数据
// router.get('/api/index_list/3/data/1', function(req, res, next) {
// 	res.send({
// 		code:0,
// 		data:[
// 			{
// 				id:0,
// 				type:'adList',
// 				data:[
// 					{
// 						id:1,
// 						imgUrl:'./images/oolongtea.jpeg'
// 					}
					
// 				]
// 			},
// 			{
// 				id:1,
// 				type:'recommendList',
// 				data:[
// 					{
// 						id:1,
// 						imgUrl:'./images/recommend1.jpeg',
// 						name:'Long Jing Grüner Tee Green Tea 125g',
// 						content:'aus der HangZhou, China (Frühjahrsernte 2022)',
// 						price:24.99
// 					},
// 					{
// 						id:2,
// 						imgUrl:'./images/recommend_g1.jpeg',
// 						name:'Bio-Karigane vom Premium Gyokuro 100g',
// 						content:'1. Ernte, Top-Region Shibushi, Blend aus Yabukita, Okumidori und Saemidori, vollbeschattet',
// 						price:10.90
// 					},
// 					{
// 						id:3,
// 						imgUrl:'./images/recommend_g2.jpeg',
// 						name:'Royal Green Teas 5 packs',
// 						content:'Entspannen Sie sich und machen Sie Ihren Kopf frei mit dieser köstlichen grünen Kollektion',
// 						price:15.99
// 					}
// 				]
// 			},
// 			{
// 				id:2,
// 				type:'likeList',
// 				data:[
// 					{
// 						id:1,
// 						imgUrl:'./images/like1.jpeg',
// 						name:'BASILUR Chinese White Tea Papierverpackung 100g',
// 						price:6.22
// 					},
// 					{
// 						id:2,
// 						imgUrl:'./images/like2.jpeg',
// 						name:'Ronnefeldt Pu-Erh Schwarzer Tee 1250 g',
// 						price:79
// 					},
// 					{
// 						id:3,
// 						imgUrl:'./images/like3.jpeg',
// 						name:'Purasana Pu-Erh Fatburner Tee 20 St Filterbeutel',
// 						price:3.87
// 					},
// 					{
// 						id:4,
// 						imgUrl:'./images/like4.jpeg',
// 						name:'RICHARD "HAVE A SPARKLING NEW YEAR!", Loose leaf black tea, 80 g',
// 						price:9.99
// 					}
					
// 				]
// 			}
			
// 		]
// 	})
// });

// //whitetea的数据
// router.get('/api/index_list/4/data/1', function(req, res, next) {
// 	res.send({
// 		code:0,
// 		data:[
// 			{
// 				id:0,
// 				type:'adList',
// 				data:[
// 					{
// 						id:1,
// 						imgUrl:'./images/whitetea.jpeg'
// 					}
					
// 				]
// 			},
// 			{
// 				id:1,
// 				type:'recommendList',
// 				data:[
// 					{
// 						id:1,
// 						imgUrl:'./images/recommend1.jpeg',
// 						name:'Long Jing Grüner Tee Green Tea 125g',
// 						content:'aus der HangZhou, China (Frühjahrsernte 2022)',
// 						price:24.99
// 					},
// 					{
// 						id:2,
// 						imgUrl:'./images/recommend_g1.jpeg',
// 						name:'Bio-Karigane vom Premium Gyokuro 100g',
// 						content:'1. Ernte, Top-Region Shibushi, Blend aus Yabukita, Okumidori und Saemidori, vollbeschattet',
// 						price:10.90
// 					},
// 					{
// 						id:3,
// 						imgUrl:'./images/recommend_g2.jpeg',
// 						name:'Royal Green Teas 5 packs',
// 						content:'Entspannen Sie sich und machen Sie Ihren Kopf frei mit dieser köstlichen grünen Kollektion',
// 						price:15.99
// 					}
// 				]
// 			},
// 			{
// 				id:2,
// 				type:'likeList',
// 				data:[
// 					{
// 						id:1,
// 						imgUrl:'./images/like1.jpeg',
// 						name:'BASILUR Chinese White Tea Papierverpackung 100g',
// 						price:6.22
// 					},
// 					{
// 						id:2,
// 						imgUrl:'./images/like2.jpeg',
// 						name:'Ronnefeldt Pu-Erh Schwarzer Tee 1250 g',
// 						price:79
// 					},
// 					{
// 						id:3,
// 						imgUrl:'./images/like3.jpeg',
// 						name:'Purasana Pu-Erh Fatburner Tee 20 St Filterbeutel',
// 						price:3.87
// 					},
// 					{
// 						id:4,
// 						imgUrl:'./images/like4.jpeg',
// 						name:'RICHARD "HAVE A SPARKLING NEW YEAR!", Loose leaf black tea, 80 g',
// 						price:9.99
// 					}
					
// 				]
// 			}
			
// 		]
// 	})
// });
// //pu-erh的数据
// router.get('/api/index_list/5/data/1', function(req, res, next) {
// 	res.send({
// 		code:0,
// 		data:[
// 			{
// 				id:0,
// 				type:'adList',
// 				data:[
// 					{
// 						id:1,
// 						imgUrl:'./images/greentea.jpeg'
// 					}
					
// 				]
// 			},
// 			{
// 				id:1,
// 				type:'recommendList',
// 				data:[
// 					{
// 						id:1,
// 						imgUrl:'./images/recommend1.jpeg',
// 						name:'Long Jing Grüner Tee Green Tea 125g',
// 						content:'aus der HangZhou, China (Frühjahrsernte 2022)',
// 						price:24.99
// 					},
// 					{
// 						id:2,
// 						imgUrl:'./images/recommend_g1.jpeg',
// 						name:'Bio-Karigane vom Premium Gyokuro 100g',
// 						content:'1. Ernte, Top-Region Shibushi, Blend aus Yabukita, Okumidori und Saemidori, vollbeschattet',
// 						price:10.90
// 					},
// 					{
// 						id:3,
// 						imgUrl:'./images/recommend_g2.jpeg',
// 						name:'Royal Green Teas 5 packs',
// 						content:'Entspannen Sie sich und machen Sie Ihren Kopf frei mit dieser köstlichen grünen Kollektion',
// 						price:15.99
// 					}
// 				]
// 			},
// 			{
// 				id:2,
// 				type:'likeList',
// 				data:[
// 					{
// 						id:1,
// 						imgUrl:'./images/like1.jpeg',
// 						name:'BASILUR Chinese White Tea Papierverpackung 100g',
// 						price:6.22
// 					},
// 					{
// 						id:2,
// 						imgUrl:'./images/like2.jpeg',
// 						name:'Ronnefeldt Pu-Erh Schwarzer Tee 1250 g',
// 						price:79
// 					},
// 					{
// 						id:3,
// 						imgUrl:'./images/like3.jpeg',
// 						name:'Purasana Pu-Erh Fatburner Tee 20 St Filterbeutel',
// 						price:3.87
// 					},
// 					{
// 						id:4,
// 						imgUrl:'./images/like4.jpeg',
// 						name:'RICHARD "HAVE A SPARKLING NEW YEAR!", Loose leaf black tea, 80 g',
// 						price:9.99
// 					}
					
// 				]
// 			}
			
// 		]
// 	})
// })

module.exports = router;
