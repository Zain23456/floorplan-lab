import './App.css';
import Bedroom from './Bedroom';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';

function App() {
  return (
    <>
      <Bedroom bedNum={1} />
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum={2} />
      <Bedroom bedNum={3} />
    </>
  );
}

export default App;
