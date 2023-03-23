// 获取元素
const pics = document.querySelector('.pics')
const pic = document.querySelectorAll('.pic')
const bans = document.querySelectorAll('.ban>.item')
const a = document.querySelectorAll('.ban>.item>a')

let currentIndex = 0
let timer = null

bans[currentIndex].style.backgroundColor = 'rgba(255,255,255,0.15)'
a[currentIndex].style.color = '#f3c258'
// 监听底部的移入
for (let i = 0; i < bans.length; i++) {
  bans[i].addEventListener('mouseenter', () => {
    stopPlay()
    currentIndex = i
    bans.forEach((ban) => {
      ban.style.backgroundColor = '#0b0a0a'
    })
    a.forEach(item => {
      item.style.color = '#b1b2be'
    })
    bans[i].style.backgroundColor = 'rgba(255,255,255,0.15)'
    a[i].style.color = '#f3c258'
    pics.style.left = -(i * 604) + 'px'
  })
  bans[i].addEventListener('mouseleave', () => {
    autoplay()
  })
}

// 监听图片的移入
for (let i = 0; i < pic.length; i++) {
  pic[i].addEventListener('mouseenter', () => {
    stopPlay()
    currentIndex = i
    bans.forEach((ban) => {
      ban.style.backgroundColor = '#0b0a0a'
    })
    a.forEach(item => {
      item.style.color = '#b1b2be'
    })
    bans[i].style.backgroundColor = 'rgba(255,255,255,0.15)'
    a[i].style.color = '#f3c258'
    pics.style.left = -(i * 604) + 'px'
  })
  pic[i].addEventListener('mouseleave', () => {
    autoplay()
  })
}

// 上一张
function next() {
  bans.forEach((ban) => {
    ban.style.backgroundColor = '#0b0a0a'
  })
  a.forEach(item => {
    item.style.color = '#b1b2be'
  })
  if (currentIndex >= pic.length - 1) {
    currentIndex = 0
  } else {
    currentIndex += 1
  }
  bans[currentIndex].style.backgroundColor = 'rgba(255,255,255,0.15)'
  a[currentIndex].style.color = '#f3c258'
  pics.style.left = -(currentIndex * 604) + 'px'
}

// 下一张
function prev() {
  bans.forEach((ban) => {
    ban.style.backgroundColor = '#0b0a0a'
  })
  a.forEach(item => {
    item.style.color = '#b1b2be'
  })
  if (currentIndex < 0) {
    currentIndex = pic.length - 1
  } else {
    currentIndex -= 1
  }
  bans[currentIndex].style.backgroundColor = 'rgba(255,255,255,0.15)'
  a[currentIndex].style.color = '■#f3c258'
  pics.style.left = -(currentIndex * 604) + 'px'
}

// 自动播放
function autoplay() {
  timer = setInterval(() => {
    next()
  }, 4000)
}

// 停止播放
function stopPlay() {
  if (timer) {
    clearInterval(timer)
  }
}

autoplay()