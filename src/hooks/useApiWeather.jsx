import axios from "axios";
import { useState, useEffect } from "react";
import images from "../assets/images";

const useApiWeather = () => {
  const [apiRes, setApiRes] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  const convertToFahrenheit = (value) => {
    let result = Math.round((value - 273.15) * 1.8 + 32.0);
    return result;
  };

  const convertToCentigrates = (value) => {
    let result = Math.round(value - 273.15);
    return result;
  };

  useEffect(() => {
    const success = (pos) => {
      const crd = pos.coords;

      const lon = crd.longitude;
      const lat = crd.latitude;

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fb3c4c2c5c3e7bd9dfa20cf637569d98&lang=es`
        )
        .then((res) => {
          setApiRes(res.data)
          setIsLoading(false)
        });
    };

    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return [apiRes, convertToCentigrates, convertToFahrenheit, isLoading];
};

export default useApiWeather;
