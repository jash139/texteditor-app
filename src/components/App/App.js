import React, { useEffect } from "react";
import { TextEditor, getInnerHtml, addContentTo } from "../TextEditor/TextEditor";

function App() {
  const id = "my-unique-id";
  const targetDiv = "target-div";

  const handleClick = () => {
    console.log(getInnerHtml(id));
  }

  const addContent = () => {
    const content = getInnerHtml(id);
    addContentTo(content, targetDiv);
  }

  // const content = ` `; // for empty textfield

  const content = `<p style="text-align: right;">Cont<u>ent</u></p><p style="text-align: right;"><u>da fjal;</u></p><p style="text-align: right;"><b>ea '</b>&nbsp;</p><p style="text-align: right;"><br></p>`;

  useEffect(() => {
    addContentTo(content, id);
  }, []);

  return (
    <React.Fragment>
      <div id={targetDiv}></div>
      <TextEditor
        id={id}
      // content={content}
      // showHeadings={false}
      // showJustify={false}
      // showUndoRedo={false}
      // content={content}
      />
      <button onClick={handleClick}>Print html</button>
      <button onClick={addContent}>Add content</button>
    </React.Fragment>
  );
}

export default App;
