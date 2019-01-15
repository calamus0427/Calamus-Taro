import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Image } from '@tarojs/components'
import { AtButton,AtAvatar,AtGrid,AtTabBar } from 'taro-ui'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))

class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View className="header">
          家居云供
          <AtButton>登录</AtButton>
        </View>
        <View className="tabs">
        <AtTabBar
            tabList={[
              { title: '产品', iconType: 'bullet-list', text: 'new' },
              { title: '解决方案', iconType: 'camera' },
              { title: '家居大脑', iconType: 'folder', text: '100', max: '99' },
              { title: '双创市场', iconType: 'folder', text: '100', max: '99' },
              { title: '支持与服务', iconType: 'folder', text: '100', max: '99' }
            ]}
            onClick={this.handleClick.bind(this)}
            current={this.state.current}
          />
        </View>
        <View className='banner'>
          <View>因为看见，所以存在</View>
          <Image
            style='width: 100%;height:auto;background: #fff;'
            src='https://cdn.calamus.xyz/20140607135247_PsTCx.jpeg'
          />
        </View>
        <View className='banner'>
          <AtButton>家居行业领先、安全、稳定的产业云产品</AtButton>
          <AtGrid mode='rect' hasBorder="false" columnNum="4" data={
              [
                  {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                    value: '家居信息化平台'
                  },
                  {
                    image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                    value: '云装'
                  },
                  {
                    image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                    value: '云仓'
                  },
                  {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                    value: '云配'
                  },
                  {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                    value: '服务培训平台'
                  },
                  {
                    image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                    value: '家居产品平台'
                  },
                  {
                    image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                    value: '家居信用评价管理'
                  },
                  {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                    value: '家居人工智能ET'
                  }
                ]
              } />
        </View>
        <View className='banner'>
          <AtButton>解决方案</AtButton>
          <AtGrid mode='square' columnNum="4" data={
              [
                  {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                    value: '批量精装修解决方案'
                  },
                  {
                    image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                    value: '家居零售解决方案'
                  },
                  {
                    image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                    value: '仓配装解决方案'
                  },
                  {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                    value: '家居维保解决方案'
                  }
                ]
              } />
        </View>


      </View>
    )
  }
}

export default Index
