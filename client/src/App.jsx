import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import { useGetAllProductsQuery } from "./services/productsApi";

import "./App.css";
import IndexLayout from "./pages/IndexLayout/_IndexLayout";
import RootLayout from "./pages/RootLayout/_RootLayout";
import Homepage from "./pages/RootLayout/Homepage";
import FAQ from "./pages/RootLayout/faqpage/FAQpage";
import OurStory from "./pages/RootLayout/ourstorypage/OurStory";
import UsVersusThem from "./pages/RootLayout/usvsthempage/UsVersusThem";
import ProductPage from "./pages/RootLayout/productpage/ProductPage";

import LinksLayout from "./pages/LinksLayout/_LinksLayout";
import TOS from "./pages/LinksLayout/TOS.jsx";
import Jobs from "./pages/LinksLayout/Jobs.jsx";
import Privacy from "./pages/LinksLayout/Privacy.jsx";
import Reviews from "./pages/LinksLayout/Reviews.jsx";
import TermsOfUse from "./pages/LinksLayout/TermsOfUse.jsx";
import TrackOrders from "./pages/LinksLayout/TrackOrders.jsx";
import RefundPolicy from "./pages/LinksLayout/RefundPolicy.jsx";
import StoreLocator from "./pages/LinksLayout/StoreLocator.jsx";
import Accessibility from "./pages/LinksLayout/Accessibility.jsx";
import BecomeAnAffiliate from "./pages/LinksLayout/BecomeAnAffiliate.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<IndexLayout />}>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Homepage />} />
          <Route path="us-vs-them" element={<UsVersusThem />} />
          <Route path="our-story" element={<OurStory />} />
          <Route
            path="bundles"
            element={<ProductPage type={"bundles"} style={"bundles"} loader={useGetAllProductsQuery()} />}
          />
          <Route path="cereal" element={<ProductPage type={"cereal"} style={"cereal"} />} />
          <Route path="bars" element={<ProductPage type={"bars"} style={"bars"} />} />
          <Route path="FAQ" element={<FAQ />} />
        </Route>

        <Route path="links" element={<LinksLayout />}>
          <Route path="FAQ" element={<FAQ />} />
          <Route path="TOS" element={<TOS />} />
          <Route path="Jobs" element={<Jobs />} />
          <Route path="Privacy" element={<Privacy />} />
          <Route path="Reviews" element={<Reviews />} />
          <Route path="TermsOfUse" element={<TermsOfUse />} />
          <Route path="TrackOrders" element={<TrackOrders />} />
          <Route path="RefundPolicy" element={<RefundPolicy />} />
          <Route path="StoreLocator" element={<StoreLocator />} />
          <Route path="Accessibility" element={<Accessibility />} />
          <Route path="BecomeAnAffiliate" element={<BecomeAnAffiliate />} />
        </Route>

        <Route path="/*" redirect="/" />
      </Route>
    )
  );

  const content = <RouterProvider router={router} />;

  return content;
}

export default App;
