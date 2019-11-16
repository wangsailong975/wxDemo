// pages/detail/detail.js
import fetch from '../../utils/fetch'
import regeneratorRuntime from '../../utils/runtime'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: [],
    id: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })

    this.getDetail()
  },

  // 获取详情数据
  async getDetail () {
    let res = await fetch({
      url: `https://locally.uieee.com/shops/` + this.data.id
    })
    this.setData({
      detail: res.data
    })
  },

  preImage (e) {

    // 第几条评论
    let index = e.currentTarget.dataset.index
    // 当前评论的第几张图片
    let i = e.currentTarget.dataset.i
    let { detail } = this.data
    let images = detail.comments[index].images
    images = images.map(item => {
      return item.replace('w.h', '1000.1000')
    })
    console.log(detail)
    wx.previewImage({
      urls: images,
      current: images[i],
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})