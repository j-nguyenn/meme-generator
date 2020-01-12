import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TextEditorWidgetComponent } from "./text_editor/text_editor_component";
import { IconComponent } from "./icon/icon_component";

const App: React.FC = () => {
  return (
    <div className="App">
      <TextEditorWidgetComponent initTextHTML="Hello world" />
    </div>
  );
};

export default App;
