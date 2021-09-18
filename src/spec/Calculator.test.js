import CalculatorComponent from '../components/CalculatorComponent'; 
import KeyPadComponent from '../components/KeyPadComponent';
import ResultComponent from '../components/ResultComponent';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// This API is use to provide the link to component
Enzyme.configure({adapter:new Adapter()});  

const handelonClick = jest.fn(({ target }) => target.name);

describe('CalculatorComponent', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<CalculatorComponent />));

  it('should render two div', () => {
    const wrapper = shallow(<CalculatorComponent />);
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('should render the Result Component', () => {
    expect(wrapper.containsMatchingElement(
      <ResultComponent result={wrapper.instance().state.result} />
    )).toEqual(true); 
  });
  

  it('should call onClick', () => {
    const keypad = shallow(<KeyPadComponent onClick={handelonClick}/>);
    keypad.find({ name: '+' }).simulate('click', { target: { name: '+' } });
    expect(handelonClick).toBeCalledWith('+');
});

});
 
