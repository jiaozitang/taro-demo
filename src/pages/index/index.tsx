import { Component } from 'react'
import { View, Button} from '@tarojs/components'
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
        {/* <Text>Hello world!</Text> */}
        {/* <Camera></Camera> */}
        {/* <CoverImage src={require('./1.jpg')} ></CoverImage> */}
        <Button hover-stay-time={1000} type='warn' plain onClick={() => {
          console.log('哈哈哈')
        }} value="哈哈哈"
        >哈哈哈</Button>
      </View>
    )
  }
}
