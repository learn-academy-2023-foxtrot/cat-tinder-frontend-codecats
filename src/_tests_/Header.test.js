import { screen, render } from "@testing-library/react" 
import Header from '../components/Header'
import { BrowserRouter } from "react-router-dom"

describe ("<Header />", () => {
    it ("renders without crashing", () => {
        render(
         <BrowserRouter>
           <Header />
        </BrowserRouter>
        )
        
   
        const homeLink = screen.getByRole('link', {
         name: /home/i
        })
  
       
        expect(homeLink).toBeInTheDocument()
    })
})
