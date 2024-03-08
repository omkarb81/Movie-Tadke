import { Header } from "./components/Header";
import Movies from "./components/Movies";
import Movie from './movie.json';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        {
          Movie.map((element)=>{
            return(
           <Movies 
             title = {element.Title}
             img = {element.Poster}
             year = {element.Year} 
           />
            )
          })
        }
        
      </div>
    </div>
  );
}

export default App;
