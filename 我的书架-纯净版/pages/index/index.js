//index.js

Page({
  data: {
    title: '我的书架',
    bookList: [],
    creatingBookName: '', // 当前正在创建的书名
    editingBookName: '', // 当前正在编辑的书名
  },

  onLoad(options) {
   
    this.fetchBookList();

  },

  // 获取 bookList 数据
  fetchBookList() {
    
    let bookList = [
      {
        "_id": "5984465311a55f59b38ea909",
        "bookName": "傲慢与偏见"
      },
      {
        "_id": "5984465311a55f59b38ea90b",
        "bookName": "双城记",
      }, 
      {
        "_id": "5984465311a55f59b38ea90f",
        "bookName": "黑客与画家",
      }
    ];

    this.setData({
      bookList
    });


  },

  // 绑定添加书目的输入框事件，设置添加的数目名称
  bindCreateBookNameInput(e) {
    let value = e.detail.value
    console.log(value);
    this.setData({
      creatingBookName: value
    })
  },

  // 绑定每一行书目的“编辑”按钮点击事件，控制输入框和文本显示
  editBookButtonClicked(e) {
    let that = this
    let activeIndex = e.currentTarget.dataset.index
    let bookList = this.data.bookList

    bookList.forEach((elem, idx) => {
      if (activeIndex == idx) {
       elem.isEditing = true
      } else {
        elem.isEditing = false
      }
    })

    that.setData({
      bookList
    })
  },

  // 绑定每一行书目的输入框事件，设定当前正在编辑的书名
  bindEditBookNameInput(e) {
    let bookName = e.detail.value
    this.setData({
      editingBookName: bookName,
    })
  }

})