import React from "react";
import Context from "./hooks/Context";

import RoutesPage from "./routes/RoutesPage";

function App() {
  return (
    <div>
      <Context>
        <RoutesPage />
      </Context>
    </div>
  );
}

export default App;
