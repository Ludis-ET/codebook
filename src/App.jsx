import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
