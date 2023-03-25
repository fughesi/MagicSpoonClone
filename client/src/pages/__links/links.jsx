import "./links.css";
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import FAQ from "./FAQ.jsx";
import TOS from "./TOS.jsx";
import Jobs from "./Jobs.jsx";
import Reviews from "./Reviews.jsx";
import TermsOfUse from "./TermsOfUse.jsx";
import TrackOrders from "./TrackOrders.jsx";
import RefundPolicy from "./RefundPolicy.jsx";
import StoreLocator from "./StoreLocator.jsx";
import Accessibility from "./Accessibility.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import BecomeAnAffiliate from "./BecomeAnAffiliate.jsx";

export default function Links() {
  const content = (
    <>
      <Routes>
        <Route index element={<h1>Hello</h1>}>
          <Route path="FAQ" element={FAQ} />
          <Route path="TOS" element={TOS} />
          <Route path="Jobs" element={Jobs} />
          <Route path="Reviews" element={Reviews} />
          <Route path="TermsOfUse" element={TermsOfUse} />
          <Route path="TrackOrders" element={TrackOrders} />
          <Route path="RefundPolicy" element={RefundPolicy} />
          <Route path="StoreLocator" element={StoreLocator} />
          <Route path="Accessibility" element={Accessibility} />
          <Route path="PrivacyPolicy" element={PrivacyPolicy} />
          <Route path="BecomeAnAffiliate" element={BecomeAnAffiliate} />
        </Route>
      </Routes>

      <Outlet />
    </>
  );

  return content;
}
