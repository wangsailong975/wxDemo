// pages/list/list.js
import fetch from '../../utils/fetch'
import regeneratorRuntime from '../../utils/runtime'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    id: 0,
    isLoadingDone: false, // 数据是否已经加载完成,默认是没有加载完成
    hasmore: true, // 是否还有更多数据,默认是还有更多数据
    page: 0, // 页数
    total: 20, // 总数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      id: options.id,
    })

    this.getList()
  },
  
  // 获取分类列表数据
  async getList () {
    // 展示正在加载
    this.setData({
      isLoadingDone: false
    })

    let { id, page, total, list } = this.data

    // 判断后面时候还有数据,有就发送请求,没有就不执行后面代码
    if (Math.ceil(total / 10) <= page) {
      this.setData({
        isLoadingDone: true,
        hasmore: false
      })
      return
    }
    page++

    let res = await fetch({
      url: `https://locally.uieee.com/categories/${id}/shops?_page=${page}&_limit=10`
    })
    this.setData({
      list: [...list, ...res.data],
      isLoadingDone: true,
      total: res.header['X-Total-Count'],
      page
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getList()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      list: [],
      hasmore: true,
      page: 0,
      total: 20
    })

    this.getList()
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})