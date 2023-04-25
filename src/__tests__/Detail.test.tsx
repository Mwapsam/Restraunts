import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Details from '../pages/Details';
import { store } from '../store/store';
import '@testing-library/jest-dom/extend-expect';

describe('Detail component', () => {
  test('renders restaurant name', () => {
    render(
      <Provider store={store}>
        <Details />
      </Provider>
    );
    const restaurantName = screen.getByText('Reviews');
    expect(restaurantName).toBeInTheDocument();
  });
});
