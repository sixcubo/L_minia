// pages/demo01/demo01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0
  },

  handleInput(e) {
    this.setData({
      num: e.detail.value
    })
  },

  handleTap(e) {
    console.log(e);
    let v =  e.currentTarget.dataset.value;
    this.setData({
      num: this.data.num + v
    })
  }

})