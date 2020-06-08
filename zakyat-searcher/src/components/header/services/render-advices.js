function renderAdvices(suggestionList, error) {
    const suggestionListLength = suggestionList.length;
    const searchModalWindow = document.getElementById("search-modal-window");
    const isError = (error !== "");
    let adviceCounter = 0;

    // Deleting repeated alerts
    for (let i = 0; i <= suggestionListLength; i++) {
        const adviceById = document.getElementById(`advice-${i}`);
        console.log(`adviceById: ${adviceById}`);

        if (adviceById) {
            adviceById.remove();
            console.log(`Following ID has removed: ${adviceById}`);
        }
    }

    if (suggestionListLength > 0) {
        for (let suggestion in suggestionList) {
            adviceCounter++;

            let adviceField = document.createElement("div");
            adviceField.innerText = suggestionList[suggestion];
            adviceField.className = `m-0 mt-2 alert`;
            adviceField.id = `advice-${adviceCounter}`;

            // Inserting the alert into GUI
            if (adviceField) {
                searchModalWindow.after(adviceField);
            }

            // Deleting repeated alerts
            const errorFieldById = document.getElementById("search-error");

            if (errorFieldById) {
                errorFieldById.remove();
            }
        }
    }

    if (isError) {
        let errorField = document.createElement("div");
        errorField.innerHTML = error;
        errorField.className = "m-0 mt-2 alert";
        errorField.id = "search-error";

        // Deleting repeated alerts
        const errorFieldById = document.getElementById("search-error");

        if (errorFieldById) {
            errorFieldById.remove();
        }

        // Rendering error
        searchModalWindow.after(errorField);
    }
}

export default renderAdvices;
