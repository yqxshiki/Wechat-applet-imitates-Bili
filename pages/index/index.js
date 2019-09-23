Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [],
    swiperList: [],
    videosList:[],
    currentIndenNav: 0
  },
  // 点击nav
  activeNav(e) {
    this.setData({
      currentIndenNav: e.target.dataset.index
    })
  },
  // 获取nav数据
  getNavList() {
    let that = this;
    wx.request({
      url: "https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/navList",
      success(res) {
        // console.log(res);
        if (res.data.code == 0) {
          that.setData({
            navList: res.data.data.navList
          })
        }
      }
    })
  },
  // 获取轮播图数据
  getSwiperList() {
    let that=this;
    wx.request({
      url: 'https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/swiperList',
      success(res){
        // console.log(res);
        if(res.data.code==0){
          that.setData({
            swiperList:res.data.data.swiperList
          })
        }
      }
    })
  },
  // 获取视频数据
  getVideosList(){
    let that=this;
    wx.request({
      url: 'https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/videosList',
      success(res){
        // console.log(res);
        if(res.data.code==0){
          that.setData({
            videosList:res.data.data.videosList
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();
    this.getSwiperList();
    this.getVideosList();
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