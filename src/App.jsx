import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import UVIndexCard from "./components/UVIndexCard";
import { getWeather, getWeatherByCoords, getForecast, } from "./services/weatherApi";
import Forecast from "./components/Forecast";
import { useEffect} from "react";
import HourlyForecast from "./components/HourlyForecast";
import SunriseSunset from "./components/SunriseSunset";
import WeatherStats from "./components/WeatherStats";
import AirQuality from "./components/AirQuality";


function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [forecast, setForecast] = useState([]);
  const [locationMessage, setLocationMessage] = useState("");
  


  const handleSearch = async () => {
    if (!city) return;

    try {
      setLoading(true);
      setError("");

      const weatherData = await getWeather(city);

      setWeather(weatherData);

      setLocationMessage(`Current location detected: ${weatherData.name}`);

      setTimeout(() => {
        setLocationMessage("");
      }, 3000);

      const forecastData = await getForecast(city);

      const dailyForecast = forecastData.list.filter(
        (item) => item.dt_txt.includes("12:00:00")
      );

      setForecast(dailyForecast);
    } catch {
      setError("City not found");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleCurrentLocation = () => {

    navigator.geolocation.getCurrentPosition(

      async (position) => {

        try {

          setLoading(true);
          setError("");

          const { latitude, longitude } = position.coords;

          const data = await getWeatherByCoords(
            latitude,
            longitude
          );

          setWeather(data);

          // Forecast
          const forecastData = await getForecast(data.name);

          const dailyForecast = forecastData.list.filter(
            (item) => item.dt_txt.includes("12:00:00")
          );

          setForecast(dailyForecast);

          // Premium message
          setLocationMessage(
            `Current location detected: ${data.name}`
          );

          setTimeout(() => {
            setLocationMessage("");
          }, 3000);

        } catch {

          setError("Unable to fetch location weather");

        } finally {

          setLoading(false);

        }
      },

      () => {

        setError(
          "Please allow location access in your browser"
        );

      }

    );
  };

  const getBackground = () => {
    if (!weather) {
      return "bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')]";
    }

    const condition = weather.weather[0].main;

    switch (condition) {

      case "Clouds":
        return "bg-[url('https://images.unsplash.com/photo-1534088568595-a066f410bcda')]";

      case "Rain":
        return "bg-[url('https://images.unsplash.com/photo-1515694346937-94d85e41e6f0')]";

      case "Clear":
        return "bg-[url('https://images.unsplash.com/photo-1501973801540-537f08ccae7b')]";

      case "Snow":
        return "bg-[url('https://images.unsplash.com/photo-1517299321609-52687d1bc55a')]";

      case "Thunderstorm":
        return "bg-[url('https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28')]";

      default:
        return "bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')]";
    }
  };

  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning ☀️"
      : hour < 18
      ? "Good Afternoon 🌤️"
      : "Good Evening 🌙";

  const today = new Date();

  const liveDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

 return (
  <div className={`min-h-screen ${getBackground()} bg-cover bg-center relative`}>

    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

    <div className="relative z-10 flex flex-col items-center min-h-screen p-4">


      {/* all your content */}
      <div className="text-center mb-10">

        <h1
          className="
            text-6xl
            md:text-7xl
            font-black
            tracking-wide
            bg-gradient-to-r
            from-cyan-300
            via-blue-400
            to-purple-500
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]
          "
        >
          SkyCast
        </h1>

        <p
          className="
            mt-3
            text-gray-300
            text-sm
            md:text-base
            tracking-[4px]
            uppercase
          "
        >
          Real-Time Weather Intelligence
        </p>

      </div>
      

      <div className="mt-4 mb-8 w-full flex justify-center">
        <SearchBar
          city={city}
          setCity={setCity}
          handleSearch={handleSearch}
          handleCurrentLocation={handleCurrentLocation}
        />
      </div>

      {!weather && (

        <div className="text-center mb-10 relative z-10">

          <h1
            className="
              mt-8
              text-4xl md:text-5xl
              font-extrabold
              bg-gradient-to-r
              from-cyan-200
              via-white
              to-blue-300
              bg-clip-text
              text-transparent
              drop-shadow-[0_6px_25px_rgba(120,200,255,0.45)]
              tracking-wide
              leading-tight
              animate-pulse
            "
          >
            {greeting}
          </h1>

          <p className="
          mt-4
          text-white/80
          text-lg
          font-light
          tracking-wide
          ">
            Welcome back, enjoy your climate journey 🌥️
          </p>


          {/* PREMIUM GLASS CLOCK */}

          <div className="
          mt-8
          relative
          inline-flex
          items-center
          gap-5
          px-10
          py-5
          rounded-[28px]
          bg-gradient-to-br
          from-white/20
          via-white/10
          to-white/5
          backdrop-blur-3xl
          border border-white/20
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          overflow-hidden
          ">

            {/* Glow Effect */}
            <div className="
            absolute
            inset-0
            bg-gradient-to-r
            from-cyan-400/10
            via-white/5
            to-blue-400/10
            animate-pulse
            "></div>

            {/* Live Dot */}
            <div className="
            relative
            w-3.5
            h-3.5
            rounded-full
            bg-emerald-300
            shadow-[0_0_15px_rgba(110,255,180,0.9)]
            animate-ping
            mt-8
            "></div>

            {/* Clock */}
            <div className="relative flex flex-col items-start">

              <span className="
              text-xs
              uppercase
              tracking-[4px]
              text-white/60
              font-medium
              
              ">
                India Standard Time (UTC+5:30)
              </span>

              <p className="
              mt-4
              text-3xl md:text-4xl
              font-black
              bg-gradient-to-r
              from-white
              via-cyan-100
              to-blue-200
              bg-clip-text
              text-transparent
              tracking-[4px]
              drop-shadow-[0_4px_20px_rgba(255,255,255,0.35)]
              ">
                {time.toLocaleTimeString()}
              </p>

            </div>

        </div>

        <div className="text-center mt-3">
          <p
            className="
              glow-date
              text-sm md:text-lg
              font-semibold
              tracking-widest
              uppercase
              bg-gradient-to-r
              from-green-300 via-cyan-400 to-blue-500
              bg-clip-text
              text-transparent
            "
          >
            {liveDate}
          </p>
        </div>

      </div>
      )}

      {locationMessage && (
        <div
          className="
            fixed
            top-6
            right-6
            z-50
            px-6
            py-4
            rounded-2xl
            bg-black/40
            backdrop-blur-xl
            border
            border-cyan-400/30
            text-white
            shadow-[0_0_30px_rgba(34,211,238,0.25)]
            animate-bounce
          "
        >
          <div className="flex items-center gap-3">

            <div className="text-cyan-300 text-2xl">
              📍
            </div>

            <div>
              <p className="font-semibold">
                Location Updated
              </p>

              <p className="text-sm text-gray-300">
                {locationMessage}
              </p>
            </div>

          </div>
        </div>
      )}

      {loading && (
        <div className="mt-6">
          <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {error && (
        <p className="text-red-400 mb-4">
          {error}
        </p>
      )}


      {weather && (
        <div className="mt-6 flex flex-col items-center">

          {/* MAIN WEATHER CARD */}
          <WeatherCard weather={weather} />

          
          

          <WeatherStats weather={weather} />
          <AirQuality />
                    <UVIndexCard uv={6} />

          <HourlyForecast forecast={forecast} />
          {/* FORECAST */}
          <div className="w-full mt-6">
            <Forecast forecast={forecast} />
          </div>
          <SunriseSunset weather={weather} />

        </div>
      )}

    </div>

  </div>
)
}

export default App;