import './account.css'
import './account'
//选项卡
let lis = document.querySelectorAll('.xuancar>li');
let cards = document.querySelectorAll('.cardsneir>div');
// console.log(lis, cards);

//循环每一个选项卡
for (let i = 0; i < lis.length; i++) {
	lis[i].suoYin = i;
	lis[i].addEventListener('click', function() {
		for (let m = 0; m < lis.length; m++) {
			lis[m].classList.remove('actives');
			cards[m].classList.remove('denglude');
		}
		this.classList.add('actives');
		cards[this.suoYin].classList.add('denglude');
	})
}




// 图片验证
(function(window, document) {
	var SliderBar = function(targetDom, options) {
		// 判断是用函数创建的还是用new创建的。这样我们就可以通过MaskShare("dom") 或 new MaskShare("dom")来使用这个插件了  
		if (!(this instanceof SliderBar)) return new SliderBar(targetDom, options);
		// 参数
		this.options = this.extend({
			dataList: []
		}, options);
		// 获取dom
		this.targetDom = document.getElementById(targetDom);
		var dataList = this.options.dataList;
		if (dataList.length > 0) {
			var html = "<div class='slide-box'><div class='slide-img-block'>" +
				"<div class='slide-loading'></div><div class='slide-img-border'>" +
				"<div class='scroll-background slide-top'></div><div class='slide-img-div'>" +
				"<div class='slide-img-nopadding'><img class='slide-img' id='slideImg' src='' />" +
				"<div class='slide-block' id='slideBlock'></div><div class='slide-box-shadow' id='cutBlock'></div></div>" +
				"<div class='scroll-background  slide-img-hint-info' id='slideHintInfo'>" +
				"<div class='slide-img-hint'><div class='scroll-background slide-icon' id='slideIcon'></div>" +
				"<div class='slide-text'><span class='slide-text-type' id='slideType'></span>" +
				"<span class='slide-text-content' id='slideContent'></span></div></div></div></div>" +
				"<div class='scroll-background slide-bottom-refresh' id='refreshBtn' title='更换图片'></div>" +
				"<div class='scroll-background scroll-bar'>" +
				"<div class='scroll-background slide-btn' id='slideBtn'></div>" +
				"<div class='slide-title' id='slideHint'></div></div></div>";
			this.targetDom.innerHTML = html;
			this.slideBtn = document.getElementById("slideBtn"); // 拖拽按钮
			this.refreshBtn = document.getElementById("refreshBtn"); // 换图按钮
			this.slideHint = document.getElementById("slideHint"); // 提示名称
			this.slideImg = document.getElementById("slideImg"); // 图片
			this.cutBlock = document.getElementById("cutBlock"); // 裁剪区域
			this.slideBlock = document.getElementById("slideBlock"); // 裁剪的图片
			this.slideIcon = document.getElementById("slideIcon"); // 正确、失败的图标
			this.slideType = document.getElementById("slideType"); // 正确、失败
			this.slideContent = document.getElementById("slideContent"); // 正确、失败的正文
			this.slideHintInfo = document.getElementById("slideHintInfo"); // 弹出
			this.resultX = 0;
			this.startX = 0;
			this.timer = 0;
			this.startTamp = 0;
			this.endTamp = 0;
			this.x = 0;
			this.imgWidth = 0;
			this.imgHeight = 0;
			this.imgList = [];
			this.isSuccess = true;
			for (var i = 1; i < 6; i++) {
				this.imgList.push(i + ".webp");
			}
		}
		this.init();
	}
	SliderBar.prototype = {
		init: function() {
			this.event();
		},
		extend: function(obj, obj2) {
			for (var k in obj2) {
				obj[k] = obj2[k];
			}
			return obj;
		},
		event: function() {
			var _this = this;
			_this.reToNewImg();
			_this.slideBtn.onmousedown = function(event) {
				_this.mousedown(_this, event);
			}
			_this.refreshBtn.onclick = function() {
				_this.refreshBtnClick(_this);
			}
		},
		refreshBtnClick: function(_this) {
			_this.isSuccess = true;
			_this.slideBlock.style.cssText = "";
			_this.cutBlock.style.cssText = "";
			_this.reToNewImg();
		},
		reToNewImg: function() {
			var _this = this;
			var index = Math.round(Math.random() * 3); // 该方法有等于0 的情况
			// var imgSrc = "../../../public/images/" + _this.imgList[index] + "";
			let imgSrc = "https://t.captcha.qq.com/cap_union_new_getcapbysig?img_index=1&image=0279050000a6e6470000000bb5db0b273606&sess=s0gXDpIEDLuNDNuhTD5DvPfgZjVsc9ClNt_2ltsKVjU2yEDKo9uuMVlwQCH9e5XH5eioKcNEXJ4G3-JSXRSZ7hOXCrGBhGQOsKymnOaSkHio7Sl0hW8LM8My9mZVRNcxoUaAVwWilCfefn6sw4G3AAkev-V-Lk3p-OOBodmRPT7RQCyYRGfXCLwkUvTjF6d5R5RXy8PzDXOzvPzMJ7CB9rCFMM7exPgnDbByPN2kdnJU3iKW3VOYNaVSRLMDJs4sEDO3HSIGubAcFXiSu5MLSozTTwxsDeH-nxn7vo9SdYuhgWFcWpHdcGH0E-4ZP2z7ACVXRBGm0YLv2AS7znEo47Yb7T-XD1DrkMnehNI2SmQwM*"
			_this.slideImg.setAttribute("src", imgSrc);
			_this.slideBlock.style.backgroundImage = "url(" + imgSrc + ")";
			_this.slideImg.onload = function(e) {
				e.stopPropagation();
				_this.imgWidth = _this.slideImg.offsetWidth; // 图片宽
				_this.imgHeight = _this.slideImg.offsetHeight; // 图片高
			}
		},
		cutImg: function() {
			var _this = this;
			_this.cutBlock.style.display = "block";
			var cutWidth = _this.cutBlock.offsetWidth; // 裁剪区域宽
			var cutHeight = _this.cutBlock.offsetHeight; // 裁剪区域高
			// left 
			_this.resultX = Math.floor(Math.random() * (_this.imgWidth - cutWidth * 2 - 4) + cutWidth);
			// top
			var cutTop = Math.floor(Math.random() * (_this.imgHeight - cutHeight * 2) + cutHeight);
			// 设置样式
			_this.cutBlock.style.cssText = "top:" + cutTop + "px;" + "left:" + _this.resultX +
				"px; display: block;";
			_this.slideBlock.style.top = cutTop + "px";
			_this.slideBlock.style.backgroundPosition = "-" + _this.resultX + "px -" + cutTop + "px";
			_this.slideBlock.style.opacity = "1";
		},
		mousedown: function(_this, e) {
			e.preventDefault();
			_this.startX = e.clientX;
			_this.startTamp = (new Date()).valueOf();
			var target = e.target;
			target.style.backgroundPosition = "0 -216px";
			_this.slideHint.style.opacity = "0";
			if (_this.isSuccess) {
				_this.cutImg();
			}
			document.addEventListener('mousemove', mousemove);
			document.addEventListener('mouseup', mouseup);

			// 拖拽
			function mousemove(event) {
				_this.x = event.clientX - _this.startX;
				if (_this.x < 0) {
					_this.slideBtn.style.left = "0px";
					_this.slideBlock.style.left = "2px";
				} else if (_this.x >= 0 && _this.x <= 610) {
					_this.slideBtn.style.left = _this.x + "px";
					_this.slideBlock.style.left = _this.x + "px";
				} else {
					_this.slideBtn.style.left = "610px";
					_this.slideBlock.style.left = "610px";
				}
				_this.slideBtn.style.transition = "none";
				_this.slideBlock.style.transition = "none";
			};
			// 鼠标放开
			function mouseup() {
				document.removeEventListener('mousemove', mousemove);
				document.removeEventListener('mouseup', mouseup);
				var left = _this.slideBlock.style.left;
				left = parseInt(left.substring(0, left.length - 2));
				if (_this.resultX > (left - 2) && _this.resultX < (left + 2)) {
					_this.isSuccess = true;
					_this.endTamp = (new Date()).valueOf();
					_this.timer = ((_this.endTamp - _this.startTamp) / 1000).toFixed(1);
					// 裁剪图片(拼图的一块)
					_this.slideBlock.style.opacity = "0";
					_this.slideBlock.style.transition = "opacity 0.6s";
					// 裁剪的区域(黑黑的那一块)
					_this.cutBlock.style.opacity = "0";
					_this.cutBlock.style.transition = "opacity 0.6s";
					// 正确弹出的图标
					_this.slideIcon.style.backgroundPosition = "0 -1207px";
					_this.slideType.className = "slide-text-type greenColor";
					_this.slideType.innerHTML = "验证通过:";
					_this.slideContent.innerHTML = "用时" + _this.timer + "s";
					setTimeout(function() {
						_this.cutBlock.style.display = "none";
						_this.slideBlock.style.left = "2px";
						_this.reToNewImg();
					}, 600);
					_this.options.success && _this.options.success();
				} else {
					_this.isSuccess = false;
					// 设置样式
					// 裁剪图片(拼图的一块)
					_this.slideBlock.style.left = "2px";
					_this.slideBlock.style.transition = "left 0.6s";
					// 错误弹出的图标
					_this.slideIcon.style.backgroundPosition = "0 -1229px";
					_this.slideType.className = "slide-text-type redColor";
					_this.slideType.innerHTML = "验证失败:";
					_this.slideContent.innerHTML = "拖动滑块将悬浮图像正确拼合";
					_this.options.fail && _this.options.fail();
				}
				// 设置样式
				_this.slideHintInfo.style.height = "22px";
				setTimeout(function() {
					_this.slideHintInfo.style.height = "0px";
				}, 1300);
				_this.slideBtn.style.backgroundPosition = "0 -84px";
				_this.slideBtn.style.left = "0";
				_this.slideBtn.style.transition = "left 0.6s";
				_this.slideHint.style.opacity = "1";
			}
		}
	}
	window.SliderBar = SliderBar;
}(window, document));

var dataList = ["0", "1"];
var options = {
	dataList: dataList,
	success: function() {
		console.log("show");
	},
	fail: function() {
		console.log("fail");
	}
};
SliderBar("slideBar", options);

// 滑块验证
// var startX = 0; // 初始位置
// var endX = 0; // 结束位置

// let Slider = document.querySelector('.Slider')
// let imgSlider = document.querySelector('.imgSlider')
// let provingHeader1 = document.querySelector('.provingHeader1')
// Slider.addEventListener('touchstart', function(e) {
//     startX = e.touches[0].pageX; // 记录起始位置
// })

// Slider.addEventListener('touchmove', function(e) {
//     e.preventDefault(); // 阻止页面滚动
//     endX = e.touches[0].pageX; // 记录结束位置
//     let move2=(endX - startX)/window.innerWidth*100
//     if(move2<=-6.5){
//         Slider.style.transform = `translateX(-6.5*window.innerWidth/100'px')`; // 移动元素
//         imgSlider.style.transform = `translateX(-6.5*window.innerWidth/100+'px')`;
//     }else if(move2>=61){
//         Slider.style.transform = `translateX(61*window.innerWidth/100+'px')`; // 移动元素
//         imgSlider.style.transform = `translateX(61*window.innerWidth/100+'px')`;
//     }else{
//         Slider.style.transform = 'translateX(' + (endX - startX) + 'px)'; // 移动元素
//         imgSlider.style.transform = 'translateX(' + (endX - startX) + 'px)';
//     }
// })

// Slider.addEventListener('touchend', function(e) {

//     let move1=(endX - startX)/window.innerWidth*100;
//     if(move1<=52&&move1>=49.5) {
//         proving.style.display='none'
//         proving2.style.display='flex' 
//     }else {
//         provingHeader1.style.display='none'
//         provingHeader2.style.display='block'
//         Slider.style.transform = 'translateX(0)'; // 回到原点
//         imgSlider.style.transform = 'translateX(0)'; // 回到原点
//         setTimeout(looks, 1000);
//     }  
// })


//账号样式
let inps = document.getElementsByTagName('input');
let spans = document.getElementsByTagName('span');
// console.log(inps,spans);

//获得焦点
inps[0].addEventListener('focus', function() {
	inps[0].style.borderBottom = "solid 0.267vw  green";
	spans[0].style.position = "relative";
	spans[0].style.top = "-10.667vw";
	spans[0].style.left = "4.400vw";
})

//失去焦点
inps[0].addEventListener('blur', function() {
	inps[0].style.borderBottom = "solid 0.267vw  gray";
	inps[0].style.borderBottom = "solid 0.267vw  gray";
	spans[0].style.position = "relative";
	spans[0].style.top = "-3.333vw";
	spans[0].style.left = "6.533vw";
})

//获得焦点
inps[1].addEventListener('focus', function() {
	inps[1].style.borderBottom = "solid 0.267vw  green";
	spans[1].style.position = "relative";
	spans[1].style.top = "-8.667vw";
	spans[1].style.left = "4.400vw";
})

//失去焦点
inps[1].addEventListener('blur', function() {
	inps[1].style.borderBottom = "solid 0.267vw  gray";
	inps[1].style.borderBottom = "solid 0.267vw  gray";
	spans[1].style.position = "relative";
	spans[1].style.top = "-3.333vw";
	spans[1].style.left = "6.533vw";
})

let footed = document.querySelector('.footed')
let footArr = [
    {
        href:'../home.html',
        src1:'https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-home.svg',
        src2:'https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-home-active.svg',
        title:'主页'
    },
    {
        href:'../store.html',
        src1:'https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-stores.svg',
        src2:'https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-stores-active.svg',
        title:'门店'
    },
    {
        href:'../account.html',
        src1:'https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-account.svg',
        src2:'https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-account-active.svg',
        title:'我的账户'
    },
    {
        href:'../menu.html',
        src1:'https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-menu.svg',
        src2:'https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-menu-active.svg',
        title:'菜单'
    },
    {
        href:'../more.html',
        src1:'https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-more.svg',
        src2:'https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-more-active.svg',
        title:'更多'
    }
]
footRender(footArr,footed)
function footRender(arr,parentNode){
    for(let i = 0 ; i < arr.length ; i++){
        let liNode = document.createElement('li');
        liNode.innerHTML = `
                            <a href="${arr[i].href}" id="footClick">
                                <span class="icons">
                                    <img src="${arr[i].src1}">
                                </span>
                                <div id="account-mobile"><span class="">${arr[i].title}</span></div>
                            </a>
                            `
    parentNode.appendChild(liNode)
    }
} 
let footANodes = document.querySelectorAll('.footed>li>a')
footANodes[2].firstElementChild.firstElementChild.src = `${footArr[2].src2}`
footANodes[2].lastElementChild.firstElementChild.style = 'color:#00A862'