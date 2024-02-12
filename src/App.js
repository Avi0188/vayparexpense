import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Header from './component/Header';
import ExpenseDrawer from './component/ExpenseDrawer';
import MainRoute from './MainRoute';

function App() {
  return (
    <div className="App">
   <Navbar />
   {/* <Header /> */}
  <MainRoute />
 
    </div>
  );
}

export default App;
