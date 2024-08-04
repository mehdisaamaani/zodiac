import useStore from "../index";

const authSelector = useStore.getState().auth;
const generalSelectore = useStore.getState().general;

export { authSelector, generalSelectore };
