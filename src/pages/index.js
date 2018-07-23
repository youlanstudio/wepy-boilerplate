import wepy from 'wepy'

export default class Index extends wepy.page {
  config = {
    navigationBarTitleText: 'test'
  }
  onLoad() {
    console.log('onLoad')
  }
}
