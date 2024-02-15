import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Header from './component/Header';
import ExpenseDrawer from './component/ExpenseDrawer';
import MainRoute from './MainRoute';
import Expense from './component/Expense';
import ExpenseNav from './component/ExpenseNav';


function App() {
  return (
    <div className="App">
   <Navbar />
   {/* <Header /> */}
  <MainRoute />
  {/* <Expense/> */}

 
    </div>
  );
}

export default App;
