import { Routes, Route, BrowserRouter } from "react-router-dom";

import Event from "./pages/Event";
import Subscriber from "./pages/Subscriber";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Subscriber />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/lesson/:slug" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
