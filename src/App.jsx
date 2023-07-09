import './App.css';
import { Text } from './components/Text';
import { Counter } from './components/counter';

function App() {
  return (
    <div>
      <nav className='nav'>
        <Text>0 bulbs</Text>
        <Counter text='rows' count='0' />
        <Counter text='columns' count='0' />
      </nav>
    </div>
  );
}

export default App;
