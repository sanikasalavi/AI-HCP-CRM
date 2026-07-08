import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import LogInteraction from "./pages/LogInteraction";
import ViewInteractions from "./pages/ViewInteractions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/log" element={<LogInteraction />} />
        <Route path="/history" element={<ViewInteractions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;