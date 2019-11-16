export default function (options) {

  return new Promise((resolve, reject)=>{
    
    wx.request({
      url: options.url,
      type: options.type || 'GET',
      data: options.data || {},
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}