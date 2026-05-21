
function UVIndexCard({ uv }) {
  return (
    <div
      className="
        mt-6
        w-full
        max-w-md
        mx-auto
        bg-white/10
        backdrop-blur-xl
        border border-white/20
        rounded-3xl
        p-6
        shadow-2xl
        text-center
        relative
        overflow-hidden
      "
    >

      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-orange-500/10 to-red-500/10"></div>

      {/* TITLE */}
      <h2
        className="
          text-2xl
          font-bold
          mb-4
          bg-gradient-to-r
          from-yellow-300
          via-orange-400
          to-red-500
          bg-clip-text
          text-transparent
          relative
          z-10
        "
      >
        ☀ UV Index
      </h2>

      {/* UV VALUE */}
      <h1
        className="
          text-6xl
          font-extrabold
          text-white
          drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]
          relative
          z-10
        "
      >
        {uv}
      </h1>

      {/* STATUS */}
      <p className="mt-4 text-lg text-yellow-300 relative z-10">
        {uv <= 2
          ? "Low"
          : uv <= 5
          ? "Moderate"
          : uv <= 7
          ? "High"
          : uv <= 10
          ? "Very High"
          : "Extreme"}
      </p>

    </div>
  );
}

export default UVIndexCard;