import { Component } from 'react'
import { View, Button } from '@tarojs/components'
import './index.scss'

export default class MyButton extends Component {
  state = {
    loading: false,
    disabled: false,
    plain: false,
    isMini: false
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidHide () { }

  render () {
    const arr = ['default', 'warn', 'primary']
    const {
      loading,
      disabled,
      plain,
      isMini
    } = this.state
    return (
      <View className='container'>
        {
          arr.map(i => {
            return <Button className='btn' key={i} type={i} loading={loading} size={isMini ? 'mini' : 'default'} plain={plain} disabled={disabled}>{i}</Button>
          })
        }
        <Button className='btn' onClick={() => {
          this.setState({
            isMini: !this.state.isMini
          })
        }} onTouchStart={() => {
          console.log('taro touchstart')
        }} onTouchEnd={() => {
          console.log('taro touchend')
        }}>{this.state.isMini ? '取消' : '设置'}以上按钮Size mini属性</Button>
        <Button className='btn' onClick={() => {
          this.setState({
            plain: !this.state.plain
          })
        }}>{this.state.plain ? '取消' : '设置'}以上按钮plain属性</Button>
        <Button className='btn' onClick={() => {
          this.setState({
            loading: !this.state.loading
          })
        }}>{this.state.loading ? '取消' : '设置'}以上按钮loading属性</Button>
        <Button className='btn' onClick={() => {
          this.setState({
            disabled: !this.state.disabled
          })
        }}>{this.state.disabled ? '取消' : '设置'}以上按钮disabled属性</Button>
      </View>
    )
  }
}
