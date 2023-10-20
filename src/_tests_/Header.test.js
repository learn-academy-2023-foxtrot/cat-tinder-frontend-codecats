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
        //const element = screen.getByText("Home Page")
   
    const homeLink = screen.getByRole('link', {
    name: /home/i
  })
  
        //Assert
        expect(homeLink).toBeInTheDocument()
    })
})
