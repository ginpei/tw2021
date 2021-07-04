import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserHomePage, userHomePath } from "../ui/screens/account/UserHomePage";
import { HomePage } from "../ui/screens/home/HomePage";
import { LoginPage, loginPath } from "../ui/screens/login/LoginPage";
import {
  MessageViewPage,
  messageViewPath,
} from "../ui/screens/messageView/MessageViewPage";
import { NotFoundScreen } from "../ui/screens/notFound/NotFoundScreen";
import { rootPath } from "./mist";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={rootPath()} component={HomePage} />
        <Route exact path={loginPath()} component={LoginPage} />
        <Route
          exact
          path={userHomePath(":screenName")}
          component={UserHomePage}
        />
        <Route
          exact
          path={messageViewPath(":screenName", ":messageId")}
          component={MessageViewPage}
        />
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  );
};
