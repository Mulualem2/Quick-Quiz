import { Button, Slider } from "@mui/material";
import React, { useEffect } from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import axiosTrivia from "../api/triviaApi";

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

function QuizParams() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [quizCategories, setQuizCategories] = React.useState([]);
  const [quizCategoriesWithValue, setQuizCategoriesWithValue] = React.useState(
    []
  );
  const [personName, setPersonName] = React.useState([]);
  const [quizParameters, setQuizParameters] = React.useState({
    categories: [],
    questionNo: 5,
  });

  useEffect(() => {
    const fetchData = async () => {
      const categories = await axiosTrivia.get("categories");
      setQuizCategoriesWithValue(categories.data);
      const categoriesKeys = Object.keys(categories.data).map(
        (category) => category
      );
      setQuizCategories(categoriesKeys);
    };
    fetchData();
  }, []);

  const handleQuestionCategoryDropdown = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setQuizParameters((prev) => {
      return { ...prev, categories: [...value] };
    });
  };

  const handleQuestionNoSlider = (event) => {
    setQuizParameters((prev) => {
      return { ...prev, questionNo: event.target.value };
    });
  };

  const createQuizApiLink = (params) => {
    // baseURL/api/questions?categories=arts_and_literature,film_and_tv,geography&limit=9
    var link = "https://the-trivia-api.com/api/questions?";
    if (params.categories.length !== 0) {
      link += "categories=";
      params.categories.forEach((category) => {
        quizCategoriesWithValue[category].forEach((c) => {
          link += `${c},`;
        });
      });
    }
    if (params.questionNo) {
      link += `&limit=${params.questionNo}`;
    }
    return link;
  };

  const handleSubmitQuizParams = () => {
    console.log("paramsState: ", quizParameters);
    console.log("parameterLink: ", createQuizApiLink(quizParameters));
    navigate("/quiz/take", { state: createQuizApiLink(quizParameters) });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          marginTop: 15,
          border: "1px solid gray",
          padding: "25px",
          borderRadius: "15px",
        }}
      >
        <h2 style={{ marginBottom: "10px", textAlign: "center" }}>
          Question Parameters
        </h2>
        <DialogContent>
          <DialogContentText>
            <FormControl>
              <InputLabel sx={{ mt: 1 }} id="demo-multiple-chip-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleQuestionCategoryDropdown}
                sx={{ width: "400px", mt: 1 }}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                      width: 500,
                    },
                  },
                }}
              >
                {quizCategories.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>

              <p style={{ marginBottom: "10px" }}>Number of Questions</p>
              <Slider
                min={5}
                max={20}
                defaultValue={10}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={(event) => handleQuestionNoSlider(event)}
              />
            </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus>
            Reset Form
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmitQuizParams}
            autoFocus
          >
            Submit
          </Button>
        </DialogActions>
      </Box>
    </div>
  );
}

export default QuizParams;
