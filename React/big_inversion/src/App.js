import './App.css';
import PersonCard from './components/PersonCard';

var peopleArr =[
  {"firstName":"Doe", "lastName":"Jane", "age":45, "hairColor":"Black"},
  {"firstName":"Smith", "lastName":"John","age":88,"hairColor":"Brown"},
  {"firstName":"Fillmore", "lastName":"Millard","age":50,"hairColor":"Brown"},
  {"firstName":"Smith", "lastName":"Maria","age":62,"hairColor":"Brown"}
]

function App() {
  return (
    <div className="App">
      <div>
        {peopleArr.map(person => {
          return <PersonCard firstname={person.firstName} lastname={person.lastName} 
          age={person.age} haircolor={person.hairColor} />
        })
        }
      </div>
    </div>
  );
}

export default App;
