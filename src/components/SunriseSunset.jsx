function SunriseSunset({ weather }) {

  const sunrise = new Date(
    weather.sys.sunrise * 1000
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sunset = new Date(
    weather.sys.sunset * 1000
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
  className="
    w-full
    max-w-5xl
    mt-10
    mx-auto
    px-4
  "
>

  <div
    className="
      relative
      overflow-hidden
      rounded-[35px]
      bg-white/10
      backdrop-blur-2xl
      border border-white/20
      shadow-2xl
      p-6 md:p-8
    "
  >

    {/* BACKGROUND GLOW */}
    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-cyan-500/10"></div>

    {/* LIGHT EFFECT */}
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full"></div>

    {/* CONTENT */}
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">

      {/* SUNRISE */}
      <div className="text-center flex-1">

        <div className="text-4xl mb-3 animate-pulse">
          🌅
        </div>

        <h2
          className="
            text-2xl
            font-bold
            bg-gradient-to-r
            from-yellow-300
            via-orange-400
            to-amber-500
            bg-clip-text
            text-transparent
          "
        >
          Sunrise
        </h2>

        <p
        className="
            mt-4
            text-4xl
            font-extrabold
            tracking-[4px]

            bg-gradient-to-r
            from-yellow-200
            via-orange-300
            to-amber-500

            bg-clip-text
            text-transparent

            drop-shadow-[0_0_18px_rgba(255,200,0,0.5)]

            animate-pulse
        "

        style={{
            fontFamily: "'Orbitron', sans-serif",
        }}
        >
        {sunrise}
        </p>

      </div>

      {/* CENTER LINE */}
      <div className="hidden md:block w-px h-40 bg-white/20"></div>

      {/* SUNSET */}
      <div className="text-center flex-1">

        <div className="text-4xl mb-3 animate-pulse">
          🌇
        </div>

        <h2
          className="
            text-2xl
            font-bold
            bg-gradient-to-r
            from-pink-400
            via-purple-500
            to-indigo-500
            bg-clip-text
            text-transparent
          "
        >
          Sunset
        </h2>

        <p
        className="
            mt-4
            text-4xl
            font-extrabold
            tracking-[4px]

            bg-gradient-to-r
            from-pink-300
            via-purple-400
            to-indigo-400

            bg-clip-text
            text-transparent

            drop-shadow-[0_0_18px_rgba(180,120,255,0.5)]

            animate-pulse
        "

        style={{
            fontFamily: "'Orbitron', sans-serif",
        }}
        >
        {sunset}
        </p>

      </div>

    </div>

  </div>

</div>
  );
}

export default SunriseSunset;