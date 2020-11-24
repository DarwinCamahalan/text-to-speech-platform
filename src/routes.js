import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import TextToSpeech from "./pages/TextToSpeech";
import FaceRecognitionPage from "./pages/FaceRecognitionPage";
import PageBuilt from "./pages/PageBuilt";
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
        <Route exact path="/voice-to-text">
          <VoiceToText />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/face-detection">
          <FaceRecognitionPage />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/being-built">
          <PageBuilt />
        </Route>
      </Switch>
    </Router>
  );
}
