import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import NavBar from './Components/NavBar';
import MealCard from './Components/MealCard';
import MyDay from './Components/MyDay';
import { Background } from 'devextreme-react/range-selector';
import { red } from '@mui/material/colors';
function App() {

  return (
    <div className="App"
    style={{background:'', margin:0, padding:0}}>
      <MyDay></MyDay>
    </div>
  );
}

export default App;
