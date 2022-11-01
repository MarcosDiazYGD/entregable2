import "./App.css";
import WeatherApp from "./components/WeatherApp";
import useApiWeather from "./hooks/useApiWeather";

function App() {
  const [apiRes, convertToCentigrates, convertToFahrenheit, isLoading] =
    useApiWeather();

  return (
    <div className="App">
      {isLoading ? (
        <div className="ScreenLoader">
          <i class="fa-solid fa-sun"></i>
          <i class="fa-solid fa-cloud"></i>
        </div>
      ) : (
        <WeatherApp />
      )}
    </div>
  );
}

export default App;
