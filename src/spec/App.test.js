import App from '../App';
import CalculatorComponent from '../components/CalculatorComponent';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// This API is use to provide the link to component
Enzyme.configure({adapter:new Adapter()});  


describe('App', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));

  it('should render a <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Calculator Component', () => {
    expect(wrapper.containsMatchingElement(<CalculatorComponent/>)).toEqual(true);
  });

});

