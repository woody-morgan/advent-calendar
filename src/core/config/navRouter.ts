export type NavRouterType = {
  to: string
  title: string
  desc: string
  imgPath: string
}

// do not change the order of the array
export const navRouter: NavRouterType[] = [
  {
    title: '입시레슨',
    desc: '첫번째 관문을 위한',
    imgPath: '/static/illusts/입시_오퍼.png',
    to: '/lesson',
  },
  {
    title: '반주자',
    desc: '연주의 동반자',
    imgPath: '/static/illusts/학원강사_오퍼.png',
    to: '/player',
  },
  {
    title: '학원강사',
    desc: '꿈나무들의 선생님',
    imgPath: '/static/illusts/학원강사.png',
    to: '/tutor',
  },
  {
    title: '연습실',
    desc: '성장의 공간',
    imgPath: '/static/illusts/연습실.png',
    to: '/practice',
  },
]
