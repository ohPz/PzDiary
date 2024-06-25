import Dropdown from './components/Dropdown';
import './Index.css'; // 예시 경로
import Hanul from './container/Hanul';

const App = () => {
  return (
    <>
      <Hanul>
        <Dropdown />
      </Hanul>
    </>
  );
};

export default App;
