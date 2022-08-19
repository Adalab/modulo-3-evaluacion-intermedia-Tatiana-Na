import logo from '../images/logo.svg';
import '../styles/App.scss';
import information from '../data/information.json'
import { useState } from 'react';

function App() {

const [data, setData] = useState(information);
const [newInfo, setNewInfo] = useState(
  {
    quote: " ",
    character: " ",
  }
);


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

const handleNewInfo = (ev) => {
  setNewInfo({
    ...newInfo,
    [ev.target.id]: ev.target.value
  });
  console.log(ev.target.value);
}

const handleClick = (ev) => {
ev.preventDefault();
setData([...data, newInfo]);
setNewInfo( 
{
  quote: " ",
  character: " ",
}
)};




  return ( 
  <>
  <h2>Frases de Friends</h2>
  {allInfo}
  <form>
  <label for="new_phrase" className="text-fill">Frase</label>
          <input
            className="new"
            type="text"
            name="phrase"
            id="quote"
            value = {newInfo.quote}
            onChange = {handleNewInfo}
            

          />
          <label for="new_character" className="text-fill">Personaje</label>
          <input
            className="new"
            type="text"
            name="character"
            id="character"
            value = {newInfo.character}
            onChange = {handleNewInfo}
       
          />
          <input className="new_phrase_btn" type="button" value="Añadir la nueva frase" onClick={handleClick} />
        </form>
  </>
  );

}

export default App;
