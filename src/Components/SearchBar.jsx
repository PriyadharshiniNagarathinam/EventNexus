import "../index.css";

// import "./App.css";

export default function SearchBar() {
  return (
    <div
      className="bg-cover bg-center min-h-screen min-w-full flex flex-col justify-center items-center text-dark-900"
      style={{
        backgroundImage:
          "url('https://floralife.com/wp-content/uploads/2022/04/Outdoor-event-flowers.jpg')",
        height: "700px",
        width: "1600px",
        alignItems: "center",
        justifyContent: "center",
        // backgroundSize: "cover",
      }}
    >
      <div className="text-4xl font-bold mb-2">EVENTS AT YOUR DOORSTEP</div>
      <div className="text-2xl mb-2">
        The one stop destination for all your events
      </div>
      <div className="text-xl mb-2">Find the best events near you</div>
      <div className="text-lg mb-4">Search for events</div>
      <div id="search" className="flex space-x-2">
        <input
          type="text"
          placeholder="Search for events"
          className="px-4 py-2 rounded border border-gray-300 text-gray-800"
        />
        <button
          type="submit"
          className="px-4 py-2 dark:bg-pink-600 text-white rounded hover:bg-dark-700"
        >
          Search
        </button>
      </div>
    </div>
  );
}
