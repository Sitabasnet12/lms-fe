import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import { DefaultLayout } from "./components/layouts/DefaultLayout";
import Dashboard from "./pages/dasboard/Dashboard";
import { UserLayout } from "./components/layouts/UserLayout";
import { SignInPage } from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";

function App() {
  return (
    <>
      <Routes>
        {/* public routes  */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="signin" element={<SignInPage />} />
        </Route>

        {/* private routes  */}
        <Route path="/dashboard" element={<DefaultLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
