/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { ColorProvider } from "./contexts/ColorContext";
import { ClassProvider } from "./contexts/ClassContext";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Index from "./pages/Index";
import CourseDetail from "./pages/CourseDetail";
import MyCourses from "./pages/MyCourses";
import Profile from "./pages/Profile";
import { GatedLanding } from "./components/GatedLanding";

function TokenRedirector() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      window.location.replace(`/${token}`);
    }
  }, []);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ColorProvider>
          <ClassProvider>
            <TokenRedirector />
            <Routes>
              <Route path="/" element={<GatedLanding><Home /></GatedLanding>} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/courses" element={<GatedLanding><Index /></GatedLanding>} />
              <Route path="/course/:id" element={<GatedLanding><CourseDetail /></GatedLanding>} />
              <Route path="/my-courses" element={<GatedLanding><MyCourses /></GatedLanding>} />
              <Route path="/profile" element={<GatedLanding><Profile /></GatedLanding>} />
              {/* Catch-all dynamic slug route for custom invite links */}
              <Route path="/:slug" element={<GatedLanding><Index /></GatedLanding>} />
            </Routes>
          </ClassProvider>
        </ColorProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
