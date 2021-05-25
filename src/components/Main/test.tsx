import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('Should render title', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', {
        name: /react/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild)
  })

  it('Should render style', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    })
  })
})
