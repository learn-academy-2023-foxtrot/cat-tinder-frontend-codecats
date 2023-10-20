
import { screen, render } from "@testing-library/react" 
import Home from '../pages/Home'

describe ("<Home />", () => {
    it ("renders without crashing", () => {
        render(<Home/>)
        //const element = screen.getByText("Home Page")
    const headingTitle = screen.getByRole('heading', {
    name: /welcome to code/i
  })
  
    
        //Assert
        expect(headingTitle).toBeInTheDocument()
    })
})

