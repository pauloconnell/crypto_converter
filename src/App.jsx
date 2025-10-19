
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from "./components/Main";
import './App.css'
import Blog from "./components/blog/Blog"

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
         <h2>Launch CryptoConverter</h2>

         <Main />

         <h2> Launch blog Post</h2>

         <Blog />

      </>
   );
}

export default App;
