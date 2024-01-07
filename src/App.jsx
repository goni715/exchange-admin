import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContactListPage from "./pages/ContactListPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import ExchangeListPage from "./pages/ExchangeListPage.jsx";
import ExchangeDetailsPage from "./pages/ExchangeDetailsPage.jsx";
import UserListPage from "./pages/UserListPage.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import PublicRoute from "./routes/PublicRoute.jsx";
import HistoryPage from "./pages/HistoryPage.jsx";
import ReceiveAccountListPage from "./pages/ReceiveAccountListPage.jsx";

const App = () => {
    return (
        <>
          <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={<PrivateRoute> <ExchangeListPage/> </PrivateRoute>} />
                  <Route exact path="/contact-list" element={<PrivateRoute> <ContactListPage/> </PrivateRoute>} />
                  <Route exact path="/user-list" element={<PrivateRoute> <UserListPage/> </PrivateRoute>} />
                  <Route exact path="/history" element={<PrivateRoute> <HistoryPage/> </PrivateRoute>} />
                  <Route exact path="/exchange-details/:id" element={<PrivateRoute> <ExchangeDetailsPage/> </PrivateRoute>} />
                  <Route exact path="/receive-accounts" element={<PrivateRoute> <ReceiveAccountListPage/> </PrivateRoute>} />

                  <Route exact path="/login" element={<PublicRoute> <LoginPage/> </PublicRoute>}/>
                  <Route exact path="/register" element={<PublicRoute> <RegisterPage/> </PublicRoute>}/>
                  <Route exact path="/forgot-password" element={<PublicRoute> <ForgotPasswordPage/> </PublicRoute>}/>
                  <Route exact path="/reset-password/:email/:token" element={<PublicRoute> <ResetPasswordPage/> </PublicRoute>}/>
              </Routes>
          </BrowserRouter>
        </>
    );
};

export default App;