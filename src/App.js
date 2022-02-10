import logo from './assets/logo.svg';
import ticket from './assets/ticket.svg';
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
                  <div className="ticket-option ticket-option__left-sided">Самый дешевый</div>
                  <div className="ticket-option ticket-option__center">Самый быстрый</div>
                  <div className="ticket-option ticket-option__right-sided">Оптимальный</div>
              </div>
              <div className="ticket-list">
                  <div className="ticket">
                      <div className="ticket__header">
                          <div className="ticket__price">13 400 Р</div>
                          <div className="ticket__logo">
                              <img src={ticket} alt="S7" />
                          </div>
                      </div>
                      <div className="ticket__body">
                          <div className="ticket__segment">
                              <div className="ticket-segment__flight">
                                  <p className="ticket-segment__flight-label">MOV - HKT</p>
                                  <p className="ticket-segment__flight-value">10:45 - 8:00</p>
                              </div>
                              <div className="ticket-segment__flight">
                                  <p className="ticket-segment__flight-label">В ПУТИ</p>
                                  <p className="ticket-segment__flight-value">21ч 15м</p>
                              </div>
                              <div className="ticket-segment__flight">
                                  <p className="ticket-segment__flight-label">2 ПЕРЕСАДКИ</p>
                                  <p className="ticket-segment__flight-value">HKG, JNB</p>
                              </div>
                          </div>
                          <div className="ticket__segment">
                          <div className="ticket-segment__flight">
                              <p className="ticket-segment__flight-label">MOV - HKT</p>
                              <p className="ticket-segment__flight-value">10:45 - 8:00</p>
                          </div>
                          <div className="ticket-segment__flight">
                              <p className="ticket-segment__flight-label">В ПУТИ</p>
                              <p className="ticket-segment__flight-value">21ч 15м</p>
                          </div>
                          <div className="ticket-segment__flight">
                              <p className="ticket-segment__flight-label">2 ПЕРЕСАДКИ</p>
                              <p className="ticket-segment__flight-value">HKG, JNB</p>
                          </div>
                      </div>
                      </div>
                  </div>
                  <div className="ticket">
                      <div className="ticket__header">
                          <div className="ticket__price">13 400 Р</div>
                          <div className="ticket__logo">
                              <img src={ticket} alt="S7" />
                          </div>
                      </div>
                      <div className="ticket__body">
                          <div className="ticket__segment">
                              <div className="ticket-segment__flight">
                                  <p className="ticket-segment__flight-label">MOV - HKT</p>
                                  <p className="ticket-segment__flight-value">10:45 - 8:00</p>
                              </div>
                              <div className="ticket-segment__flight">
                                  <p className="ticket-segment__flight-label">В ПУТИ</p>
                                  <p className="ticket-segment__flight-value">21ч 15м</p>
                              </div>
                              <div className="ticket-segment__flight">
                                  <p className="ticket-segment__flight-label">2 ПЕРЕСАДКИ</p>
                                  <p className="ticket-segment__flight-value">HKG, JNB</p>
                              </div>
                          </div>
                          <div className="ticket__segment">
                          <div className="ticket-segment__flight">
                              <p className="ticket-segment__flight-label">MOV - HKT</p>
                              <p className="ticket-segment__flight-value">10:45 - 8:00</p>
                          </div>
                          <div className="ticket-segment__flight">
                              <p className="ticket-segment__flight-label">В ПУТИ</p>
                              <p className="ticket-segment__flight-value">21ч 15м</p>
                          </div>
                          <div className="ticket-segment__flight">
                              <p className="ticket-segment__flight-label">2 ПЕРЕСАДКИ</p>
                              <p className="ticket-segment__flight-value">HKG, JNB</p>
                          </div>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
