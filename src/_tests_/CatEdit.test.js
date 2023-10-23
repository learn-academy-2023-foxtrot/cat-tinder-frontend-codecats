import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CatEdit from '../pages/CatEdit'

describe('<CatEdit />', () => {
    it('renders a heading on cat edit page', () => {
        render(
            <BrowserRouter>
                <CatEdit />
            </BrowserRouter>
        )

            const newHeading = screen.getByRole('heading', {
                name: /update/i
            }) 

            expect(newHeading).toHaveTextContent("Update Your Cat")
    })
})