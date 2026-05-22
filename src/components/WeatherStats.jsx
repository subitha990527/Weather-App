function WeatherStats({ weather }) {

  const stats = [
    {
      label: "Humidity",
      value: `${weather.main.humidity}%`,
      icon: "💧",
    },
    {
      label: "Wind",
      value: `${Math.round(weather.wind.speed)} km/h`,
      icon: "🌬",
    },
    {
      label: "Feels Like",
      value: `${Math.round(weather.main.feels_like)}°C`,
      icon: "🌡",
    },
    {
      label: "Pressure",
      value: `${weather.main.pressure} hPa`,
      icon: "⚡",
    },
    {
      label: "Visibility",
      value: `${weather.visibility / 1000} km`,
      icon: "👀",
    },
  ];

  return (
    <div className="w-full max-w-6xl mt-10 px-4">

      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-5
          gap-5
        "
      >

        {stats.map((item, index) => (
      <div
            key={index}
            className={`
                relative
                overflow-hidden
                min-w-[180px]
                rounded-[32px]
                p-6

                ${
                index === 0
                    ? "bg-gradient-to-br from-cyan-400/25 to-blue-500/20"
                    : index === 1
                    ? "bg-gradient-to-br from-purple-400/25 to-pink-500/20"
                    : index === 2
                    ? "bg-gradient-to-br from-orange-400/25 to-red-500/20"
                    : index === 3
                    ? "bg-gradient-to-br from-green-400/25 to-emerald-500/20"
                    : "bg-gradient-to-br from-slate-400/20 to-gray-500/20"
                }

                backdrop-blur-2xl
                border border-white/20

                shadow-[0_8px_32px_rgba(0,0,0,0.25)]

                hover:scale-105
                hover:-translate-y-1

                transition-all
                duration-500
            `}
            >

            {/* GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>

            <div className="relative z-10">

              <div className="text-4xl mb-3">
                {item.icon}
              </div>

              <h2 className="text-white/70 text-sm tracking-wide">
                {item.label}
              </h2>

              <p className="text-2xl font-bold text-white mt-2">
                {item.value}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default WeatherStats;