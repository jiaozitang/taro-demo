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
        <Button type='default'  size='mini'>type default1</Button>
        <Button type='default'  className='test' >type default1</Button>
        <Button type='primary' >type primary </Button>
        <Button type='warn' >type warn </Button>
        <Button type='default'  className='test'  plain>type default</Button>
        <Button type='primary'  plain>type primary </Button>
        <Button type='warn'  plain>type warn </Button>
        <Button type='default'  disabled >type default  disabled</Button>
        <Button type='primary'  disabled >type primary  disabled</Button>
        <Button type='warn'  disabled >type warn  disabled</Button>
        <Button type='default'  loading >type default  disabled loading</Button>
        <Button type='primary'  loading >type primary  disabled loading</Button>
        <Button type='warn'  loading>type warn  disabled loading</Button>
        <Button type='default'  onClick={() => {
          console.log('click')
        }} onTouchStart={() => {
          console.log('ontouchstart')
        }}>type default click</Button>
      </View>
    )
  }
}
