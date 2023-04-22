import { Routes, Route } from "react-router-dom";
import { Home, Details } from "./pages";
import Wrapper from "./hooks/Wrapper";

const App = () => {
  const HomeComponent = Wrapper(Home);
  const DetailsComponent = Wrapper(Details);

  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/details/:id" element={<DetailsComponent/>} />
    </Routes>
  )
}

export default App
