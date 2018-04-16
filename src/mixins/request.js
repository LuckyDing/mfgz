import wepy from 'wepy'

export default class requestMixin extends wepy.mixin {
  data = {
    baseUrl: 'https://www.easy-mock.com/mock/5acd6ad51a719c137134156f/mj/'
  }
  methods = {
  }
  $post (url = '', data = {}, showLoading = true) {
    const _this = this
    return wepy.request(
      {
        url: _this.baseUrl + url,
        method: 'post',
        data: data
      }
    ).then()
  }
  $get (url = '', data = {}, showLoading = true) {
    const _this = this
    return wepy.request(
      {
        url: _this.baseUrl + url,
        method: 'get',
        data: data
      }
    ).then((res) => {
      return res
    })
  }
  onShow() {
  }

  onLoad() {
  }
}
