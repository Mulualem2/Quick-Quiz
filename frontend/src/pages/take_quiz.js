import { Alert, Box, Button, Snackbar } from "@mui/material";
import React, { useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useLocation } from "react-router-dom";
import triviaApi from "../api/triviaApi";

const scrambleAnswers = ({ correctAnswer, incorrectAnswers }) => {
    const possibleAnswers = [...incorrectAnswers, correctAnswer];
    let currentIndex = possibleAnswers.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [possibleAnswers[currentIndex], possibleAnswers[randomIndex]] = [
            possibleAnswers[randomIndex], possibleAnswers[currentIndex]];
    }

    return possibleAnswers;
};

function TakeQuiz() {
    const [value, setValue] = React.useState("female");
    const [questions, setQuestions] = React.useState([]);
    const [possibleAnswers, setPossibleAnswers] = React.useState([])
    const [givenAnswers, setGivenAnswers] = React.useState({})
    const [snackbarOpen, setSnackbarOpen] = React.useState(false)
    const { state } = useLocation();

    useEffect(() => {
        triviaApi
            .get(state)
            .then((res) => {
                setQuestions(res.data)
                res.data.forEach(question => setPossibleAnswers(prev => [...prev, scrambleAnswers(question)]))
            })
            .catch((err) => console.log("err: ", err));
    }, []);

    const handleOpenSnackbar = () => {
        setSnackbarOpen(true)
    }
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpen(false);
    };

    const handleAnswerChange = (event) => {
        const questionNo = event.target.name
        const givenAnswer = event.target.value
        console.log("radio: ", event.target.name, " & ", event.target.value);
        setGivenAnswers(prev => {
            return { ...prev, [questionNo]: givenAnswer }
        })
        setValue(event.target.value);
    };

    const handleSubmitQuiz = () => {
        const totalQuestions = questions.length
        if (Object.keys(givenAnswers).length < totalQuestions) {
            handleOpenSnackbar()
        }
    }

    return (
        <Box
            sx={{
                width: "100vw",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    margin: "auto",
                    paddingX: "30px",
                    maxWidth: '65%',
                    marginTop: 4,
                }}
            >
                {/* SINGLE QUESTION START */}
                {questions.map((question, i) => {
                    return (
                        <div key={i + 1}>
                            <p
                                style={{
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                    marginBottom: "8px",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "13px",
                                        fontWeight: "normal",
                                        fontStyle: "italic",
                                        marginRight: "10px",
                                        display: "inline-block",
                                    }}
                                >
                                    Q {i + 1}/10{" "}
                                    <span style={{ marginLeft: "10px", fontSize: "14px" }}>
                                        {question.category}
                                    </span>
                                </span>
                                <p style={{ marginTop: 1 }}>{question.question}</p>
                            </p>
                            <div className="">
                                <FormControl sx={{ marginLeft: 1 }}>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name={(i + 1).toString()}
                                        onChange={handleAnswerChange}
                                    >
                                        {possibleAnswers[i].map((ans, i) => {
                                            return (
                                                <FormControlLabel
                                                    value={ans}
                                                    control={<Radio />}
                                                    label={ans}
                                                    key={i + 'form'}
                                                />
                                            );
                                        })}
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                    );
                })}
                {/* SINGLE QUESTION END */}
                <div
                    className="button-div"
                    style={{
                        marginTop: "35px",
                        marginBottom: "35px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end",
                    }}
                >
                    <Button variant="contained" onClick={handleSubmitQuiz}>Submit</Button>
                </div>
            </Box>
            <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="warning" variant="filled" sx={{ width: '100%' }}>
                    You haven't given answers to all the questions!!
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default TakeQuiz;
