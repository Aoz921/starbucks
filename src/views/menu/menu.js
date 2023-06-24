import './menu.less'
// let iceCream = document.getElementById('ice-cream')
let content = document.getElementById('content')
let {log} = console;
log(content)
let NewArr = [
    {
        title:'咖啡融合冰淇淋',
        arr1:[
            {src:'affogato.jpg',title:'阿馥奇朵™'},
            {src:'cold-brew-malt.jpg',title:'冷萃浮乐朵™'},
            {src:'cold-brew-float.jpg',title:'麦芽雪冷萃™'},
            {src:'instore-nitro-cold-brew-float.jpg',title:'冷萃冰咖啡'},
        ],
    },
    {
        title:'星巴克冷萃咖啡系列',
        arr1:[
            {src:'cold-brew.jpg',title:'冷萃冰咖啡'},
            {src:'vanilla-flavor-sweet-cream-cold-brew.jpg',title:'绵云冷萃'},
            {src:'cold-foam-cold-brew.jpg',title:'酸柠浮冷萃'},
        ],
    },
    {
        title:'手工调制浓缩咖啡',
        arr1:[
            {src:'caffe-americano.jpg',title:'美式咖啡（热/冷）'},
            {src:'caffe-latte.jpg',title:'拿铁（热/冷）'},
            {src:'caffe-mocha.jpg',title:'摩卡（热/冷)'},
            {src:'espresso.jpg',title:'浓缩咖啡'},
            {src:'hazelnut-flavored-latte.jpg',title:'榛果风味拿铁（热/冷）'},
            {src:'vanilla-flavored-latte.jpg',title:'香草风味拿铁（热/冷）'},
            {src:'black-tea-latte.jpg',title:'红茶拿铁（热/冷）'},
            {src:'green-tea-latte.jpg',title:'抹茶拿铁（热/冷）'},
            {src:'blackcurrant-raspberry.jpg',title:'冰摇红莓黑加仑茶'},
        ],
    },
    {
        title:'星冰乐®',
        arr1:[
            {src:'caramel-espresso-frappuccino.jpg',title:'焦糖浓缩咖啡星冰乐'},
            {src:'mango-passion-tea.jpg',title:'芒果西番莲果茶星冰乐'},
            {src:'mocha-frappuccino.jpg',title:'摩卡星冰乐'},
            {src:'mocha-java-chip-frappuccino.jpg',title:'摩卡可可碎片星冰乐'},
            {src:'vanilla-flavored-cream-frappuccino-blended-beverage.jpg',title:'香草风味星冰乐'},
        ],
    },
    {
        title:'气致™冷萃咖啡',
        arr1:[
            {src:'nitro-cold-brew.jpg',title:'气致™冷萃咖啡'},
        ],
    },
    {
        title:'经典巧克力饮品',
        arr1:[
            {src:'signature-chocolate-beverage.jpg',title:'经典巧克力饮品（热/冷）'},
        ],
    },
    {
        title:'茶瓦纳™',
        arr1:[
            {src:'black-tea-latte.jpg',title:'红茶拿铁（热/冷）'},
            {src:'green-tea-latte.jpg',title:'抹茶拿铁（热/冷）'},
            {src:'iced-shaken-honey-ruby-grapefruit-black-tea.jpg',title:'茶瓦纳™ 冰摇柚柚蜂蜜红茶'},
            {src:'iced-shaken-mango-herbal-juiced-tea.jpg',title:'冰摇芒果花草茶'},
        ],
    },
    {
        title:'深度烘焙',
        arr1:[
            {src:'origami-verona.jpg',title:'星巴克ORIGAMI™便携式滴滤咖啡（研磨咖啡粉）星巴克®佛罗娜烘焙咖啡系列'},
        ],
    },
    {
        title:'中度烘焙',
        arr1:[
            {src:'origami-pike-place.jpg',title:'星巴克ORIGAMI™便携式滴滤咖啡（研磨咖啡粉）星巴克®派克市场烘焙咖啡系列'},
        ],
    },
    {
        title:'星巴克VIA® Black',
        arr1:[
            {src:'via-colombia.jpg',title:'星巴克VIA®哥伦比亚免煮咖啡'},
        ],
    },
    {
        title:'星巴克VIA® Dairy',
        arr1:[
            {src:'via-caffe-mocha.jpg',title:'星巴克VIA®摩卡风味免煮咖啡固体饮料'},
        ],
    },
]

menuRender(NewArr,content)
function menuRender(arr,parentNode){
    for(let i = 0 ; i < arr.length ; i++){
        let OdivStr = document.createElement('div'); // 创建一个子集的父级标签
        OdivStr.classList.add('clasRandom')
        let titleStr = document.createElement('h3'); // 创建标题标签
        let ulstr = document.createElement('ul');
        ulstr.classList.add('clasImg');
        titleStr.innerHTML = `${arr[i].title}`;
        // log(titleStr)
        parentNode.appendChild(titleStr)
        parentNode.appendChild(ulstr)
        for(let j = 0 ; j < arr[i].arr1.length ; j++){
            // log(arr[i].arr1)
            let liNode = document.createElement('li')
            liNode.innerHTML = `
                                    <a id="menu-product" class="thumbnail">
                                        <img src="https://www.starbucks.com.cn/images/products/${arr[i].arr1[j].src}" class="preview circle" >
                                        <strong>${arr[i].arr1[j].title}</strong>
                                    </a> 
                                `
            ulstr.appendChild(liNode)
        }
    }
    
}


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
footANodes[3].firstElementChild.firstElementChild.src = `${footArr[3].src2}`
footANodes[3].lastElementChild.firstElementChild.style = 'color:#00A862'