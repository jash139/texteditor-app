import React from "react";
import { TextEditor, getInnerHtml, addContentTo } from "../TextEditor/TextEditor";

function App() {
  const id = "my-unique-id";
  const handleClick = () => {
    console.log(getInnerHtml(id));
  }
  const addContent = () => {
    const content = getInnerHtml(id);
    addContentTo(content, "target-div");
  }
  // const content = " "; // for empty textfield
  const content = `<p style="text-align: right;">Cont<u>ent</u></p><p style="text-align: right;"><u>da fjal;</u></p><p style="text-align: right;"><b>ea '</b>&nbsp;</p><p style="text-align: right;"><br></p>`;
  return (
    <React.Fragment>
      <div id="target-div"></div>
      <TextEditor
        id={id}
        content={content}
      />
      <button onClick={handleClick}>print html</button>
      <button onClick={addContent}>add content</button>
    </React.Fragment>
  );
}

export default App;
