import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TextEditorWidgetComponent } from "./text_editor/text_editor_component";
import { HeaderComponent } from "./header/header_component";
import { FooterComponent } from "./footer/footer_component";

const App: React.FC = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <TextEditorWidgetComponent initTextHTML="Hello world" />
      <FooterComponent />
    </div>
  );
};

export default App;
