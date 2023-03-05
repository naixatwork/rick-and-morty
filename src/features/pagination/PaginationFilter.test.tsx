import {render, fireEvent, getByTestId} from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import PaginationFilter, { PaginationFilterProps } from './PaginationFilter';
import { vi } from 'vitest'

describe('PaginationFilter component', () => {
    const props: PaginationFilterProps = {
        page: '2',
        pagination: {
            count: 10,
            pages: 3,
            next: '3',
            prev: '1',
        },
        onIncrementClick: vi.fn(),
        onDecrementClick: vi.fn(),
    };

    it('renders correctly', () => {
        const tree = renderer.create(<PaginationFilter {...props} />).toJSON();
        expect(tree).toBeTruthy();
    });

    it('displays the current page and total pages', () => {
        const { getByText } = render(<PaginationFilter {...props} />);
        expect(getByText('2 / 3')).toBeTruthy();
    });

    it('displays the total count', () => {
        const { getByText } = render(<PaginationFilter {...props} />);
        expect(getByText('total: 10')).toBeTruthy();
    });

    it('disables the prev button when there is no previous page', () => {
        const props: PaginationFilterProps = {
            page: '2',
            pagination: {
                count: 10,
                pages: 3,
                next: '3',
                prev: null,
            },
            onIncrementClick: vi.fn(),
            onDecrementClick: vi.fn(),
        };

        const { getByTestId } = render(<PaginationFilter {...props} />);
        const button = getByTestId('prevPage') as HTMLButtonElement;
        expect(button.disabled).toBeTruthy();
    });

    it('disables the next button when there is no next page', () => {
        const props: PaginationFilterProps = {
            page: '2',
            pagination: {
                count: 10,
                pages: 3,
                next: null,
                prev: "1",
            },
            onIncrementClick: vi.fn(),
            onDecrementClick: vi.fn(),
        };

        const { getByTestId } = render(<PaginationFilter {...props} />);
        const button = getByTestId('nextPage') as HTMLButtonElement;
        expect(button.disabled).toBeTruthy();
    });

    it('calls onDecrementClick when the prev button is clicked', () => {
        const { getByTestId } = render(<PaginationFilter {...props} />);
        fireEvent.click(getByTestId('prevPage'));
        expect(props.onDecrementClick).toHaveBeenCalledWith('1');
    });

    it('calls onIncrementClick when the next button is clicked', () => {
        const { getByTestId } = render(<PaginationFilter {...props} />);
        fireEvent.click(getByTestId('nextPage'));
        expect(props.onIncrementClick).toHaveBeenCalledWith('3');
    });
});
