
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from "./components/Main";
import './App.css'
import Blog from "./components/blog/Blog"
import SlideShow from './components/slideShow/SlideShow';
import { WordOmitter } from './components/wordOmitter/WordOmitter';


function App() {
   
   return (
      <>
         <div>
            <a href="https://vite.dev" target="_blank">
               <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
               <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
         </div>
         <hr />
         <h2>Launch CryptoConverter</h2>

         <Main />
<hr />
         <h2> Launch blog Post</h2>

         <Blog />
<hr />
         <h2>Launch SlideShow</h2>

         <SlideShow />
<hr />

         <h2>Launch WordOmitter</h2>
         <WordOmitter />   
      </>
   );
}

export default App;
