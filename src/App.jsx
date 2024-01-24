import './App.css'
import Navigation from './components/Navigation';
import Side from './components/Side';
const App = () => {  //capital letter so it's not function it's a component
  return (
<div>
<Navigation/>
    <Side/>
</div>
  );
};
export default App;