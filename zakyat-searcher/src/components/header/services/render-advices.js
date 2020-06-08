function renderAdvices(suggestionList, error) {
    const suggestionListLength = suggestionList.length;
    const searchModalWindow = document.getElementById("search-modal-window");
    const isError = (error !== "");

    if (suggestionListLength > 0) {
        let adviceField = document.createElement("div");
        adviceField.innerHTML = suggestionList[0];
        adviceField.className = "m-0 mt-2 alert";

        if (adviceField) {
            searchModalWindow.after(adviceField);
        }
    }

    if (isError) {
        let errorField = document.createElement("div");
        errorField.innerHTML = error;
        errorField.className = "m-0 mt-2 alert";

        searchModalWindow.after(errorField);
    }
}

export default renderAdvices;
