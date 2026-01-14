import { render, screen } from '@testing-library/react'

import App from '../src/App';
import { describe, it } from 'vitest';

describe('App', () => {
    it('renders headline', () => {
        render(<App title="react" />);

        screen.debug();

        // check if App components renders headline
    });
});