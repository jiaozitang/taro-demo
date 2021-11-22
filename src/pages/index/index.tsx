import { Component } from 'react'
import { View, Text, Picker } from '@tarojs/components'
import './index.scss'

export default class PagePicker extends Component {
  state = {
    selector: [
      {
        name: '美国',
        id: 'aK1'
      }
    ],
    selectorChecked: 'a',
    timeSel: '12:01',
    dateSel: '2018-04-22'
  }

  onChange = e => {
    console.log(e)
    this.setState({
      selectorChecked: this.state.selector[e.detail.name]
    })
  }

  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }

  render () {
    console.log(12)
    return (
      <View className='container'>
        <View className='page-body'>
          <View className='page-section'>
            <Text>地区选择器</Text>
            <View>
              <Picker rangeKey='name' mode='selector' range={this.state.selector} onChange={this.onChange}>
                <View className='picker'>
                  当前选择：{this.state.selectorChecked}
                </View>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <Text>时间选择器</Text>
            <View>
              <Picker mode='time' onChange={this.onTimeChange}>
                <View className='picker'>
                  当前选择：{this.state.timeSel}
                </View>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <Text>日期选择器</Text>
            <View>
              <Picker mode='date' onChange={this.onDateChange}>
                <View className='picker'>
                  当前选择：{this.state.dateSel}
                </View>
              </Picker>
            </View>
          </View>
        </View>
      </View>
    )
  }
}