import React, {useEffect, useState} from 'react';
import './App.css';
import './resetcss/reset.css'
import axios from "axios";
import {Spinner} from "./components/Spinner/Spinner";

axios.defaults.baseURL = 'https://us-central1-eurolife-dp-ua.cloudfunctions.net/api'

function App() {
    const [records, setRecords] = useState([])

    const toDate = time => {
        let result
        if (typeof time === 'string') {
            let date = Date.parse(time)
            let newDate = new Date(null)
            newDate.setTime(date)
            result = newDate.toLocaleString()
        } else {
            let date = new Date(null)
            date.setTime(time * 1000)
            result = date.toLocaleString()
        }

        return result
    }

    useEffect(() => {
        const getRecords = async() => {
            const response = await axios.get(`/records`)

            setRecords(response.data.map(doc => ({
                record: doc,
            })))
        }

        getRecords()

    }, [])

    return (
        <div className="App">
            <div className="records">
                {records.length ? (
                    records.map(({record}) => (
                        <div className="records__item" key={record.timestamp._seconds ? record.timestamp._seconds : record.timestamp}>
                            <div className="records__item-name">
                                <p className="records__title">Имя</p>
                                {record.name}
                            </div>
                            <div className="records__item-name">
                                <p className="records__title">Врач или направление</p>
                                {record.service}
                            </div>
                            <div className="records__item-name">
                                <p className="records__title">Телефон</p>
                                {record.phone}
                            </div>
                            <div className="records__item-name">
                                <p className="records__title">Время оставления заявки</p>
                                {record.timestamp && record.timestamp._seconds ? toDate(record.timestamp._seconds) : toDate(record.timestamp)}
                            </div>
                        </div>
                    ))
                ) : <Spinner />}
            </div>
        </div>
    );
}

export default App;
