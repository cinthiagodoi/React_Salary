import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Calculator from "../src/Pages/Salary";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Calculator} />
    </BrowserRouter>
  );
}

export default Routes;
