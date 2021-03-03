import guitarapp from '../Assets/guitarapp.JPG'
import expenseapp from '../Assets/expense-calculator-app.JPG'
import todolist from '../Assets/todolist.JPG'
import ColorPalleteApp from '../Assets/color-pallete-app.JPG'
import RandomNumberApp from '../Assets/random-number-app.JPG'

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
    title: 'Todo-list App',
    text: 'Todo list has always been known as the first step in learning React. This is one of my early React projects which taught me all about basics, its syntax, and understanding the concept of States and Lifecycle.',
    image: todolist,
    tags: ['React', 'CSS'],
    link: '#',
    github: 'https://github.com/pjguitar15/react-todolist-app'
  },
  {
    id: 3,
    title: 'Expense Tracker',
    text: 'One of my early simple projects I created using Vanilla Javascript. It is a cash tracker that allows user manage its money using cash in, cashout system and tracks expenses.',
    image: expenseapp,
    tags: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
    link: 'https://philcobexpensecalculator.netlify.app/',
    github: 'https://github.com/pjguitar15/expense-calculator'
  },
  {
    id: 4,
    title: 'Color Pallete App',
    text: 'One of my early React projects. Using useState, I was able to create the color change functionality. I used an npm package to handle the copy text function',
    image: ColorPalleteApp,
    tags: ['React', 'CSS'],
    link: 'https://naughty-bhabha-1a8174.netlify.app/',
    github: 'https://github.com/pjguitar15/react-color-pallete'
  },
  {
    id: 5,
    title: 'Random Number Generator',
    text: 'Using built in Javascript method, I was able to generate random numbers based on the user input. It is a very simple project but it can also be useful to some.',
    image: RandomNumberApp,
    tags: ['React', 'CSS'],
    link: 'https://boring-booth-4f6c67.netlify.app/',
    github: 'https://github.com/pjguitar15/react-random-number-generator'
  }
]

export default RecentProjectsData

