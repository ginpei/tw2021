import { HelmetProvider } from "react-helmet-async";
import { LoginUserProvider } from "./data/LoginUserContext";
import "./gp/styles/index.scss";
import { AppRouter } from "./misc/AppRouter";

const App: React.VFC = () => {
  return (
    <HelmetProvider>
      <LoginUserProvider>
        <AppRouter />
      </LoginUserProvider>
    </HelmetProvider>
  );
};

export default App;
