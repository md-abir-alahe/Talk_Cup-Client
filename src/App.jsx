import './App.css'
import FaqBlog from './components/FaqBlog/FaqBlog'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <hr className='line' />
      <Main></Main>
      <hr className='line' />
      <FaqBlog></FaqBlog>
    </div>
  )
}

export default App
