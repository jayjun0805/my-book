// pages/jsq/jsq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numberOne: 0,  	// 第一个数的值，默认为0
    numberTwo: 0,  	// 第二个数的值，默认为0
    operator: "+", 	// 运算符，默认为+
    result: 0 		// 计算结果，默认为0
  },

  // 第一个数的键盘输入时触发input事件
  numberOneInput: function(e){
    // console.log(e.detail.value);
    //更新第一个数的值
    this.setData({
      numberOne: e.detail.value
    })
  },

  // 第二个数的键盘输入时触发input事件
  numberTwoInput: function (e) {
    // console.log(e.detail.value);
    //更新第二个数的值
    this.setData({
      numberTwo: e.detail.value
    })
  },

  // 单项选择器的选中项发生变化时触发 change 事件
  radioGroupChange: function(e){
    // console.log(e.detail.value);
    //更新运算符的值
    this.setData({
      operator: e.detail.value
    })
  },

  // 开始计算手指触摸离开 tap 事件
  startBtnTap: function(e){
    // console.log(e);
    // 1、获取第一个数的值、第二个数的值和单项选择器的选中项的值
    var numberOne = parseFloat(this.data.numberOne);
    var numberTwo = parseFloat(this.data.numberTwo);
    var operator = this.data.operator;

    // 2、根据单项选择器的选中项的值进行判断，写一个switch 语句，完成计算
    var result = 0;
    switch(operator)
    {
      case "+":
        result = numberOne + numberTwo;
        break;
      case "-":
        result = numberOne - numberTwo;
        break;
      case "*":
        result = numberOne * numberTwo;
        break;
      case "/":
        result = numberOne / numberTwo;
        break;
    }

    // 3、将计算结果显示，使用setData更新result数据
    this.setData({
      result: result
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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