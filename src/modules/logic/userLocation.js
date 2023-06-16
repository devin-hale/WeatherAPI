
//gets user coordinates, returns in a format accepted by the weather API

const getCoordinates = async () => {
    const successCB = (position) => {
      return position.coords.latitude + ',' + position.coords.longitude;
    };
  
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      return successCB(position);
    } catch (error) {
      return null;
    }
  };

export default getCoordinates