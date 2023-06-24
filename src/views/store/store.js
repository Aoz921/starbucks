
window._AMapSecurityConfig = {
    securityJsCode:"410739eb541b709763a1d7936cf6d374",
}
import { areaList } from './information.js'
import '@/views/store/store.css'

new Vue({
    el: "#app",
    data: {
        areaList: areaList,
        areaData: [
            {
                code: '420000',
                name: '湖北省'
            }, {
                code: '420100',
                name: '武汉市'
            }, {
                code: '420111',
                name: '洪山区'
            }
        ],
        DialogShow: true,
        SearchValue: '',
        map: null
    },
    created() {
        this.InitMap();
    },
    methods: {
        DialogConfirm(value, index) {
            this.areaData = value;
            this.DialogShow = !this.DialogShow;
        },
        onSearch() {

        },
        // 初始化地图
        InitMap() {
            AMapLoader.load({
                "key": "69611689f3f0a1172ba9eb0720bac7f7",    // 申请好的Web端开发者Key，首次调用 load 时必填
                "version": "2.0",
                "plugins": ['AMap.CitySearch', 'AMap.Geolocation'],   // 需要使用的的插件列表，如比例尺'AMap.Scale'等
                "AMapUI": {           // 是否加载 AMapUI，缺省不加载
                    "version": '1.1', // AMapUI 版本
                    "plugins":['overlay/SimpleMarker'],  // 需要加载的 AMapUI ui插件
                },
                "Loca":{
                    "version": '2.0'
                },
            }).then((AMap)=>{
                this.map = new AMap.Map('Map');
                this.Position()
            })
        },
        // 定位e
        Position() {
            console.log(1);
            AMap.plugin('AMap.Geolocation', function() {
                var geolocation = new AMap.Geolocation({
                    enableHighAccuracy: true, // 是否使用高精度定位，默认：true
                    timeout: 1000, // 设置定位超时时间，默认：无穷大
                    offset: [10, 20],  // 定位按钮的停靠位置的偏移量
                    zoomToAccuracy: true,  //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                    position: 'RB' //  定位按钮的排放位置,  RB表示右下
                })

                console.log(2);
                geolocation.getCurrentPosition(function(status,result){
                    console.log(result);
                });
            })
        }
    }
})