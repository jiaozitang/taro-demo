import { Component } from 'react'
import { View, Button } from '@tarojs/components'
import './index.scss'

export default class MyButton extends Component {
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidHide () { }

  render () {
    return (
      <View className='container'>
        {/* <Label>123</Label> */}
        <Button type='default'  className='test' value='test'>type default</Button>
        <Button type='primary' value='test'>type primary </Button>
        <Button type='warn' value='test'>type warn </Button>
        <Button type='default'  className='test' value='test' plain>type default</Button>
        <Button type='primary' value='test' plain>type primary </Button>
        <Button type='warn' value='test' plain>type warn </Button>
        <Button type='default' value='test' disabled >type default  disabled</Button>
        <Button type='primary' value='test' disabled >type primary  disabled</Button>
        <Button type='warn' value='test' disabled >type warn  disabled</Button>
        <Button type='default' value='test' loading >type default  disabled loading</Button>
        <Button type='primary' value='test' loading >type primary  disabled loading</Button>
        <Button type='warn' value='test' loading>type warn  disabled loading</Button>
        <Button type='default' value='test' onClick={() => {
          console.log('click')
        }} onTouchStart={() => {
          console.log('ontouchstart')
        }}>type default click</Button>
      </View>
    )
  }
}
