import { render, screen } from '@testing-library/react'

import OldApp from '../src/OldApp';
import { describe, it } from 'vitest';

describe('App', () => {
    it('renders headline', () => {
        render(<OldApp title="react" />);

        screen.debug();

        // check if App components renders headline
    });
});