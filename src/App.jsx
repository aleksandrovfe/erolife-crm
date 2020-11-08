import React, {useEffect, useState} from 'react';
import './App.css';
import './resetcss/reset.css'
import {db} from "./firebaseConfig";

import { Button, Switch, Slider } from "@material-ui/core";
// Styles
import {
    makeStyles,
    createStyles,
    createMuiTheme,
    ThemeProvider
} from "@material-ui/core/styles";
// Icons
import Camera from "@material-ui/icons/Camera";
import Favorite from "@material-ui/icons/Favorite";
import DeleteForever from "@material-ui/icons/DeleteForever";
// // Sounds
import like from "./sound-files/state-change_confirm-up.wav";
// import open from "./sound-files/ui_lock.wav";
// import close from "./sound-files/ui_unlock.wav";
// import camera from "./sound-files/ui_camera-shutter.wav";
// import trash from "./sound-files/navigation_transition-right.wav";
// import slide from "./sound-files/navigation_hover-tap.wav";
//
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#43a047"
        },
        secondary: {
            main: "#ff5722"
        }
    }
});

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            padding: "20px",
            textAlign: "center"
        },
        slider: {
            width: "75%"
        }
    })
);

function App() {
    const [records, setRecords] = useState([])

    const toDate = seconds => {
        let date = new Date(null)
        date.setTime(seconds * 1000)
        return date.toLocaleString()
    }

    useEffect(() => {
        playSound(likeAudio)
        db.collection('records')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setRecords(snapshot.docs.map(doc => ({
                    id: doc.id,
                    record: doc.data(),
                })))
            })
    }, [])

    useEffect(() => {
        if (records.length > 0) playSound(likeAudio)
    }, [records])

    const likeAudio = new Audio(like);
    // const openAudio = new Audio(open);
    // const closeAudio = new Audio(close);
    // const cameraAudio = new Audio(camera);
    // const trashAudio = new Audio(trash);
    // const slideAudio = new Audio(slide);
    //
    const playSound = (audioFile) => {
        let playPromise = audioFile.play();

        if (playPromise !== undefined) {
            playPromise
                .then(_ => {
                    // Automatic playback started!
                    // Show playing UI.
                    console.log("audio played auto");
                })
                .catch(error => {
                    console.log(error)
                    // Auto-play was prevented
                    // Show paused UI.
                    console.log("playback prevented");
                });
        }
    };
    //
    // const [checked, setChecked] = React.useState(true);
    //
    // const toggleSwitch = (name) => (event) => {
    //     if (event.target.checked) {
    //         playSound(closeAudio);
    //     } else {
    //         playSound(openAudio);
    //     }
    //     setChecked(event.target.checked);
    // };
    //
    const classes = useStyles();

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <div className={classes.container}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => playSound(likeAudio)}
                    >
                        <Favorite />
                    </Button>
                </div>

                {/*<div className={classes.container}>*/}
                {/*    <Button*/}
                {/*        variant="contained"*/}
                {/*        color="secondary"*/}
                {/*        onClick={() => playSound(trashAudio)}*/}
                {/*    >*/}
                {/*        <DeleteForever />*/}
                {/*    </Button>*/}
                {/*</div>*/}

                {/*<div className={classes.container}>*/}
                {/*    <Button*/}
                {/*        variant="contained"*/}
                {/*        color="primary"*/}
                {/*        onClick={() => playSound(cameraAudio)}*/}
                {/*    >*/}
                {/*        <Camera />*/}
                {/*    </Button>*/}
                {/*</div>*/}

                {/*<div className={classes.container}>*/}
                {/*    <Switch checked={checked} onChange={toggleSwitch("checked")} />*/}
                {/*</div>*/}

                {/*<div className={classes.container}>*/}
                {/*    <Slider*/}
                {/*        className={classes.slider}*/}
                {/*        onChangeCommitted={() => playSound(slideAudio)}*/}
                {/*        defaultValue={3}*/}
                {/*        step={1}*/}
                {/*        marks*/}
                {/*        min={1}*/}
                {/*        max={10}*/}
                {/*    />*/}
                {/*</div>*/}
            </ThemeProvider>

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
