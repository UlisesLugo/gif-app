import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'Packers';
  test('debe de mostrar el loading incialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Packers',
        url: 'https://localhost/packers.jpg',
      },
      {
        id: '123',
        title: 'Aaron Rodgers',
        url: 'https://localhost/arod.jpg',
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
