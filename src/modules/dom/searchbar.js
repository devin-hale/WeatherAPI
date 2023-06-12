import search from "../logic/search"


const searchInitialize = () => {
    const searchBar = document.getElementById('searchBar')

    searchBar.addEventListener('input', async(event) => {
        if (event.target.value.length > 0) {
            document.getElementById('searchResults').textContent = '';
            console.log('Input')
            let searchResult = await search(event.target.value);
            searchResult.forEach(result => {
                let resultDiv = document.createElement('p');
                resultDiv.innerHTML = `${result.name}, ${result.region}`;
                resultDiv.id = result.id;
                resultDiv.classList = 'resultDiv'
                document.getElementById('searchResults').appendChild(resultDiv);
            })
            return
        }
    })
}

export default searchInitialize;