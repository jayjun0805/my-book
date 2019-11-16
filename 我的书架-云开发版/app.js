//app.js
App({
  onLaunch: function () {
     wx.cloud.init({
       env:'test-d35f03',
       traceUser: true
     })
  }
})

