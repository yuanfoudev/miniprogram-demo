// index.js
const app = getApp();

Page({
    //初始数据
    data: {
      name: '张三'
    },
    //点击按钮触发
    buttonHandler(event) {
      const that = this;
      wx.showModal({
        title: ' 变更姓名',
        content: '确定要为这个用户变更姓名吗',
        complete: (res) => {
          //用户点击取消
          if (res.cancel) {
            console.log('用户点击取消');
          }
         //用户点击确定，执行变更姓名
          if (res.confirm) {
            that.setData(
              {
                name: '李四'
              },function(){
                  wx.showToast({
                    title: '更名完成',
                    duration:600
                  })
            });
          }
        }
      })
    }
  });