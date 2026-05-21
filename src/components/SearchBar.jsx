function SearchBar({ city, setCity, handleSearch, handleCurrentLocation }) {

    
  return (
    <div className="w-full max-w-2xl mx-auto">

      {/* Glass Container */}
      <div className="flex flex-col sm:flex-row items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-3xl shadow-xl">

        {/* Input */}
        <input
          type="text"
          placeholder="🔍 Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          className="flex-1 px-5 py-4 rounded-2xl bg-transparent text-white placeholder-gray-300 outline-none"
        />

        {/* Search Button */}
        <button
          onClick={handleSearch}
className="
px-6 py-2
rounded-2xl
font-semibold
text-black
bg-gradient-to-r
from-cyan-400
to-blue-500
hover:scale-105
hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]
transition-all
duration-300
"        >
          Search
        </button>

        {/* Location Button */}
        <button
        onClick={handleCurrentLocation}
        className="
            relative
            px-5
            py-2
            rounded-full
            bg-black/30
            backdrop-blur-xl
            border
            border-cyan-400/30
            text-white
            font-medium
            tracking-wide
            hover:border-cyan-300
            hover:bg-cyan-400/10
            hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]
            transition-all
            duration-300
            flex
            items-center
            gap-3
        "
        >
        <span className="text-cyan-300 text-lg">
            ✦
        </span>

        <span>
            Use Current Location
        </span>
        </button>

      </div>

    </div>
  );
}

export default SearchBar;