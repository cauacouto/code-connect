import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the app title', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Code Connect' })).toBeInTheDocument()
  })

  it('increments the counter when the button is clicked', async () => {
    render(<App />)

    await userEvent.click(screen.getByRole('button', { name: 'Count is 0' }))

    expect(screen.getByRole('button', { name: 'Count is 1' })).toBeInTheDocument()
  })
})
