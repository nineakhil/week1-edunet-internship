import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from '../Components/header'
import Search from '../Components/Search'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>    
    <Header />
    <Search />
    <Cards />
    <br /><br />
    <Footer />
  </StrictMode>,
)
