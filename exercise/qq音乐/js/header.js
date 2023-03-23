const musicList = document.querySelector('.music-list')
const navbar = document.querySelector('.nav-bar')
musicList.style.backgroundColor = '#31c27c'

musicList.querySelector('a').style.color = 'white'

const tag = document.querySelector('.tag')
const liLists = tag.querySelectorAll('li')
for (let i = 0; i < liLists.length; i++) {
  liLists[i].addEventListener('click', () => {
    if (i === 0) {
      navbar.style.display = 'block'
    } else {
      navbar.style.display = 'none'
    }
    liLists.forEach(i => {
      i.style.backgroundColor = ''
      i.querySelector('a').style.color = '#333'
    })
    liLists[i].style.backgroundColor = '#31c27c'
    liLists[i].querySelector('a').style.color = 'white'
  })
}