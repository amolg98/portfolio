import React, { useRef, useEffect } from "react";
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Timeline from "./components/Timeline";
import Skills from "./pages/Skills";
import Education from "./pages/Education";

const sectionRoutes = [
  { path: "/", refKey: "homeRef" },
  { path: "/experience", refKey: "experienceRef" },
  { path: "/skills", refKey: "skillsRef" },
  { path: "/education", refKey: "educationRef" },
];

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  const refs = React.useMemo(
    () => ({ homeRef, experienceRef, skillsRef, educationRef }),
    [homeRef, experienceRef, skillsRef, educationRef]
  );
  const navigate = useNavigate();
  const location = useLocation();

  // // Scroll to section on route change
  // useEffect(() => {
  //   const match = sectionRoutes.find((r) => r.path === location.pathname);
  //   if (match && refs[match.refKey as keyof typeof refs].current) {
  //     refs[match.refKey as keyof typeof refs].current!.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [location.pathname, refs]);

  // Update route on scroll
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const refKey = visible.target.getAttribute("data-refkey");
          const route = sectionRoutes.find((r) => r.refKey === refKey);
          if (route && location.pathname !== route.path) {
            navigate(route.path, { replace: true });
          }
        }
      },
      { threshold: 0.5 }
    );
    Object.entries(refs).forEach(([refKey, ref]) => {
      if (ref.current) {
        ref.current.setAttribute("data-refkey", refKey);
        observer.observe(ref.current);
      }
    });
    return () => observer.disconnect();
  }, [navigate, refs, location.pathname]);

  return (
    <div>
      <Navigation refs={refs} />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Timeline />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
      </Routes> */}
      <div ref={homeRef}><Home /></div>
      <div ref={experienceRef}><Timeline /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={educationRef}><Education /></div>
    </div>
  );
};

export default App;