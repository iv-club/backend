import './App.css';
import Customer from './components/Customer';

const customer = {
  'name' : '김진우',
  'birthday' : '950521',
  'gender' : 'man',
  'job' : 'programmer'
}
function App() {
  return (
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}

export default App;
