function WeatherCard({ weather }) {
  return (
    <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl text-center animate-[float_6s_ease-in-out_infinite]">

      <h2 className="text-4xl font-bold">
        {weather.name}
      </h2>

      <p className="text-lg text-gray-200 mt-1">
        {weather.weather[0].main}
      </p>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt="weather"
        className="mx-auto"
      />

      <h1 className="text-6xl font-bold">
        {Math.round(weather.main.temp)}°C
      </h1>

      <p className="capitalize text-xl mt-2 text-gray-100">
        {weather.weather[0].description}
      </p>

      <div className="grid grid-cols-3 gap-4 mt-8">

        <div className="bg-white/10 rounded-2xl p-4">
          <p className="text-gray-300">
            Humidity
          </p>

          <h3 className="text-2xl font-bold mt-1">
            {weather.main.humidity}%
          </h3>
        </div>

        <div className="bg-white/10 rounded-2xl p-4">
          <p className="text-gray-300">
            Wind Speed
          </p>

          <h3 className="text-2xl font-bold mt-1">
            {weather.wind.speed} km/h
          </h3>
        </div>

        <div className="
          bg-white/10
          border
          border-white/10
          rounded-3xl
          p-5
          backdrop-blur-lg
          ">

            <p className="text-gray-300 text-sm tracking-wider">
              FEELS LIKE
            </p>

            <h3 className="text-3xl font-bold mt-2">
              {Math.round(weather.main.feels_like)}°
            </h3>

          </div>
          

      </div>
    </div>
  );
}



export default WeatherCard;