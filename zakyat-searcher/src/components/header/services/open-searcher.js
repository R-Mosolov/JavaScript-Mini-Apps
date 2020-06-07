function openSearcher() {
    const searchModalWindow = document.getElementById(
        "search-modal-window"
    );
    const searchCleaner = document.getElementById(
        "search-cleaner"
    );

    searchModalWindow
        .classList
        .remove(
            "d-none"
        );
    searchCleaner
        .classList
        .remove(
            "d-none"
        );
}

export default openSearcher;
