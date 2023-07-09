import './App.css';
import { SingleLight } from './components/SingleLight';
import { Text } from './components/Text';
import { Counter } from './components/counter';

function App() {
  return (
    <div>
      <nav className='nav'>
        <Text>0 bulbs</Text>
        <Counter text='rows' />
        <Counter text='columns' />
      </nav>
      <div>
        <SingleLight></SingleLight>
      </div>
    </div>
  );
}

export default App;
