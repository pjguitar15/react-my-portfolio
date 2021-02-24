import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import RecentProjects from './components/Skills/RecentProjects.jsx'
import SkillsSection from './components/Skills/SkillsSection.jsx'
import ContactPage from './components/Contact/ContactPage.jsx'
import BioPage from './components/Bio/BioPage.jsx'
import Footer from './components/Footer/Footer.jsx'
import GlobalState from './GlobalState'
const App = () => {
  return (
    <div>
      <GlobalState>
        <Home />
        <RecentProjects />
        <BioPage />
        <SkillsSection />
        <ContactPage />
        <Footer />
      </GlobalState>
    </div>
  )
}

export default App
