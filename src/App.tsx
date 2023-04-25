import { Routes, Route } from "react-router-dom";
import { Home, Details, ComingSoon } from "./pages";
import Wrapper from "./hooks/Wrapper";

const App = () => {
  const HomeComponent = Wrapper(Home);
  const DetailsComponent = Wrapper(Details);
  const ComingSoonComponent = Wrapper(ComingSoon);

  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/details/:id" element={<DetailsComponent/>} />
      <Route path="/coming-soon" element={<ComingSoonComponent />} />
    </Routes>
  )
}

export default App;
