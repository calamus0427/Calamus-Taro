(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"166":function(e,t,n){},"24":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var o,a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=n(3),u=(_interopRequireDefault(i),_interopRequireDefault(n(4))),c=n(26),r=n(61),l=n(5),s=n(48);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(166);var d=(0,l.connect)(function(e){return{"counter":e.counter}},function(e){return{"add":function add(){e((0,s.add)())},"dec":function dec(){e((0,s.minus)())},"asyncAdd":function asyncAdd(){e((0,s.asyncAdd)())}}})(o=function(e){function Index(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=n=_possibleConstructorReturn(this,(e=Index.__proto__||Object.getPrototypeOf(Index)).call.apply(e,[this].concat(a))),n.config={"navigationBarTitleText":"首页"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,i.Component),a(Index,[{"key":"handleClick","value":function handleClick(e){this.setState({"current":e})}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){console.log(this.props,e)}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){return u.default.createElement(c.View,{"className":"index"},u.default.createElement(c.View,{"className":"header"},"家居云供",u.default.createElement(r.AtButton,null,"登录")),u.default.createElement(c.View,{"className":"tabs"},u.default.createElement(r.AtTabBar,{"tabList":[{"title":"产品","iconType":"bullet-list","text":"new"},{"title":"解决方案","iconType":"camera"},{"title":"家居大脑","iconType":"folder","text":"100","max":"99"},{"title":"双创市场","iconType":"folder","text":"100","max":"99"},{"title":"支持与服务","iconType":"folder","text":"100","max":"99"}],"onClick":this.handleClick.bind(this),"current":this.state.current})),u.default.createElement(c.View,{"className":"banner"},u.default.createElement(c.View,null,"因为看见，所以存在"),u.default.createElement(c.Image,{"style":"width: 100%;height:auto;background: #fff;","src":"https://cdn.calamus.xyz/20140607135247_PsTCx.jpeg"})),u.default.createElement(c.View,{"className":"banner"},u.default.createElement(r.AtButton,null,"家居行业领先、安全、稳定的产业云产品"),u.default.createElement(r.AtGrid,{"mode":"rect","hasBorder":"false","columnNum":"4","data":[{"image":"https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png","value":"家居信息化平台"},{"image":"https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png","value":"云装"},{"image":"https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png","value":"云仓"},{"image":"https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png","value":"云配"},{"image":"https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png","value":"服务培训平台"},{"image":"https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png","value":"家居产品平台"},{"image":"https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png","value":"家居信用评价管理"},{"image":"https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png","value":"家居人工智能ET"}]})),u.default.createElement(c.View,{"className":"banner"},u.default.createElement(r.AtButton,null,"解决方案"),u.default.createElement(r.AtGrid,{"mode":"square","columnNum":"4","data":[{"image":"https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png","value":"批量精装修解决方案"},{"image":"https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png","value":"家居零售解决方案"},{"image":"https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png","value":"仓配装解决方案"},{"image":"https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png","value":"家居维保解决方案"}]})))}},{"key":"componentDidMount","value":function componentDidMount(){}}]),Index}())||o;t.default=d},"26":function(e,t,n){e.exports=n(0)(18)},"27":function(e,t,n){e.exports=n(0)(19)},"48":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.minus=t.add=void 0,t.asyncAdd=function asyncAdd(){return function(e){setTimeout(function(){e(a())},2e3)}};var o=n(6),a=t.add=function add(){return{"type":o.ADD}};t.minus=function minus(){return{"type":o.MINUS}}}}]);