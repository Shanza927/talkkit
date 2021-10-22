import { Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup.js";
import "../assets/styles/main.scss";
import Signin from "./pages/Signin";
import Interface from "./pages/Interface";

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Signup} />
                <Route path="/signin" component={Signin} />
                <Route path="/interface" component={Interface} />
            </Switch>
        </>
  );
}

export default App;
