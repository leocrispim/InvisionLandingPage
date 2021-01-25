import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import LandingPage from './Pages/LandingPage';
 
describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    screen.debug;
  });

  test('loads carousel main area', () => {
    render(<App />),

    expect(screen.findByRole('Carousel'))
  });

  test('loads welcome message', () => {
    render (<LandingPage />)

    expect(screen.getByText('Welcome to Invision')).toBeInTheDocument;
  })

  test('switch pages', async () => {
    render (<LandingPage />)

    fireEvent.click(screen.getByText('Create Account'))

    await expect(screen.findByText('Getting Started'))
  })

});