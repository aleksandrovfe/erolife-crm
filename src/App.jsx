import React, {useEffect, useState} from 'react';
import './App.css';
import './resetcss/reset.css'
import axios from "axios";

function App() {
    const [records, setRecords] = useState([])

    const toDate = seconds => {
        let date = new Date(null)
        date.setTime(seconds * 1000)
        return date.toLocaleString()
    }

    useEffect(() => {
        const getRecords = async() => {
            const response = await axios.get('/records')
            setRecords(response.data.map(doc => ({
                record: doc,
            })))
        }

        getRecords()

    }, [])

    useEffect(() => {
        records.filter(rec => rec.record)
    }, [records])

    return (
        <div className="App">
            <div className="records">
                {records.length ? (
                    records.map(({record}) => (
                        <div className="records__item" key={record.timestamp._seconds}>
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
                                {record.timestamp && record.timestamp._seconds ? toDate(record.timestamp._seconds) : null}
                            </div>
                        </div>
                    ))
                ) : null}
            </div>
        </div>
    );
}

export default App;
