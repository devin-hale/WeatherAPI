const displayLoading = () => {
    const loaderContainer = document.getElementById('loaderContainer');
    loaderContainer.style.display = 'block';
};

const hideLoading = () => {
    const loaderContainer = document.getElementById('loaderContainer');
    loaderContainer.style.display = 'none';
};

export {displayLoading, hideLoading}