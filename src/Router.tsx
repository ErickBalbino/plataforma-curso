import { Routes, Route, BrowserRouter } from "react-router-dom";

import Event from "./pages/Event";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/lesson/:slug" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
