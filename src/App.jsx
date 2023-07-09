import './App.css';
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
    </div>
  );
}

export default App;
