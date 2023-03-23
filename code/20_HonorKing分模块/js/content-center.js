// ?公共变量
let currentContentIndex = 0

// ?左侧的滚动
const contentItems = document.querySelectorAll('.content-nav>.nav-item')
const titleA = document.querySelectorAll('.nav-item>a')
const contentWrapper = document.querySelector('.content-lists')

contentItems[currentContentIndex].style.borderBottom = '3px solid #f3c258'
titleA[currentContentIndex].style.color = '#333'

// ?右侧的滚动
const heroContentItems = document.querySelectorAll('.hero-nav>.hero-item')
const titleAs = document.querySelectorAll('.hero-item>a')
const heroContentWrapper = document.querySelector('.hero-wrap')

heroContentItems[currentContentIndex].style.borderBottom = '3px solid #f3c258'
titleAs[currentContentIndex].style.color = '#333'

// 赛事中心的滚动
const matchContentItems=document.querySelectorAll('.match-section>.left>.nav>a')
const matchContentWrapper=document.querySelector('.content>.cont-wrapper')

matchContentItems[currentContentIndex].style.borderBottom = '3px solid #f3c258'
matchContentItems[currentContentIndex].style.color = '#333'

function bannerHandler(contentItems,titleA,contentWrapper,left) {
  // 监听鼠标移入事件
  let currentContentIndex=0
  for (let i = 0; i < contentItems.length; i++) {
    contentItems[i].addEventListener('mouseenter', () => {
      // 把其他的导航颜色还原
      contentItems.forEach(title => {
        title.style.border = 'none'
      })
      titleA.forEach(t => {
        t.style.color = '#b8b9c5'
      })

      contentItems[i].style.borderBottom = '3px solid #f3c258'
      titleA[i].style.color = '#333'

      currentContentIndex = i
      contentWrapper.style.left = -(currentContentIndex * left) + 'px'
    })
  }
}
bannerHandler(contentItems,titleA,contentWrapper,892)
bannerHandler(heroContentItems,titleAs,heroContentWrapper,295)
bannerHandler(matchContentItems,matchContentItems,matchContentWrapper,872)