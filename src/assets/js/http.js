import $ from "jquery";

// jquery 
const sendResquest = (callback) => {
    $.get("https://fe-task-api.mainstack.io/", response => {
        callback(response);
    }).catch(e => callback(e));
}

export default sendResquest;