import { render, screen, fireEvent } from '@testing-library/react'; 
import { Entry } from '../../components/Entry';
import { InitialState } from '../../state/entry';

test('Title click completes item.', () => {
    const CLICK_TITLE = 'CLICK_TITLE';
    render(<Entry entry={{...InitialState, title: CLICK_TITLE}} onSelect={() => {}} onUpdate={() => {}}></Entry>);
    const clickElement = screen.getByText(CLICK_TITLE);

    // Initial State not completed
    expect(clickElement.classList.contains('completed')).toBe(false);

    // Completed after click event.
    fireEvent.click(clickElement, {button:1});
    expect(clickElement.classList.contains('completed')).toBe(true);
});