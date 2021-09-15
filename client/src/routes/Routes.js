import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Diseases from "../pages/Diseases";
import Predict from "../pages/Predict";
import Error404 from "../pages/Error404";

import BacterialSpot from "../pages/Diseases/BacterialSpot";
import EarlyBlight from "../pages/Diseases/EarlyBlight";
import LateBlight from "../pages/Diseases/LateBlight";
import LeafMold from "../pages/Diseases/LeafMold";
import Septoria from "../pages/Diseases/Septoria";
import TsSpiderMite from "../pages/Diseases/TsSpiderMite";
import TargetSpot from "../pages/Diseases/TargetSpot";
import YellowLCV from "../pages/Diseases/YellowLCV";
import MosaicVirus from "../pages/Diseases/MosaicVirus";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/diseases" component={Diseases} />
      <Route exact path="/predict" component={Predict} />
      <Route exact path="/disease/bactspot" component={BacterialSpot} />
      <Route exact path="/disease/earlyblight" component={EarlyBlight} />
      <Route exact path="/disease/lateblight" component={LateBlight} />
      <Route exact path="/disease/leafmold" component={LeafMold} />
      <Route exact path="/disease/septorials" component={Septoria} />
      <Route exact path="/disease/tsspidermite" component={TsSpiderMite} />
      <Route exact path="/disease/targetspot" component={TargetSpot} />
      <Route exact path="/disease/tylcv" component={YellowLCV} />
      <Route exact path="/disease/mv" component={MosaicVirus} />

      <Route component={Error404} />
    </Switch>
  );
};
