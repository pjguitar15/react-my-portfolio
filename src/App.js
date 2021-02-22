import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home.jsx'
import SkillsSection from './components/Skills/SkillsSection.jsx'
import ContactPage from './components/Contact/ContactPage.jsx'
import GlobalState from './GlobalState'
const App = () => {
  return (
    <div>
      <GlobalState>
        <Home />
        <SkillsSection />
        <ContactPage />
      </GlobalState>
    </div>
  )
}

export default App
