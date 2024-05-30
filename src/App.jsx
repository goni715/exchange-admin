import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContactListPage from "./pages/ContactListPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ExchangeListPage from "./pages/ExchangeListPage.jsx";
import ExchangeDetailsPage from "./pages/ExchangeDetailsPage.jsx";
import UserListPage from "./pages/UserListPage.jsx";
import PrivateRoute from "./components/routes/PrivateRoute.jsx";
import PublicRoute from "./components/routes/PublicRoute.jsx";
import HistoryPage from "./pages/HistoryPage.jsx";
import ReceiveAccountListPage from "./pages/ReceiveAccountListPage.jsx";
import InformationPage from "./pages/InformationPage.jsx";
import EditInformationPage from "./pages/EditInformationPage.jsx";
import SendAccountListPage from "./pages/SendAccountListPage.jsx";
import RateListPage from "./pages/RateListPage.jsx";
import Layout from "./components/Layout/Layout.jsx";

const App = () => {
    return (
        <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout/>}>
                      <Route index element={<PrivateRoute><ExchangeListPage/></PrivateRoute>}/>
                      <Route path="contacts" element={<PrivateRoute><ContactListPage/></PrivateRoute>} />

                      <Route path="contact-list" element={<PrivateRoute> <ContactListPage/> </PrivateRoute>} />
                      <Route path="users" element={<PrivateRoute> <UserListPage/> </PrivateRoute>} />
                      <Route path="history" element={<PrivateRoute> <HistoryPage/> </PrivateRoute>} />
                      <Route path="exchange-details/:id" element={<PrivateRoute> <ExchangeDetailsPage/> </PrivateRoute>} />
                      <Route path="send-accounts" element={<PrivateRoute> <SendAccountListPage/> </PrivateRoute>} />
                      <Route path="receive-accounts" element={<PrivateRoute> <ReceiveAccountListPage/> </PrivateRoute>} />
                      <Route path="rate-list" element={<PrivateRoute> <RateListPage/> </PrivateRoute>} />
                      <Route path="information" element={<PrivateRoute> <InformationPage/> </PrivateRoute>} />
                      <Route path="edit-information" element={<PrivateRoute> <EditInformationPage/> </PrivateRoute>} />
                  </Route>

                  <Route exact path="/login" element={<PublicRoute> <LoginPage/> </PublicRoute>}/>
              </Routes>
          </BrowserRouter>
        </>
    );
};

export default App;