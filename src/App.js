import "./App.css";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Widgets from "./Components/Widgets";
import Login from "./Components/Login";
function App() {
  const user = null;
  return (
    
    <div className="App">
      {!user ? (<Login />) : (
        <>
      <Header />
      <div className="app-body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      </>
      )}
    </div>
  );
}

export default App;
