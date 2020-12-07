import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import TextToSpeech from "./pages/TextToSpeech";
import FaceRecognitionPage from "./pages/FaceRecognitionPage";
import PageBuilt from "./pages/PageBuilt";
import VoiceToText from "./pages/VoiceToText";
import TeamPage from "./pages/TeamPage";
import AboutPage from "./pages/AboutPage";
import ChatPage from "./pages/ChatPage";

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
        <Route exact path="/face-recognition">
          <FaceRecognitionPage />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/being-built">
          <PageBuilt />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/team">
          <TeamPage />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/about">
          <AboutPage />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/chat">
          <ChatPage />
        </Route>
      </Switch>
    </Router>
  );
}
