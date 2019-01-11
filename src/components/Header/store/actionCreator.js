import axios from "axios";
import {
    INIT_LIST,
    INPUT_FOCUS,
    INPUT_BLUR,
    GET_LIST
} from "./actionTypes";

const init_list_action = (data) => ({
    type: INIT_LIST,
    data
});

export const input_focus_action = () => ({
    type: INPUT_FOCUS
});

export const input_blur_action = () => ({
    type: INPUT_BLUR
});

export const get_list_action = () => (
    (dispatch) => {
        // console.log("init list");
        axios.get("/api/data.json")
            .then(res => {
                const data = res.data;
                dispatch(init_list_action(data.data));
            })
            .catch(err => console.log(err));
    }
);