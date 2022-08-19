import logo from '../images/logo.svg';
import '../styles/App.scss';
import information from '../data/information.json'
import { useState } from 'react';

function App() {

const [data, setData] = useState(information);
const allInfo = data.map((info) => {
  return (
<li className="phrase_card">
            <p>
              <label className="phrase">{info.quote}</label>
            </p>
            <p>
              <label className="phrase_author">{info.character}</label>
            </p>
          </li>
  );
});

  return ( 
  <>
  <h2>Frases de Friends</h2>
  {allInfo}
  </>
  );

}

export default App;
