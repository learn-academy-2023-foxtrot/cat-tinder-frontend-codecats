import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe("<App />", () => {
  it("renders a greeting", () => {
    render (
      <BrowserRouter>
      <App />
      </BrowserRouter>
    )//END OF RENDER



      const greeting = screen.getByRole('heading', {
        name: /welcome to code cats!/i
      })

      expect(greeting).toBeInTheDocument()

  })
})

