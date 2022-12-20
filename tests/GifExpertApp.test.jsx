import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
  const repeatedSearch = 'Packers';
  const newSearch = 'Seahawks';
  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el titulo', () => {
    render(<GifExpertApp />);
    expect(screen.findByText('GifExpertApp')).toBeTruthy();
  });

  test('no debe de actualizar gifs con clave repetida', () => {
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: repeatedSearch } });
    fireEvent.submit(form);

    expect(screen.getAllByText(repeatedSearch).length).toBe(1);
  });

  test('devbe de actualizar gifs con nueva clave', () => {
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: newSearch } });
    fireEvent.submit(form);

    expect(screen.getAllByText(newSearch).length).toBe(1);
  });
});
