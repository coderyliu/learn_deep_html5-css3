const titleItems = document.querySelectorAll('.title-item')
const titleAe = document.querySelectorAll('.title-item>a')
const contentWrappers = document.querySelector('.news-content>.content')

let currentTitleIndex = 0
titleItems[currentTitleIndex].style.borderBottom = '3px solid #f3c258'
titleAe[currentTitleIndex].style.color = '#f3c258'

// 监听鼠标移入事件
for (let i = 0; i < titleAe.length - 1; i++) {
  titleItems[i].addEventListener('mouseenter', () => {
    // 把其他的导航颜色还原
    titleItems.forEach(title => {
      title.style.border = 'none'
    })
    titleAe.forEach(t => {
      t.style.color = '#b8b9c5'
    })

    titleItems[i].style.borderBottom = '3px solid #f3c258'
    titleAe[i].style.color = '#f3c258'

    currentTitleIndex = i
    contentWrappers.style.left = -(currentTitleIndex * 359) + 'px'
  })
}