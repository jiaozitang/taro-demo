import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import MyButton from './component/MyButton'

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
        <MyButton></MyButton>
        {/* <MyCoverImage /> */}
      </View>
    )
  }
}
