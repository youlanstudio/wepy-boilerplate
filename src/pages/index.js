import wepy from 'wepy';

export default class Index extends wepy.page {
  config = {
    navigationBarTitleText: 'Boilerplate'
  };
  onLoad() {
    console.log('onLoad');
  }
}
