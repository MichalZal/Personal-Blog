import './styles/scss/App.css'
import Main from './Components/Main/Main'
// import Header from './Components/Header/Header';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Main />
  </StrictMode>,
);


export default App;
