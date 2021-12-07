import { Component } from 'react'
import { View, Button, Form, Input } from '@tarojs/components'
import './index.scss'
export default class MyButton extends Component {
  state = {
    loading: false,
    disabled: false,
    plain: false,
    isMini: false,
    value: ''
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidHide () { }

  render () {
    const arr:  ('default'| 'warn' | 'primary')[] = ['default', 'warn', 'primary']
    const {
      loading,
      disabled,
      plain,
      isMini,
      value
    } = this.state
    return (
      <View className='container'>
        <Form onSubmit={(e) => {
          console.log(JSON.stringify(e))
          console.log('submit')
        }} onReset={() => {
          console.log('reset')
        }}>
          <Input type='text' value={value} />
          <Button formType='reset' onClick={() => {
            console.log(888)
          }}>reset</Button>
          <Button formType='submit'>submit</Button>
        </Form>
        {
          arr.map(i => {
            return <Button className='btn' key={i} type={i} loading={loading} size={isMini ? 'mini' : 'default'} plain={plain} disabled={disabled}>{i}</Button>
          })
        }
        <Button className='btn' onClick={() => {
          this.setState({
            isMini: !this.state.isMini
          })
          console.log('click')
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
