import guitarapp from '../Assets/guitarapp.JPG'
import expenseapp from '../Assets/expense-calculator-app.JPG'
import todolist from '../Assets/todolist.JPG'
import cookie from '../Assets/cookie.JPG'
import ColorPalleteApp from '../Assets/color-pallete-app.JPG'
import RandomNumberApp from '../Assets/random-number-app.JPG'
import photogallery from '../Assets/photogallery.JPG'
import adviceapp from '../Assets/adviceapp.JPG'
import movieapp from '../Assets/movieapp.JPG'
import weswap from '../Assets/weswap.JPG'

const RecentProjectsData = [
  {
    id: 1,
    title: 'Guitar E-Commerce',
    text: 'This project taught me how to properly manage components and states. Since I have to use multiple states running through the program, I used useContext hook and Global state file to store all my state.',
    image: guitarapp,
    tags: ['React', 'Firebase', 'Stripe API'],
    link: 'https://philcobguitarshop.netlify.app/',
    github: 'https://github.com/pjguitar15/react-guitar-ecommerce'
  },
  {
    id: 2,
    title: 'Social Media App',
    text: 'This is my current project which is a CRUD app that Im still working on. To make it a dynamic website, I am working with MongoDB for my storing datas from user. My goal is to also be able to create my own full stack website',
    image: cookie,
    tags: ['Mern Stack'],
    link: 'https://friendly-sinoussi-7c07a3.netlify.app/',
    github: 'https://github.com/pjguitar15/react-cookie'
  },
  {
    id: 8,
    title: 'Movie App',
    text: 'A Movie Web Application with loads of movie data fetched from a third party api called "themoviedb".',
    image: movieapp,
    tags: ['React', 'CSS', 'Boostrap', 'External API'],
    link: 'https://laughing-bohr-e8ec18.netlify.app/',
    github: 'https://github.com/pjguitar15/react-movie-app'
  },
  {
    id: 3,
    title: 'Color Pallete App',
    text: 'One of my early React projects. Using useState, I was able to create the color change functionality. I used an npm package to handle the copy text function',
    image: ColorPalleteApp,
    tags: ['React', 'CSS'],
    link: 'https://naughty-bhabha-1a8174.netlify.app/',
    github: 'https://github.com/pjguitar15/react-color-pallete'
  },
  {
    id: 4,
    title: 'Random Number Generator',
    text: 'Using built in Javascript method, I was able to generate random numbers based on the user input. It is a very simple project but it can also be useful to some.',
    image: RandomNumberApp,
    tags: ['React', 'CSS'],
    link: 'https://boring-booth-4f6c67.netlify.app/',
    github: 'https://github.com/pjguitar15/react-random-number-generator'
  },
  {
    id: 5,
    title: 'Todo-list App',
    text: 'Todo list has always been known as the first step in learning React. This is one of my early React projects which taught me all about basics, its syntax, and understanding the concept of States and Lifecycle.',
    image: todolist,
    tags: ['React', 'CSS'],
    link: '#',
    github: 'https://github.com/pjguitar15/react-todolist-app'
  },
  {
    id: 10,
    title: 'We Swap App',
    text: 'An idea from my brother, based from buy and sell websites, this project is basically to let people interact and swap their items and negotiate.',
    image: weswap,
    tags: ['React', 'Under Development'],
    link: 'https://stoic-neumann-99f11b.netlify.app/',
    github: 'https://github.com/pjguitar15/react-we-swap'
  },
  {
    id: 6,
    title: 'Expense Tracker',
    text: 'One of my early simple projects I created using Vanilla Javascript. It is a cash tracker that allows user manage its money using cash in, cashout system and tracks expenses.',
    image: expenseapp,
    tags: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
    link: 'https://philcobexpensecalculator.netlify.app/',
    github: 'https://github.com/pjguitar15/expense-calculator'
  },
  {
    id: 7,
    title: 'Cat Photo Gallery',
    text: 'A very simple photo gallery that allows to preview photos from the gallery.',
    image: photogallery,
    tags: ['React', 'CSS', 'Boostrap'],
    link: 'https://cranky-wescoff-bef91e.netlify.app/',
    github: 'https://github.com/pjguitar15/react-photo-gallery'
  },
  {
    id: 8,
    title: 'Advice App',
    text: 'A very simple Advice Web Application that generates a random advice from an API.',
    image: adviceapp,
    tags: ['React', 'CSS', 'Boostrap'],
    link: 'https://modest-meninsky-058c79.netlify.app/',
    github: 'https://github.com/pjguitar15/react-advice-app'
  },

]

export default RecentProjectsData

