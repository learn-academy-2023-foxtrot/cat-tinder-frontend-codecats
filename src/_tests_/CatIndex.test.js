import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import CatIndex from "../pages/CatIndex"
import codeCats from "../MockCats"

describe('<CatIndex />', () => {
    it('renders cat info', () => {
        render(
            <BrowserRouter>
              <CatIndex cats={codeCats} />
            </BrowserRouter>
        )
        codeCats.forEach((cat) => {
            const altTxt = screen.getAllByAltText(/image of/i)
            screen.debug(altTxt[0])
            expect(altTxt[0]).toBeInTheDocument
        })
    })
})