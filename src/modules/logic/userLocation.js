const getCoordinates = async () => {
    const successCB = (position) => {
      return position.coords.latitude + ',' + position.coords.longitude;
    };
  
    const errorCB = (error) => {
      console.log(error);
      throw new Error('Failed to retrieve coordinates.');
    };
  
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      return successCB(position);
    } catch (error) {
      throw error;
    }
  };

export default getCoordinates