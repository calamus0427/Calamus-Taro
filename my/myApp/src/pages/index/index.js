import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Slider, Image } from '@tarojs/components'
import { AtButton,AtList, AtListItem } from 'taro-ui'


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

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
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
        <AtButton type='primary'>按钮文案</AtButton>
          <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay>
            <SwiperItem>
              <View className='demo-text'>11111</View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text'>22222</View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text'>333333</View>
            </SwiperItem>
          </Swiper>
      </View>
    )
  }
}


