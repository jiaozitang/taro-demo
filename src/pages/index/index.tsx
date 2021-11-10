import { Component } from 'react'
import { View, Text, CoverView } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <View className='box'>123</View>
        {/* <Image src='https://img20.360buyimg.com/ling/jfs/t1/76659/10/2396/85831/5d0b39baE5575c401/bb6f5767d549e728.png' /> */}
        <CoverView className='cover-view'  onClick={() => {
          console.log('click')
        }} >
          <CoverView className="flex-wrp">
            <CoverView className="flex-item demo-text-1"></CoverView>
            <CoverView className="flex-item demo-text-2"></CoverView>
            <CoverView className="flex-item demo-text-3"></CoverView>
          </CoverView>
        </CoverView>
      </View>
    )
  }
}
