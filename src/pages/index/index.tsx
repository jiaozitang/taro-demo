import { Component } from 'react'
import { View, Text, Textarea } from '@tarojs/components'
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
        <Textarea className='textarea' onLineChange={(e) => {
          console.log(e)
        }}/>
      </View>
    )
  }
}
