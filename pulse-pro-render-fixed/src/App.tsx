import { Switch, Route, Router as WouterRouter } from "wouter";
import Atmosphere from "@/components/Atmosphere";
import ScrollTo from "@/components/ScrollTo";
import CursorGlow from "@/components/CursorGlow";
import Home from "@/pages/Home";
import Work from "@/pages/Work";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Atmosphere />
      <div className="grain" aria-hidden />
      <ScrollTo />
      <CursorGlow />
      <div className="relative z-10">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </WouterRouter>
  );
}

export default App;
