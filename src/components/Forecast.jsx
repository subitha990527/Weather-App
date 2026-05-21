function Forecast({ forecast }) {
  return (
    <div className="w-full max-w-6xl mt-10 px-4">

      {/* TITLE */}
      <h2
        className="
          text-3xl md:text-4xl
          font-bold
          text-center
          mb-8
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500
          bg-clip-text
          text-transparent
          drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]
        "
      >
        5-Day Forecast
      </h2>

      {/* FORECAST GRID */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

        {forecast.map((item, index) => (
          <div
            key={index}
            className="
              relative
              overflow-hidden
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              rounded-3xl
              p-5
              text-center
              shadow-2xl
              hover:scale-105
              hover:bg-white/15
              transition-all
              duration-300
              group
            "
          >

            {/* GLOW EFFECT */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            {/* DAY */}
            <h3 className="font-semibold text-lg text-white mb-3 relative z-10">
              {new Date(item.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </h3>

            {/* WEATHER ICON */}
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt="weather icon"
              className="
                mx-auto
                w-20
                h-20
                drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]
              "
            />

            {/* TEMPERATURE */}
            <h1
              className="
                text-3xl
                font-bold
                text-white
                mt-2
              "
            >
              {Math.round(item.main.temp)}°C
            </h1>

            {/* DESCRIPTION */}
            <p className="capitalize text-cyan-300 text-sm mt-2 relative z-10">
              {item.weather[0].description}
            </p>

            {/* EXTRA DETAILS */}
            <div className="mt-4 space-y-1 text-sm text-white/80 relative z-10">
              <p>💧 {item.main.humidity}%</p>
              <p>🌬 {Math.round(item.wind.speed)} km/h</p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Forecast;