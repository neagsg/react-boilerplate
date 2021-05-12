import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  render(<Main />)
  it('Should render title', () => {
    expect(
      screen.getByRole('heading', {
        name: /react avançado/i
      })
    ).toBeInTheDocument()
  })
})
