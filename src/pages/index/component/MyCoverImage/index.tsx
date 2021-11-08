import { Component } from 'react'
import { Button, CoverImage, View } from '@tarojs/components'
import './index.scss'

export default class MyButton extends Component {
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidHide () { }

  render () {
    return (
      <View className='container'>
        <View className='box'>box</View>
        <CoverImage src='https://img20.360buyimg.com/ling/jfs/t1/76659/10/2396/85831/5d0b39baE5575c401/bb6f5767d549e728.png'
          onLoad={() => {
            console.log('load')
          }}
          onError={() => {
            console.log('error')
          }}
        ></CoverImage>
      </View>
    )
  }
}
