import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '김진우',
  'birthday' : '950521',
  'gender' : 'man',
  'job' : 'programmer'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '홍길동',
  'birthday' : '950717',
  'gender' : 'man',
  'job' : 'programmer'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '이순신',
  'birthday' : '021205',
  'gender' : 'man',
  'job' : '디자이너'
}
]

function App() {
  return (
    <div>
      {
        customers.map(c=> {
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.name}
              gender={c.gender}
              job={c.job}
            />
          );
        })
      }
</div>
  );
}

export default App;
