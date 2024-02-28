import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="dark:bg-slate-800">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
