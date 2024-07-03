import "./App.css";
import Background from "./Components/Background/Background";
import Weather from "./Components/Weather";

function App() {
  return (
    <>
      <Background />
      <div className="weather-wrapper flex items-center justify-center w-full h-screen">
        <Weather />
      </div>
    </>
  );
}

export default App;
