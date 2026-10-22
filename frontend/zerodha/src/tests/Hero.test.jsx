import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Hero from '../landing_page/home/Hero';

describe('Hero component', () => {
  test('renders the Hero component', () => {
    render(<Hero />);

    const heroImage = screen.getByAltText('Hero Image');

    expect(heroImage).not.toBeNull();
    expect(heroImage.getAttribute('src')).toBe('/media/homeHero.png');
  });
});