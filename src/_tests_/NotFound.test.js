import { screen, render } from "@testing-library/react" 
import NotFound from '../pages/NotFound'
import { BrowserRouter } from "react-router-dom"

describe ("<NotFound />", () => {
    it ("renders without crashing", () => {
        render(
         <BrowserRouter>
          <NotFound />
        </BrowserRouter>
        )
        
  
        const notFound = screen.getByRole('heading', {
         name: /Error:/i
        })
  
        //Assert
        expect(notFound).toBeInTheDocument()
    })
})

