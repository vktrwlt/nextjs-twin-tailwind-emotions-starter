import Button from '@/components/Button/Button';
import { render, fireEvent } from '@/utils/test-utils';

describe('<Button />', () => {
  const { asFragment } = render(<Button />);
  it('should render without crashing', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
