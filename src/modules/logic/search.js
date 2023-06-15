//Takes search term and finds locations from the Weather API matching the search term.

const search = async(searchTerm) => {
    const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=0e45ac1c51a149518c7205713230706&q=${searchTerm}&aqi=no`,{mode: 'cors'})
    const locationResults = await response.json();
    return locationResults
}

export default search