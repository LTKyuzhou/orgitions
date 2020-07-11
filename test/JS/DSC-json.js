$(function() {
	//	商品导航信息生成
	var boxDatas = [{
		"iconClass": "icon iconfont icon-dianshi",
		"tfont": "家用电器",
		"bfont": "大家电    生活电器"
	}, {
		"iconClass": "icon iconfont icon-xiangji",
		"tfont": "手机  数码  通信",
		"bfont": "智能设备  数码配件"
	}, {
		"iconClass": "icon iconfont icon-computer_icon",
		"tfont": "电脑  办公",
		"bfont": "服务产品   电脑整机"
	}, {
		"iconClass": "icon iconfont icon-shafa",
		"tfont": "家居  家具  家装  厨具",
		"bfont": "厨具  家装建材"
	}, {
		"iconClass": "icon iconfont icon-yifu",
		"tfont": "男装  女装  内衣",
		"bfont": "男装  女装"
	}, {
		"iconClass": "icon iconfont icon-xiezi",
		"tfont": "鞋靴  箱包  钟表  奢侈品",
		"bfont": "奢侈品  功能箱包"
	}, {
		"iconClass": "icon iconfont icon-huazhuangpin-yanying",
		"tfont": "个人化妆  清洁用品",
		"bfont": "面部护肤  洗发护发"
	}]

	var oHeadNav = document.getElementById("headnav");
	var oHeadNav2 = document.getElementById("headnav2");

	function add1Fn(name) {
		for(var i = 0; i < boxDatas.length; i++) {
			var oLi = document.createElement("li");
			var oDiv = document.createElement("div");
			var oI = document.createElement("i");
			var oSpan = document.createElement("span");
			var oA = document.createElement("a");
			var oP = document.createElement("p")
			name.appendChild(oLi);
			oLi.appendChild(oDiv);
			oDiv.appendChild(oI);
			oDiv.appendChild(oSpan);
			oDiv.appendChild(oP);
			oSpan.appendChild(oA);
			oA.innerHTML = boxDatas[i].tfont;
			oI.className = boxDatas[i].iconClass;
			oP.innerHTML = boxDatas[i].bfont;
		}
	}
	add1Fn(oHeadNav)
	add1Fn(oHeadNav2)

	//	具体商品信息生成
	var poxDatas = [
		["品牌日", "家电城", "智能生活馆", "京东净化馆", "京东帮服务店", "值得买精选"],
		["苹果", "小米", "三星", "OPPO", "	VIVO", "华为", "魅族"],
		["智能生活馆", "品牌日", "家电城", "智能生活馆", "京东净化馆", "京东帮服务店"],
		["手机频道", "网上营业厅", "配件城", "影像Club", "手机社区", "以旧换新"],
		["品牌日", "值得买精选", "智能生活馆", "京东净化馆", "京东帮服务店", "值得买精选"],
		["男装", "女装", "内衣", "国际品牌"],
		["清洁用品", "美妆商城", "官方旗舰店", "美妆特卖", "妆比社", "全球购美妆"],
	]
	var poxList1 = [
		["大家电", "生活电器", "厨房电器", "个人健康", "五金家装"],
		["智能设备", "数码配件", "手机通讯", "运营商", "手机配件", "摄影摄像", "时尚影音"],
		["服务产品", "电脑整机", "电脑配件", "外设产品", "网络产品", "办公打印"],
		["厨具", "家装建材", "家纺", "家具", "灯具", "生活日用"],
		["女装", "男装", "服饰配件", "内衣", "运动户外"],
		["奢侈品", "功能箱包", "流行男鞋", "时尚女鞋", "潮流女包", "精品男包", "钟表"],
		["面部护肤", "洗发护发", "", "身体护肤", "口腔护理", "香水彩妆", "清洁用品"]
	] //数组个数为里边几个标题商品
	var poxList2 = [
		[
			["平板", "电视", "空调", "冰箱", "洗衣机", "家庭影院", "DVD", "迷你音响", "热水器", "冷吧/冰柜"],
			["电风扇", "冷风扇", "净化器", "加湿器", "扫地机器人", "吸尘器", "插座", "电话机", "饮水机", "取暖电器", "净水设备", "干衣机", "收音机/录音机", "电器开关"],
			["电饭煲", "电压力锅", "豆浆机", "面包机", "咖啡机", "微波炉", "料理/榨汁机", "电烤箱", "电磁炉", "电饼铛/烧火盘", "煮蛋器", "酸奶机", "电水壶/热水瓶", "电饭盒", "其他厨房电器"],
			["按摩椅", "剃须刀", "脱毛器", "口腔护理", "电吹风", "美容器", "理发器", "按摩器", "足浴盆", "血压计", "健康秤/厨房秤", "血糖计", "计步器", "其他健康电器"],
			["电动工具", "手动工具", "仪器仪表", "浴霸/排气扇", "灯具LED灯", "洁身器", "水槽", "龙头", "沐浴花洒", "厨卫五金", "家具", "五金", "门铃", "监控安防"]
		],
		[
			["平板", "电视", "空调", "冰箱", "洗衣机", "家庭影院", "DVD", "迷你音响", "热水器", "冷吧/冰柜"],
			["按摩椅", "剃须刀", "脱毛器", "口腔护理", "电吹风", "美容器", "理发器", "按摩器", "足浴盆", "血压计", "健康秤/厨房秤", "血糖计", "计步器", "其他健康电器"],
			["电动工具", "手动工具", "仪器仪表", "浴霸/排气扇", "灯具LED灯", "洁身器", "水槽", "龙头", "沐浴花洒", "厨卫五金", "家具", "五金", "门铃", "监控安防"],
			["智能手环", "智能手表", "智能眼镜", "运动跟踪器", '健康监测智能配饰', "智能家居体感车", "其他配件"],
			["笔记本", "超级本", "游戏本", "平板电脑", "平板电脑配件", "台式机", "笔记本", "配件服务器/工作站"],
			["平板电脑配件", "台式机", "笔记本", "配件服务器/工作站"],
			["智能眼镜", "运动跟踪器", '健康监测智能配饰', "智能家居体感车", "其他配件"]
		],
		[
			["智能手环", "智能手表", "智能眼镜", "运动跟踪器", '健康监测智能配饰', "智能家居体感车", "其他配件"],
			["笔记本", "超级本", "游戏本", "平板电脑", "平板电脑配件", "台式机", "笔记本", "配件服务器/工作站"],
			["平板电脑配件", "台式机", "笔记本", "配件服务器/工作站"],
			["平板", "电视", "空调", "冰箱", "洗衣机", "家庭影院", "DVD", "迷你音响", "热水器", "冷吧/冰柜"],
			["智能手环", "智能手表", "智能眼镜", "运动跟踪器", '健康监测智能配饰', "智能家居体感车", "其他配件", "游戏本", "平板电脑", "平板电脑配件"],
			["笔记本", "超级本", "游戏本", "平板电脑", "平板电脑配件", "台式机", "笔记本", "配件服务器/工作站"],
			["平板电视", "空调", "冰箱", "洗衣机", "DVD"]
		],
		[
			["笔记本", "超级本", "游戏本", "平板电脑", "平板电脑配件", "台式机", "笔记本", "配件服务器/工作站"],
			["平板电脑配件", "台式机", "笔记本", "配件服务器/工作站"],
			["平板", "电视", "空调", "冰箱", "洗衣机", "家庭影院", "DVD", "迷你音响", "热水器", "冷吧/冰柜"],
			["智能手环", "智能手表", "智能眼镜", "运动跟踪器", '健康监测智能配饰', "智能家居体感车", "其他配件"],
			["笔记本", "超级本", "游戏本", "平板电脑", "平板电脑配件", "台式机", "笔记本", "配件服务器/工作站"],
			["平板电视", "空调", "冰箱", "洗衣机", "DVD"],
		],
		[
			["平板", "电视", "空调", "冰箱", "洗衣机", "家庭影院", "DVD", "迷你音响", "热水器", "冷吧/冰柜"],
			["智能手环", "智能手表", "智能眼镜", "运动跟踪器", '健康监测智能配饰', "智能家居体感车", "其他配件"],
			["笔记本", "超级本", "游戏本", "平板电脑", "平板电脑配件", "台式机", "笔记本", "配件服务器/工作站"],
			["平板电视", "空调", "冰箱", "洗衣机", "DVD"],
			["平板", "电视", "空调", "冰箱", "洗衣机", "家庭影院"],
			["平板电视", "空调", "冰箱", "洗衣机", "DVD"],
			["智能手表", "智能眼镜", "运动跟踪器", '健康监测智能配饰']
		],
		[
			["智能手环", "智能手表", "智能眼镜", "运动跟踪器", '健康监测智能配饰', "智能家居体感车", "其他配件"],
			["笔记本", "超级本", "游戏本", "平板电脑", "平板电脑配件", "台式机", "笔记本", "配件服务器/工作站"],
			["平板电视", "空调", "冰箱", "洗衣机", "DVD"],
			["平板", "电视", "空调", "冰箱", "洗衣机", "家庭影院"],
			["平板", "电视", "空调", "冰箱", "洗衣机", "家庭影院", "DVD", "迷你音响", "热水器", "冷吧/冰柜"],
			["智能手环", "智能手表", "智能眼镜", "运动跟踪器", '健康监测智能配饰', "智能家居体感车", "超级本", "游戏本", "平板电脑", "平板电脑配件", "台式机", "笔记本", "配件服务器/工作站", "其他配件"],
			["笔记本", "超级本", "游戏本", "平板电脑", "平板电脑配件", "台式机", "笔记本", "配件服务器/工作站"],
		],
		[
			["儿童手环", "智能手表", "智能眼镜", "运动跟踪器", '健康监测智能配饰', "智能家居体感车", "其他配件"],
			["笔记本", "超级本", "游戏本", "平板电脑", "平板电脑配件", "台式机", "笔记本", "配件服务器/工作站"],
			["平板电视", "空调", "冰箱", "洗衣机", "DVD"],
			["手机", "电视", "空调", "冰箱", "洗衣机", "家庭影院"],
			["平板", "电视", "空调", "冰箱", "洗衣机", "家庭影院", "DVD", "迷你音响", "热水器", "冷吧/冰柜"],
			["智能手环", "智能手表", "智能眼镜", "运动跟踪器", '健康监测智能配饰', "智能家居体感车", "其他配件"],
			["笔记本", "超级本", "游戏本", "平板电脑", "平板电脑配件", "台式机", "笔记本", "配件服务器/工作站"],
		]
	]
	var poxList3 = [
		["DSCmallimg/1490039286075654492.jpg", "DSCmallimg/1490039286075654493.jpg", "DSCmallimg/1490039286075654494.jpg", "DSCmallimg/1490039286075654495.jpg", "DSCmallimg/1490039286075654496.jpg", "DSCmallimg/1490039286075654497.jpg", "DSCmallimg/1490039286075654498.jpg", "DSCmallimg/1490039286075654499.jpg", "DSCmallimg/14900392860756544910.jpg", "DSCmallimg/14900392860756544911.jpg", "DSCmallimg/14900392860756544912.jpg", "DSCmallimg/14900392860756544913.jpg", "DSCmallimg/14900392860756544914.jpg", "DSCmallimg/1490039286075654498.jpg", "DSCmallimg/1490039286075654490.jpg", "DSCmallimg/1490039286075654493.jpg", "DSCmallimg/1490039286075654495.jpg", "DSCmallimg/1490039286075654496.jpg", "DSCmallimg/1490039286075654497.jpg", "DSCmallimg/1490039286075654498.jpg", "DSCmallimg/1490075080126940602.jpg"],
		["DSCmallimg/1490039286075654494.jpg", "DSCmallimg/1490039286075654495.jpg", "DSCmallimg/1490039286075654490.jpg", "DSCmallimg/1490039286075654497.jpg", "DSCmallimg/1490039286075654498.jpg", "DSCmallimg/1490039286075654499.jpg", "DSCmallimg/1490039286075654492.jpg", "DSCmallimg/14900392860756544911.jpg", "DSCmallimg/14900392860756544912.jpg", "DSCmallimg/1490039286075654496.jpg", "DSCmallimg/1490075108722576375.jpg"],
		["DSCmallimg/1490039286075654490.jpg", "DSCmallimg/1490039286075654491.jpg", "DSCmallimg/1490039286075654492.jpg", "DSCmallimg/1490039286075654493.jpg", "DSCmallimg/1490039286075654494.jpg", "DSCmallimg/1490039286075654495.jpg", "DSCmallimg/1490039286075654496.jpg", "DSCmallimg/1490039286075654497.jpg", "DSCmallimg/1490039286075654498.jpg", "DSCmallimg/1490073692774466710.jpg"],
		["DSCmallimg/1490039286075654490.jpg", "DSCmallimg/1490039286075654491.jpg", "DSCmallimg/1490039286075654492.jpg", "DSCmallimg/1490039286075654493.jpg", "DSCmallimg/1490039286075654494.jpg", "DSCmallimg/1490039286075654495.jpg", "DSCmallimg/1490073240845049320.jpg"],
		["DSCmallimg/1490039286075654493.jpg", "DSCmallimg/1490039286075654494.jpg", "DSCmallimg/1490039286075654495.jpg", "DSCmallimg/1490073692774466710.jpg", "DSCmallimg/14900392860756544914.jpg", "DSCmallimg/1490039286075654498.jpg", "DSCmallimg/1490039286075654490.jpg", "DSCmallimg/1490039286075654493.jpg", "DSCmallimg/1490039286075654495.jpg", "DSCmallimg/1490039286075654496.jpg", "DSCmallimg/1490039286075654497.jpg", "DSCmallimg/1490039286075654498.jpg", "DSCmallimg/1490039286075654498.jpg", "DSCmallimg/1490039286075654499.jpg", "DSCmallimg/14900392860756544910.jpg", "DSCmallimg/14900392860756544911.jpg", "DSCmallimg/14900392860756544912.jpg", "DSCmallimg/14900392860756544913.jpg", "DSCmallimg/14900392860756544914.jpg", "DSCmallimg/14900392860756544915.jpg", "DSCmallimg/1490073661335207841.jpg"],
		["DSCmallimg/14900392860756544915.jpg", "DSCmallimg/1490073661335207841.jpg", "DSCmallimg/1490039286075654490.jpg", "DSCmallimg/1490039286075654491.jpg", "DSCmallimg/1490039286075654492.jpg", "DSCmallimg/1490039286075654493.jpg", "DSCmallimg/1490039286075654494.jpg", "DSCmallimg/1490039286075654495.jpg", "DSCmallimg/1490039286075654496.jpg", "DSCmallimg/1490039286075654497.jpg", "DSCmallimg/1490039286075654498.jpg", "DSCmallimg/1490039286075654499.jpg", "DSCmallimg/14900392860756544910.jpg", "DSCmallimg/14900392860756544911.jpg", "DSCmallimg/14900392860756544912.jpg", "DSCmallimg/14900392860756544913.jpg", "DSCmallimg/14900392860756544914.jpg", "DSCmallimg/14900392860756544915.jpg", "DSCmallimg/1490073009638652059.jpg"],
		["DSCmallimg/1490039286075654490.jpg", "DSCmallimg/1490039286075654491.jpg", "DSCmallimg/1490039286075654492.jpg", "DSCmallimg/1490039286075654493.jpg", "DSCmallimg/1490039286075654494.jpg", "DSCmallimg/1490039286075654495.jpg", "DSCmallimg/1490039286075654496.jpg", "DSCmallimg/1490039286075654497.jpg", "DSCmallimg/1490039286075654498.jpg", "DSCmallimg/1490039286075654499.jpg", "DSCmallimg/14900392860756544912.jpg", "DSCmallimg/14900392860756544913.jpg", "DSCmallimg/14900392860756544914.jpg", "DSCmallimg/14900392860756544915.jpg", "DSCmallimg/1490075385239594909.jpg"]
	]

	var oPox1 = document.getElementById("pox1");
	var oPox2 = document.getElementById("pox2");

	function add2Fn(name) {
		for(var i = 0; i < 7; i++) {
			var oUl = document.createElement("ul");

			for(var a = 0; a < 2; a++) {
				var oLi = document.createElement("li");
				oUl.appendChild(oLi);
			}
			oUl.firstElementChild.id = "lil"
			var oLil = oUl.getElementsByTagName("li")[0];
			oNav = document.createElement("nav");
			oLil.appendChild(oNav);
			for(var b = 0; b < poxDatas[i].length; b++) {
				var oDiv = document.createElement("div");
				oDiv.innerHTML = poxDatas[i][b];
				oNav.appendChild(oDiv);
			}
			for(var c = 0; c < poxList1[i].length; c++) {
				oDivs = document.createElement("div");
				for(var d = 0; d < 2; d++) {
					oDiv2 = document.createElement("div");
					oDivs.appendChild(oDiv2);
				}
				oDivs.firstElementChild.innerHTML = poxList1[i][c];
				for(var e = 0; e < poxList2[i][c].length; e++) {
					oDiv3 = document.createElement("div");
					oDivs.lastElementChild.appendChild(oDiv3);
					oDiv3.innerHTML = poxList2[i][c][e];
				}
				oLil.appendChild(oDivs);
			}
			//		第二个li
			oUl.lastElementChild.id = "lir"
			var oLir = oUl.getElementsByTagName("li")[1];
			oDiv4 = document.createElement("div");
			oLir.appendChild(oDiv4);
			for(var f = 0; f < poxList3[i].length; f++) {
				oDiv5 = document.createElement("div");
				oDiv4.appendChild(oDiv5);
				oImg = document.createElement("img");
				oDiv5.appendChild(oImg);
				oImg.src = poxList3[i][f];
			}
			name.appendChild(oUl);
		}
	}
	add2Fn(oPox1)
	add2Fn(oPox2)

	//地图数据
	var oAddsCapitial = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"]
	var oAddressData = [
		["安庆", "安顺", "安阳", "鞍山", "阿拉善盟", "安康", "阿坝", "阿里", "阿克苏", "阿拉尔", "澳门"],
		["蚌埠", "亳州", "北京", "白银", "百色", "北海", "毕节", "白沙", "保亭", "保定", "白城", "白山", "本溪", "巴彦淖尔盟", "包头", "滨州", "宝鸡", "巴中", "巴音郭楞", "博尔塔拉", "保山"],
		["巢湖", "池州", "滁州", "潮州", "崇左", "昌江", "澄迈县", "沧州", "承德", "长沙", "常德", "郴州", "长春", "常州", "朝阳", "赤峰", "长治", "成都", "昌都", "昌吉", "楚雄", "重庆"],
		["安庆", "安顺", "安阳", "鞍山", "阿拉善盟", "安康", "阿坝", "阿里", "阿克苏", "阿拉尔", "澳门"],
		["鄂州", "恩施", "鄂尔多斯"],
		["安庆", "安顺", "安阳", "鞍山", "阿拉善盟", "安康", "阿坝", "阿里", "阿克苏", "阿拉尔", "澳门"],
		["蚌埠", "亳州", "北京", "白银", "百色", "北海", "毕节", "白沙", "保亭", "保定", "白城", "白山", "本溪", "巴彦淖尔盟", "包头", "滨州", "宝鸡", "巴中", "巴音郭楞", "博尔塔拉", "保山"],
		["巢湖", "池州", "滁州", "潮州", "崇左", "昌江", "澄迈县", "沧州", "承德", "长沙", "常德", "郴州", "长春", "常州", "朝阳", "赤峰", "长治", "成都", "昌都", "昌吉", "楚雄", "重庆"],
		["鄂州", "恩施", "鄂尔多斯"],
		["安庆", "安顺", "安阳", "鞍山", "阿拉善盟", "安康", "阿坝", "阿里", "阿克苏", "阿拉尔", "澳门"],
		["蚌埠", "亳州", "北京", "白银", "百色", "北海", "毕节", "白沙", "保亭", "保定", "白城", "白山", "本溪", "巴彦淖尔盟", "包头", "滨州", "宝鸡", "巴中", "巴音郭楞", "博尔塔拉", "保山"],
		["巢湖", "池州", "滁州", "潮州", "崇左", "昌江", "澄迈县", "沧州", "承德", "长沙", "常德", "郴州", "长春", "常州", "朝阳", "赤峰", "长治", "成都", "昌都", "昌吉", "楚雄", "重庆"],
		["鄂州", "恩施", "鄂尔多斯"],
		["安庆", "安顺", "安阳", "鞍山", "阿拉善盟", "安康", "阿坝", "阿里", "阿克苏", "阿拉尔", "澳门"],
		["蚌埠", "亳州", "北京", "白银", "百色", "北海", "毕节", "白沙", "保亭", "保定", "白城", "白山", "本溪", "巴彦淖尔盟", "包头", "滨州", "宝鸡", "巴中", "巴音郭楞", "博尔塔拉", "保山"],
		["鄂州", "恩施", "鄂尔多斯"],
		["巢湖", "池州", "滁州", "潮州", "崇左", "昌江", "澄迈县", "沧州", "承德", "长沙", "常德", "郴州", "长春", "常州", "朝阳", "赤峰", "长治", "成都", "昌都", "昌吉", "楚雄", "重庆"],
		["鄂州", "恩施", "鄂尔多斯"],
		["安庆", "安顺", "安阳", "鞍山", "阿拉善盟", "安康", "阿坝", "阿里", "阿克苏", "阿拉尔", "澳门"],
		["蚌埠", "亳州", "北京", "白银", "百色", "北海", "毕节", "白沙", "保亭", "保定", "白城", "白山", "本溪", "巴彦淖尔盟", "包头", "滨州", "宝鸡", "巴中", "巴音郭楞", "博尔塔拉", "保山"],
		["巢湖", "池州", "滁州", "潮州", "崇左", "昌江", "澄迈县", "沧州", "承德", "长沙", "常德", "郴州", "长春", "常州", "朝阳", "赤峰", "长治", "成都", "昌都", "昌吉", "楚雄", "重庆"],
		["鄂州", "恩施", "鄂尔多斯"]
	]
	var oAdds = document.getElementById("adds");
	var oAddsLis = oAdds.getElementsByTagName("li");
	for(var i = 0; i < oAddsCapitial.length; i++) {
		oAddsLis[0].innerHTML += "<span>" + oAddsCapitial[i] + "</span>"
	}
	for(var i = 0; i < oAddressData.length; i++) {
		var oDiv = document.createElement("div");
		oDiv.className = "floor1";
		var oDivss = document.createElement("div")
		oDiv.appendChild(oDivss)
		var oDivsss = document.createElement("div")
		oDiv.insertBefore(oDivsss, oDivss);
		oDivsss.innerHTML = oAddsCapitial[i];
		for(var j = 0; j < oAddressData[i].length; j++) {
			var oDivs = document.createElement("div");
			oDivs.innerHTML = oAddressData[i][j];
			oDivss.appendChild(oDivs);
		}

		oAddsLis[1].appendChild(oDiv);
	}
	$(".floor1").wrapAll("<div></div>")
	$(".floor1").parent().addClass("total")

	//字母导航

	$(".nav1").find("span").mouseover(function() {
		var oTop = $(".floor1")[$(this).index()].offsetTop;
		//console.log(oTop);
		$(".total").css("top", -oTop);
		//		animate({
		//			"scrollTop":oTop
		//		},500)
		//鼠标放上去滑动块跟着动
		var H1 = $(".floor1").parent().innerHeight() - $("#scroll1").innerHeight();
		var H2 = $("#thumb").position().top
		var H3 = $("#scroll1").find("div").position().top;
		var H4 = $("#scrollbar").innerHeight() - $("#thumb").innerHeight();
		var scale2 = H4 / H1;
		H2 = -1 * H3 * scale2;
		oThumb.style.top = H2 + "px";
	})

	//滑动块事件
	var oThumb = document.getElementById("thumb");
	var oScrollbar = document.getElementById("scrollbar");
	oScrollbar.onmousedown = function(event) {
		var e = event || window.event;
		var innerHeight1 = e.clientY - oThumb.offsetTop;
		oScrollbar.onmousemove = function(event) {
			var e = event || window.event;
			var oTop1 = e.clientY - innerHeight1;
			if(oTop1 < 0) {
				oTop1 = 0
			} else if(oTop1 > oScrollbar.offsetHeight - oThumb.offsetHeight) {
				oTop1 = oScrollbar.offsetHeight - oThumb.offsetHeight;
			}

			oThumb.style.top = oTop1 + "px";
			//设置滚动条动  adds里边内容
			var scale = oThumb.offsetTop / (oScrollbar.offsetHeight - oThumb.offsetHeight);
			oH1 = scroll1.firstElementChild.offsetHeight;
			var distance = parseInt(oH1 * scale)
			scroll1.firstElementChild.style.top = -distance + "px";
		}
		oScrollbar.onmouseout = function() {
			oScrollbar.onmousedown = null;
		}
	}
	//滚动块位置随鼠标改变而改变
	var oThumb = document.getElementById("thumb");
	oAdds.onmousewheel = oAdds.onmousewheel = scrollFn

	function scrollFn() {
		var H1 = $(".floor1").parent().innerHeight() - $("#scroll1").innerHeight();
		var H2 = $("#thumb").position().top
		var H3 = $("#scroll1").find("div").position().top;
		var H4 = $("#scrollbar").innerHeight() - $("#thumb").innerHeight();
		var scale2 = H4 / H1;
		H2 = -1 * H3 * scale2;
		oThumb.style.top = H2 + "px";
		//console.log(H2)   
	}
	scrollFn()
	
	var arrbox=[{
		"id":"我的浏览",
		"imgsrc":"DSCmallimg/record.png"
	},{
		"id":"我的收藏",
		"imgsrc":"DSCmallimg/collection.png"
	},{
		"id":"我的订单",
		"imgsrc":"DSCmallimg/order.png"
	},{
		"id":"账号安全",
		"imgsrc":"DSCmallimg/settled.png"
	},{
		"id":"我的分享",
		"imgsrc":"DSCmallimg/wallet.png"
	},{
		"id":"商家入驻",
		"imgsrc":"DSCmallimg/repair.png"
	}]
	
	var oboxBottom=document.getElementById("boxBottom");
	
	for (var i=0;i<arrbox.length;i++) {
		var oDiv=document.createElement("div");
		oboxBottom.appendChild(oDiv)
		var oImg=document.createElement("img");
		oDiv.appendChild(oImg)
		var oP=document.createElement("p");
		oDiv.appendChild(oP);
		oImg.src=arrbox[i].imgsrc;
		oP.innerHTML=arrbox[i].id;
	}
	
//	商品内容
//  年货
    var arrYear=["DSCmallimg/1515953435023649761.png",'DSCmallimg/1515953435162544293.png','DSCmallimg/1515953435545165923.png','DSCmallimg/1515953435777799300.png',"DSCmallimg/1515953435545165923.png"]
    var One=document.getElementById("one")
    for(var i=0;i<5;i++){
    	var oDiv=document.createElement("div")
    	One.appendChild(oDiv)
    	var oImg=document.createElement("img")
    	oDiv.appendChild(oImg)
    	oImg.src=arrYear[i]
    }
	
//	秒杀
    var arrSec=[{
    	    "imgSrc":"DSCmallimg/0_thumb_G_1489100550574.jpg",
    	    "id":"初棉纯色圆领长袖T恤打底衫秋衣女上衣体恤女士修身打底",
    	    "p1":"¥145.00",
    	    "p2":"¥279.59"
    	},{
    		"imgSrc":"DSCmallimg/0_thumb_G_1489102299856.jpg",
    		"id":"初棉纯色圆领长袖T恤打底衫秋衣女上衣体恤女士修身打底",
    	    "p1":"¥533.00",
    	    "p2":"¥450.59"
    	},{
    		"imgSrc":"DSCmallimg/0_thumb_G_1489102753231.jpg",
    		"id":"初棉纯色圆领长袖T恤打底衫秋衣女上衣体恤女士修身打底",
    	    "p1":"¥820.00",
    	    "p2":"¥252.59"
    	},{
    		"imgSrc":"DSCmallimg/0_thumb_G_1489102950633.jpg",
    		"id":"初棉纯色圆领长袖T恤打底衫秋衣女上衣体恤女士修身打底",
    	    "p1":"¥152.00",
    	    "p2":"¥74.59"
    	},{
    		"imgSrc":"DSCmallimg/0_thumb_G_1490205156678.jpg",
    		"id":"初棉纯色圆领长袖T恤打底衫秋衣女上衣体恤女士修身打底",
    	    "p1":"¥522.00",
    	    "p2":"¥201.59"
    	}]
	var Two=document.getElementById("t");
	for(var i=0;i<5;i++){
		var oDiv=document.createElement("div")
	  	Two.appendChild(oDiv)
	  	var oImg=document.createElement("img")
	  	oDiv.appendChild(oImg)
	  	oImg.src=arrSec[i].imgSrc
	  	var oDivs=document.createElement("div")
	  	oDiv.appendChild(oDivs)
	  	oDivs.innerHTML=arrSec[i].id;
	  	var oDivss=document.createElement("div")
	  	oDiv.appendChild(oDivss)
  		var oSpan1=document.createElement("span");
  		oDivss.appendChild(oSpan1)
  		oSpan1.innerHTML=arrSec[i].p1;
	  	var oSpan2=document.createElement("span");
  		oDivss.appendChild(oSpan2)
  		oSpan2.innerHTML=arrSec[i].p2	;
	}
	
	
//	折扣数据
    var arrDis=[
    "DSCmallimg/1515953445396793087.jpg",
    "DSCmallimg/1515953446469633296.jpg",
    "DSCmallimg/1515953447327572638.jpg",
    "DSCmallimg/1515953448824546285.jpg",
    "DSCmallimg/1515953449613212705.jpg",
    "DSCmallimg/1515953450685251947.jpg",
    "DSCmallimg/1515953451810325730.jpg",
    "DSCmallimg/1515953452551121428.jpg",
    "DSCmallimg/1515953453398254994.jpg",
    "DSCmallimg/1515953454232937395.jpg"
    ]
	var oDis=document.getElementById("discount");
	for(var i=0;i<arrDis.length;i++){
		var oDiv=document.createElement("div");
		oDis.appendChild(oDiv)
		var oImg=document.createElement("img");
		oDiv.appendChild(oImg)
		oImg.src=arrDis[i];
	}
	
	var arrDiss=[
    "DSCmallimg/1515953455883586458.jpg",
    "DSCmallimg/1515953456340060955.jpg",
    "DSCmallimg/1515953457540530655.jpg",
    "DSCmallimg/1515953458104335318.jpg",
    ]
	
	var oDiss=document.getElementById("discounts");
	for(var i=0;i<arrDiss.length;i++){
		var oDiv=document.createElement("div");
		oDiss.appendChild(oDiv)
		var oImg=document.createElement("img");
		oDiv.appendChild(oImg)
		oImg.src=arrDiss[i];
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})


