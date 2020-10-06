import React, {useEffect, useState} from 'react';
import './App.css';
import './resetcss/reset.css'
import {db} from "./firebaseConfig";

function App() {
    const [records, setRecords] = useState([])

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
                        <p>{record.name}</p>
                        <p>{record.phone}</p>
                        <br/><br/>
                    </div>
                ))
            ) : null}
        </div>
    );
}

export default App;
