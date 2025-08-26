import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, type JSX } from "react";
const Counter = lazy(() => import("./Feature/Counter/Counter"));
const AuthControll = lazy(() => import("./Feature/Auth/AuthControll"));
const UserForm = lazy(() => import("./Feature/Customers/UsersForm"));

const UsersList = lazy(() => import("./Feature/Customers/CustomerList"));
function App() {
  const Loader = () => <div style={{ textAlign: "center" }}>Loading...</div>;

  const withSuspense = (Component: JSX.Element) => (
    <Suspense fallback={<Loader />}>{Component}</Suspense>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={withSuspense(<Counter />)} />
        <Route path="/counter" element={withSuspense(<Counter />)} />
        <Route path="/auth" element={withSuspense(<AuthControll />)} />
        <Route path="/users" element={withSuspense(<UserForm />)} />
        <Route path="customers" element={<UsersList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
