import React, {useEffect, useState} from 'react';
import './App.css';
import './resetcss/reset.css'
import {db} from "./firebaseConfig";

function App() {
    const [records, setRecords] = useState([])

    const toDate = seconds => {
        let date = new Date(null)
        date.setTime(seconds * 1000)
        return date.toLocaleString()
    }

    useEffect(() => {
        db.collection('records')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setRecords(snapshot.docs.map(doc => ({
                    id: doc.id,
                    record: doc.data(),
                })))
            })
    }, [])

    return (
        <div className="App">
            {records.length ? (
                records.map(({id, record}) => (
                    <div key={id}>
                        <p>Имя {record.name}</p>
                        <p>Врач или направление {record.service}</p>
                        <p>Телефон {record.phone}</p>
                        <p>Время записи {toDate(record.timestamp.seconds)}</p>
                        <br/><br/>
                    </div>
                ))
            ) : null}
        </div>
    );
}

export default App;
