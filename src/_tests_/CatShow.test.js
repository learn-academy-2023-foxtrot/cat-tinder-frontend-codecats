import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import CatShow from "../pages/CatShow"
import codeCats from "../MockCats"

describe('<CatShow />', () => {
    it('renders cat info', () => {
        render(
        <MemoryRouter initialEntries={["/catshow/1"]}>
            <Routes>
              <Route path="/catshow/:id" element={<CatShow cats={codeCats} />} />
            </Routes>
        </MemoryRouter>
           
        )
        const catName = screen.getByRole("heading", {
            name: /Show Cat/i
        })
    })
})