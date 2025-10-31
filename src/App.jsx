
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from "./components/Main";
import './App.css'
import Blog from "./components/blog/Blog"
import SlideShow from './components/slideShow/SlideShow';
import WordOmitter from './components/wordOmitter/WordOmitter';
import ContactForm from './components/contactForm/ContactForm';
import EmployeeValidationForm from './components/employeeValidationForm/EmployeeValidationForm';
import CodeReviewFeedback from './components/codeReviewFeedback/CodeReviewFeedback';
import ArticleSort from './components/articleSort/ArticleSort';
import { ARTICLES_DATA } from './data/articlesData';


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
         <hr />
         <section>
         <h2>Launch Contact Form</h2>
         <ContactForm />
         </section>
           <hr />
         <section>
         <h2>Launch Employee Validation Form</h2>
         <EmployeeValidationForm />
         </section>
             <hr />
         <section>
         <h2>Launch Code Review Feedback</h2>
         <CodeReviewFeedback />
         </section>
          <section>
         <h2>Launch Article Sort</h2>
         <ArticleSort articles={ARTICLES_DATA} />
         </section>
      </>
   );
}

export default App;
