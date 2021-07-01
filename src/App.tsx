import { HelmetProvider } from "react-helmet-async";
import { AppRouter } from "./misc/AppRouter";
import "./gp/styles/index.scss";

const App: React.VFC = () => {
  return (
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  );
};

export default App;
