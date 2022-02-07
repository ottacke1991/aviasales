import logo from './assets/logo.svg';
import checkboxOn from './assets/checkboxOn.svg'
import checkboxOff from './assets/checkboxOff.svg'
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
              <div className="filter-group">
                  <h3>Количество пересадок</h3>
                  <form>
                      <label>
                          <input type="checkbox"  className="input visually-hidden" />
                          <span className="checker"></span>
                          Все
                      </label>
                      <label>
                          <input type="checkbox"  className="input visually-hidden" />
                          <span className="checker"></span>
                          Без пересадок
                      </label>
                      <label>
                          <input type="checkbox"  className="input visually-hidden" />
                          <span className="checker"></span>
                          1 пересадка
                      </label>
                      <label>
                          <input type="checkbox"  className="input visually-hidden" />
                          <span className="checker"></span>
                          2 пересадки
                      </label>
                      <label>
                          <input type="checkbox"  className="input visually-hidden" />
                          <span className="checker"></span>
                          3 пересадки
                      </label>
                  </form>
              </div>
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
