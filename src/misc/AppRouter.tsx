import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "../ui/screens/home/HomePage";
import { LoginPage, loginPath } from "../ui/screens/login/LoginPage";
import { NotFoundScreen } from "../ui/screens/notFound/NotFoundScreen";
import { rootPath } from "./mist";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={rootPath()} component={HomePage} />
        <Route exact path={loginPath()} component={LoginPage} />
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  );
};
