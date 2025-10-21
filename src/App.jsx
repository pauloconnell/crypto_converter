
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
         <section>
         <h2>Launch CryptoConverter</h2>

         <Main />
         </section>
<hr />
         <section>
         <h2> Launch blog Post</h2>

         <Blog />
         </section>
<hr />
         <section>
         <h2>Launch SlideShow</h2>

         <SlideShow />
         </section>
<hr />
         <section>
         <h2>Launch WordOmitter</h2>
         <WordOmitter />   
         </section>
      </>
   );
}

export default App;
