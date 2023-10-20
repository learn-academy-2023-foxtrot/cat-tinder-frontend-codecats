import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CatNew from '../pages/CatNew'

describe('<CatNew />', () => {
    it('renders a heading on cat new page', () => {
        render(
            <BrowserRouter>
                <CatNew />
            </BrowserRouter>
        )

            const newHeading = screen.getByRole('heading', {
                name: /new cat/i
            }) 

            screen.debug(newHeading)
            expect(newHeading).toHaveTextContent("New Cat")
    })
})