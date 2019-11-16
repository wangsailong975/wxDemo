import fetch from '../../utils/fetch'
import regeneratorRuntime from '../../utils/runtime'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    gridList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求轮播图的数据
    this.getSwiperList()

    // 请求分类的数据
    this.getGridList()
  },
  // 请求轮播图的数据
  async getSwiperList () {
    let res = await fetch({
      url: 'https://locally.uieee.com/slides'
    })
    this.setData({
      swiperList: res.data
    })
  },
  // 请求分类的数据
  async getGridList () {
    let res = await fetch({
      url: 'https://locally.uieee.com/categories'
    })
    this.setData({
      gridList: res.data
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