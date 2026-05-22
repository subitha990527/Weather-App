function AirQuality() {

  // DEMO VALUE
  const aqi = 72;

  const getStatus = () => {

    if (aqi <= 50) {
        return {
            text: "Good",
            color: "from-slate-700/80 to-emerald-900/70",
            glow: "shadow-emerald-900/20",
            emoji: "🌿",
        };
        }

        if (aqi <= 100) {
        return {
            text: "Moderate",
            color: "from-zinc-700/80 to-amber-900/70",
            glow: "shadow-amber-900/20",
            emoji: "☁️",
        };
        }

        return {
        text: "Poor",
        color: "from-neutral-700/80 to-rose-950/70",
        glow: "shadow-rose-900/20",
        emoji: "🌫️",
        };
  };

  const status = getStatus();

 return (
  <div className="
    w-full
    max-w-5xl
    mx-auto
    mt-8
    px-4
  ">

    <div className="
      relative
      overflow-hidden

      flex
      items-center
      justify-between

      rounded-[28px]

      px-6
      py-5

      bg-white/10
      backdrop-blur-2xl

      border
      border-white/10

      shadow-[0_8px_30px_rgba(0,0,0,0.18)]
    ">

      {/* SOFT LIGHT */}
      <div className="
        absolute
        inset-0
        bg-gradient-to-r
        from-white/5
        via-white/0
        to-cyan-400/5
      "></div>

      {/* LEFT */}
      <div className="relative z-10">

        <p className="
          text-white/50
          uppercase
          tracking-[4px]
          text-xs
          font-semibold
        ">
          Air Quality
        </p>

        <div className="
          flex
          items-end
          gap-3
          mt-2
        ">

          <h1 className="
            text-5xl
            font-black
            text-white
          ">
            {aqi}
          </h1>

          <p className="
            text-lg
            text-white/60
            mb-1
          ">
            AQI
          </p>

        </div>

      </div>

      {/* CENTER */}
      <div className="
        relative
        z-10
        hidden
        md:block

        w-px
        h-16

        bg-white/10
      "></div>

      {/* RIGHT */}
      
            <div
            className="
                relative
                z-10
                flex
                items-center
                gap-4
            "
            >

                <div
                    className={`
                    w-4
                    h-4
                    rounded-full
                    animate-pulse

                    ${
                        aqi <= 50
                        ? "bg-emerald-400"
                        : aqi <= 100
                        ? "bg-amber-400"
                        : "bg-rose-400"
                    }
                    `}
                ></div>

                <div>

            <h2
            className="
                text-2xl
                font-bold
                text-white
            "
            >
            {status.emoji} {status.text}
            </h2>

            <p
            className="
                text-sm
                text-white/50
            "
            >
            {aqi <= 50
                ? "Fresh clean air"
                : aqi <= 100
                ? "Air is acceptable"
                : "Air quality is unhealthy"}
            </p>

        </div>

        </div>

    </div>

    </div>
    );
}

export default AirQuality;