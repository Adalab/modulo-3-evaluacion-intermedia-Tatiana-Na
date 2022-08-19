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
const [filter, setFilter] = useState('');

const allInfo = data
.filter ((info) => {
  return info.quote.toLowerCase().includes(filter.toLowerCase())
 
})
.map((info) => {
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

const handleFilter = (ev) => {
  setFilter(ev.target.value)
}




  return ( 
  <>
  <h2>Frases de Friends</h2>
  {allInfo}
  <form>
  <label htmlFor="new_phrase" className="text-fill">Frase</label>
          <input
            className="new"
            type="text"
            name="phrase"
            id="quote"
            value = {newInfo.quote}
            onChange = {handleNewInfo}
            

          />
          <label htmlFor="new_character" className="text-fill">Personaje</label>
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

        <form>
  <label htmlFor="new_filter_quote" className="filter_quote">Filtrar por frase</label>
          <input
            className="filter_what"
            type="text"
            name="phrase"
            id="quote"
            value = {filter}
            onChange = {handleFilter}
            

          />
          <label htmlFor="new_filter_character" className="filter_character">Filtrar por personaje</label>
          <input
            className="filter_who"
            type="text"
            name="character"
            id="character"
            value = {filter}
           
          />
          
        </form>
  </>
  );

}

export default App;
