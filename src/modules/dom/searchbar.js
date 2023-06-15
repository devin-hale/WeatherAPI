import search from "../logic/search"
import forecast from "../logic/weatherAPI"
import bgRender from "./bgRender"
import renderCurrent from "./locationCurrent"
import render7Day from "./render7Day"
import renderHourly from "./renderHourly"


const searchInitialize = () => {
    //Get Searchbar
    const searchBar = document.getElementById('searchBar')

    //Every time a user input happens, retrieve any matching locations and display them below the search bar.
    searchBar.addEventListener('input', async(event) => {
        // Search doesn't trigger when search bar is empty
        if (event.target.value.length > 0) {

            //Resets searchResults div so it doesn't infinitely add
            document.getElementById('searchResults').textContent = '';

            //Searches for user input
            let searchResult = await search(event.target.value);

            //Adds each result to the results div.
            searchResult.forEach(result => {
                let resultDiv = document.createElement('p');
                resultDiv.innerHTML = `${result.name}, ${result.region}`;
                resultDiv.classList = 'resultDiv'
                document.getElementById('searchResults').appendChild(resultDiv);

                // Click listener to load the result.
                resultDiv.addEventListener('mousedown', async() => {
                    
                    let targetLoc = await forecast(`${result.name}, ${result.region}`);
                    renderCurrent(targetLoc);
                    render7Day(targetLoc);
                    renderHourly(targetLoc);
                    bgRender(targetLoc);


                    //Resets searchbar
                    searchBar.value = '';
                    document.getElementById('searchResults').textContent = '';
                })
            })
            return
        }
    })

    //Removes Search Results when bar is unfocused
    searchBar.addEventListener('blur', () => {
        searchBar.value = '';
        document.getElementById('searchResults').textContent = '';
    })
}

export default searchInitialize;