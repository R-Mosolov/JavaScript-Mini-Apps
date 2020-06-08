/** This module offers search's suggestions to a user */

import queryList from "../data/query-list";

function showAdvices() {

    // Initialization variables
    const userQuery = document.getElementById("search-modal-window").value.toLowerCase();
    let counter = -1;
    let suggestionList = [];

    // Checking that the query is equal to any item from query list
    console.clear();

    for (let serviceQuery of queryList) {
        serviceQuery = serviceQuery.value;
        let serviceLowercaseQuery = serviceQuery.toLowerCase();

        counter++;

        // Checking user's query length to chose best handling way
        if (userQuery.length === 1) {
            if (serviceLowercaseQuery.substring(0, userQuery.length) === userQuery) {
                suggestionList.push(serviceQuery);
            }
        } else if (userQuery.length > 1) {
            if (serviceLowercaseQuery.substring(0, userQuery.length) === userQuery) {
                suggestionList.push(serviceQuery);
            }
        }
    }

    // Returning the result to the console
    console.log(`suggestionList.length: ${suggestionList.length}`);
    console.log(`suggestionList: ${suggestionList}`);
}

export default showAdvices;
