import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import { UserContext } from "./context/context.user";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route
          path="auth"
          element={
            currentUser ? <Navigate to="/" replace /> : <Authentication />
          }
        />
              <Route path='checkout' element={<Checkout />} />

      </Route>

    </Routes>
  );
};

export default App;