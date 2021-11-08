import { Component } from 'react'
import { View, Text, Image, CoverImage } from '@tarojs/components'
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
        <CoverImage className='coverImage' src='https://img20.360buyimg.com/ling/jfs/t1/76659/10/2396/85831/5d0b39baE5575c401/bb6f5767d549e728.png'
          onLoad={() => {
            console.log('load')
          }}
          onError={() => {
            console.log('error')
          }}
        />
      </View>
    )
  }
}
