import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  lang: 'zh-CN',
  title: 'Valaxy Theme Sakura',
  favicon: '/favicon-32x32.ico',
  url: 'https://sakura.wrxinyue.org/',
  author: {
    avatar: 'https://wrxinyue-images.s3.bitiful.net/profile-picture.jpg',
    name: 'WRXinYue',
    status: {
      emoji: '📚',
      message: 'In a hurry',
    },
  },
  description: 'Valaxy Theme Sakura Preview.',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'QQ 群 1050458482',
      link: 'https://qm.qq.com/cgi-bin/qm/qr?k=kZJzggTTCf4SpvEQ8lXWoi5ZjhAx0ILZ&jump_from=webapi',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/WRXinYue',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=1964719510',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: 'E-Mail',
      link: 'mailto:wrxinyue@foxmail.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],

  comment: {
    enable: true,
  },

  mediumZoom: { enable: true },
})
