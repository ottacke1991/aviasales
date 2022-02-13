import logo from './assets/logo.svg';
import ticket from './assets/ticket.svg';
import checkboxOn from './assets/checkboxOn.svg'
import checkboxOff from './assets/checkboxOff.svg'
import './App.css';
import React, {useEffect, useRef, useState} from 'react'

function App() {
    const ticketsRef = useRef([])
    const [searchId, setSearchId] = useState()
    const [tickets, setTickets] = useState([])
    const [sortedTickets, setSortedTickets] = useState([])
    const [isStoped, setIsStoped] = useState(false)


    useEffect(() => {
        if (isStoped) {
            console.log('SOrted finish')
            setSortedTickets(tickets.slice(0, 5))
        }
    }, [isStoped])
    useEffect(() => {
        fetch("https://front-test.beta.aviasales.ru/search")
            .then(data => data.json())
            .then(data => {
                setSearchId(data.searchId)
                console.log(data.searchId)
            })
            .catch(e => console.log(e))
    }, [])
    useEffect(() => {
        if (searchId && !isStoped) {
            async function subscribe() {
                let response = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
                // console.log(response.json().then(data => console.log(data)))
                if (response.status === 502) {
                    // Статус 502 - это таймаут соединения;
                    // возможен, когда соединение ожидало слишком долго
                    // и сервер (или промежуточный прокси) закрыл его
                    // давайте восстановим связь
                    await subscribe();
                } else if (response.status != 200) {
                    // Какая-то ошибка, покажем её
                    console.error(response.statusText)
                    // Подключимся снова через секунду.
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    await subscribe();
                } else {
                    // Получим и покажем сообщение
                    let ticketsPart = await response.json();

                    ticketsRef.current = [...ticketsRef.current, ticketsPart.tickets]


                    if (ticketsPart.stop) {
                        const reduce = ticketsRef.current.reduce((acc, item) => {
                            return acc.concat(item)
                        }, [])
                        setTickets(reduce)
                        setIsStoped(ticketsPart.stop)
                    } else {
                        await subscribe();
                    }
                    //
                    // if(!ticketsPart.stop) {
                    //     await subscribe()
                    // } else {
                    // }

                    // И снова вызовем subscribe() для получения следующего сообщения
                }
            }

            subscribe();
        }
    }, [searchId, isStoped])


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
                                    <input
                                        type="checkbox"
                                        className="input visually-hidden"/>
                                    <span className="checker"></span>
                                    Все
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="input visually-hidden"/>
                                    <span className="checker"></span>
                                    Без пересадок
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="input visually-hidden"/>
                                    <span className="checker"></span>
                                    1 пересадка
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="input visually-hidden"/>
                                    <span className="checker"></span>
                                    2 пересадки
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="input visually-hidden"/>
                                    <span className="checker"></span>
                                    3 пересадки
                                </label>
                            </form>
                        </div>
                    </div>
                    <div className="app__content">
                        <div className="ticket-option-group">
                            <div className="ticket-option ticket-option__left-sided ticket-option__pressed">Самый
                                дешевый
                            </div>
                            <div className="ticket-option ticket-option__center">Самый быстрый</div>
                            <div className="ticket-option ticket-option__right-sided">Оптимальный</div>
                        </div>
                        <div className="ticket-list">
                            {sortedTickets.map((ticketItem) => (
                                <div className="ticket">
                                    <div className="ticket__header">
                                        <div className="ticket__price">{ticketItem.price}</div>
                                        <div className="ticket__logo">
                                            <img
                                                src={ticket}
                                                alt="S7"/>
                                        </div>
                                    </div>
                                    <div className="ticket__body">
                                        {ticketItem.segments.map(segment => (
                                            <div className="ticket__segment">
                                                <div className="ticket-segment__flight">
                                                    <p className="ticket-segment__flight-label">{segment.origin} - {segment.destination}</p>
                                                    <p className="ticket-segment__flight-value">{segment.date}</p>
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
                                        ))}
                                </div>
                                </div>
                                ))}

                                {/*<div className="ticket">*/}
                                {/*    <div className="ticket__header">*/}
                                {/*        <div className="ticket__price">13 400 Р</div>*/}
                                {/*        <div className="ticket__logo">*/}
                                {/*            <img*/}
                                {/*                src={ticket}*/}
                                {/*                alt="S7"/>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className="ticket__body">*/}
                                {/*        <div className="ticket__segment">*/}
                                {/*            <div className="ticket-segment__flight">*/}
                                {/*                <p className="ticket-segment__flight-label">MOV - HKT</p>*/}
                                {/*                <p className="ticket-segment__flight-value">10:45 - 8:00</p>*/}
                                {/*            </div>*/}
                                {/*            <div className="ticket-segment__flight">*/}
                                {/*                <p className="ticket-segment__flight-label">В ПУТИ</p>*/}
                                {/*                <p className="ticket-segment__flight-value">21ч 15м</p>*/}
                                {/*            </div>*/}
                                {/*            <div className="ticket-segment__flight">*/}
                                {/*                <p className="ticket-segment__flight-label">2 ПЕРЕСАДКИ</p>*/}
                                {/*                <p className="ticket-segment__flight-value">HKG, JNB</p>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <div className="ticket__segment">*/}
                                {/*            <div className="ticket-segment__flight">*/}
                                {/*                <p className="ticket-segment__flight-label">MOV - HKT</p>*/}
                                {/*                <p className="ticket-segment__flight-value">10:45 - 8:00</p>*/}
                                {/*            </div>*/}
                                {/*            <div className="ticket-segment__flight">*/}
                                {/*                <p className="ticket-segment__flight-label">В ПУТИ</p>*/}
                                {/*                <p className="ticket-segment__flight-value">21ч 15м</p>*/}
                                {/*            </div>*/}
                                {/*            <div className="ticket-segment__flight">*/}
                                {/*                <p className="ticket-segment__flight-label">2 ПЕРЕСАДКИ</p>*/}
                                {/*                <p className="ticket-segment__flight-value">HKG, JNB</p>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="ticket">*/}
                                {/*    <div className="ticket__header">*/}
                                {/*        <div className="ticket__price">13 400 Р</div>*/}
                                {/*        <div className="ticket__logo">*/}
                                {/*            <img*/}
                                {/*                src={ticket}*/}
                                {/*                alt="S7"/>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className="ticket__body">*/}
                                {/*        <div className="ticket__segment">*/}
                                {/*            <div className="ticket-segment__flight">*/}
                                {/*                <p className="ticket-segment__flight-label">MOV - HKT</p>*/}
                                {/*                <p className="ticket-segment__flight-value">10:45 - 8:00</p>*/}
                                {/*            </div>*/}
                                {/*            <div className="ticket-segment__flight">*/}
                                {/*                <p className="ticket-segment__flight-label">В ПУТИ</p>*/}
                                {/*                <p className="ticket-segment__flight-value">21ч 15м</p>*/}
                                {/*            </div>*/}
                                {/*            <div className="ticket-segment__flight">*/}
                                {/*                <p className="ticket-segment__flight-label">2 ПЕРЕСАДКИ</p>*/}
                                {/*                <p className="ticket-segment__flight-value">HKG, JNB</p>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <div className="ticket__segment">*/}
                                {/*            <div className="ticket-segment__flight">*/}
                                {/*                <p className="ticket-segment__flight-label">MOV - HKT</p>*/}
                                {/*                <p className="ticket-segment__flight-value">10:45 - 8:00</p>*/}
                                {/*            </div>*/}
                                {/*            <div className="ticket-segment__flight">*/}
                                {/*                <p className="ticket-segment__flight-label">В ПУТИ</p>*/}
                                {/*                <p className="ticket-segment__flight-value">21ч 15м</p>*/}
                                {/*            </div>*/}
                                {/*            <div className="ticket-segment__flight">*/}
                                {/*                <p className="ticket-segment__flight-label">2 ПЕРЕСАДКИ</p>*/}
                                {/*                <p className="ticket-segment__flight-value">HKG, JNB</p>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                </div>
                                <div className="show-more-tickets">
                                <button
                                className="show-more-tickets__button"
                                type="button"
                                data-test-id="button">
                                <div className="show-more-tickets__button-label">Показать еще 5 билетов!</div>
                                </button>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                );
                                }

                                export default App;
