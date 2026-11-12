import { useEffect } from "react";
import HomePage from "./assets/pages/Home";
import McpSqlProjectPage from "./assets/pages/McpSqlProject";
import MentorGuruProjectPage from "./assets/pages/MentorGuruProject";
import YigilProjectPage from "./assets/pages/YigilProject";
import AiAssistantsProjectPage from "./assets/pages/AiAssistantsProject";
import { Route, Routes, useLocation } from "react-router";

const RouteScroll = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
        return;
      }

      window.scrollTo(0, 0);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [hash, pathname]);

  return null;
};

function App() {
  return (
    <>
      <RouteScroll />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projets/mcp-sql-server' element={<McpSqlProjectPage />} />
        <Route path='/projets/mentor-guru' element={<MentorGuruProjectPage />} />
        <Route path='/projets/yigil' element={<YigilProjectPage />} />
        <Route path='/projets/assistants-ia' element={<AiAssistantsProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
