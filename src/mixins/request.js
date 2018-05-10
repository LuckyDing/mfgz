import wepy from 'wepy'

export default class requestMixin extends wepy.mixin {
  data = {
    baseUrl: 'https://www.mjxgz.club/'
  }
  methods = {
  }
  $post (url = '', data = {}, showLoading = false) {
    if (showLoading === true) {
      wepy.showLoading()
    }
    const _this = this
    return wepy.request(
      {
        url: _this.baseUrl + url,
        method: 'post',
        data: data
      }
    ).then((res) => {
      wepy.hideLoading()
    })
  }
  $get (url = '', data = {}, showLoading = false) {
    if (showLoading === true) {
      wepy.showLoading()
    }
    const _this = this
    return wepy.request(
      {
        url: _this.baseUrl + url,
        method: 'get',
        data: data
      }
    ).then((res) => {
      wepy.hideLoading()
      return res
    })
  }
  onShow() {
  }

  onLoad() {
  }
}
