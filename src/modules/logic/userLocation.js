import { hideLoading, displayLoading } from "../dom/loader";
//gets user coordinates, returns in a format accepted by the weather API

const getCoordinates = async () => {
    const successCB = (position) => {
      hideLoading();
      return position.coords.latitude + ',' + position.coords.longitude;
    };
  
    try {
      displayLoading();
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      return successCB(position);
    } catch (error) {
      hideLoading();
      return null;
    }
  };

export default getCoordinates