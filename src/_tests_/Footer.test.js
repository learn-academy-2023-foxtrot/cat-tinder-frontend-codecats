import { screen, render } from "@testing-library/react" 
import Footer from '../components/Footer'
import { BrowserRouter } from "react-router-dom"

describe ("<Footer />", () => {
    it ("renders without crashing", () => {
        render(
         <BrowserRouter>
        <Footer />
        </BrowserRouter>
        )
      
   
    const homeLink = screen.getByRole('link', {
    name: /home/i
    })
    expect(homeLink).toBeInTheDocument()
  })
  
})