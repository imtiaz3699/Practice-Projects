import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import { lazy } from "react";
import axios from "axios";
import LandingPage from "./Pages/LandingPage";
import JezSalad from "./Pages/JewelleryLandingPage";
import TreloTravelAgency from "./Pages/TreloTravelAgency";
import Gaming from "./Pages/Gaming";
import FormikForm from "./Pages/Formik";
import AdmissionForm from "./Pages/AdmissionForm";
import Practice from "./Pages/Practice";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/JezSalad" element={<JezSalad />} />
          <Route path="/trelo-travel-agency" element={<TreloTravelAgency />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/form" element={<FormikForm />} />
          <Route path="/admission-form" element={<AdmissionForm />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
