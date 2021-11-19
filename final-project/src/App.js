import "./App.css";
import "./index.css";
import "./Static/pageLogo/PageLogo";
import PageLogo from "./Static/pageLogo/PageLogo";
function App() {
  return (
    <div className="h-screen w-screen bg-loginpattern bg-no-repeat bg-cover">
      <div className="bg-white w-40">
        <PageLogo />
      </div>
    </div>
  );
}

export default App;
