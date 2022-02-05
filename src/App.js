import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app__container">
        <div className="app__header">
            <img src={logo}/>
        </div>
        <div className="app__main">
          <div className="app__sidebar">
              1
          </div>
          <div className="app__content">
              <div className="ticket-option-group">
                  1
              </div>
              <div className="product-list">
                  <div className="product-list__item">1</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
