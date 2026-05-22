function HourlyForecast({ forecast }) {
  return (
    <div className="w-full max-w-6xl mt-10 px-4">

      {/* TITLE */}
      <h2
        className="
          text-3xl
          md:text-4xl
          font-bold
          text-center
          mb-6
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500
          bg-clip-text
          text-transparent
        "
      >
        Hourly Forecast
      </h2>

      {/* SCROLLABLE ROW */}
        <div
            className="
            flex
            justify-center
            gap-5
            min-w-max
            mx-auto
            "
        >

        {forecast.slice(0, 8).map((item, index) => (
          <div
            key={index}
            className="
              min-w-[140px]
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              rounded-3xl
              p-5
              text-center
              shadow-xl
              hover:scale-105
              transition-all
              duration-300
              flex-shrink-0
            "
          >

            {/* TIME */}
            <h3 className="text-white font-semibold mb-3">
              {new Date(item.dt_txt).toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
              })}
            </h3>

            {/* ICON */}
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt=""
              className="w-16 h-16 mx-auto"
            />

            {/* TEMP */}
            <h1 className="text-3xl font-bold text-white mt-2">
              {Math.round(item.main.temp)}°
            </h1>

            {/* WEATHER */}
            <p className="text-cyan-300 text-sm capitalize mt-2">
              {item.weather[0].description}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}

export default HourlyForecast;