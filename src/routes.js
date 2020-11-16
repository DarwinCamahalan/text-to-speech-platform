import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import TextToSpeech from "./pages/TextToSpeech";
import VoiceToText from "./pages/VoiceToText";

export default function routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/text-to-speech">
          <TextToSpeech />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/take-notes">
          <VoiceToText />
        </Route>
      </Switch>
    </Router>
  );
}
