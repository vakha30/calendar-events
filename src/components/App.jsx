import React, { useEffect } from "react";
import Header from "./Header";
import Routes from "./Routes";
import { useDispatch } from "react-redux";
import { fetchSubscriptions } from "../redux/features/subsriptions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubscriptions());
  }, [dispatch]);

  return (
    <div className="App">
      {/* Шапка сайта */}
      <Header />
      {/* Роуты */}
      <Routes />
    </div>
  );
}

export default App;
