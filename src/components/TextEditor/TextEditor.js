import React from "react";

import "./TextEditor.css";

function TextEditor() {
    const addLink = () => {
        var url = prompt("Enter the URL");
        document.execCommand("createLink", false, url);
    }

    const getTextContent = () => {
        var editorContent = document.querySelector(".text-editor");
        console.log(editorContent.textContent);
    };

    const getInnerHtml = () => {
        var editorContent = document.querySelector(".text-editor");
        console.log(editorContent.innerHTML);
    };

    return (
        <React.Fragment>
            <div className="toolbar">
                <button
                    className="tool-items fa fa-bold"
                    onClick={() => document.execCommand('bold', false, '')}
                />
                <button
                    className="tool-items fa fa-italic"
                    onClick={() => document.execCommand('italic', false, '')}
                />
                <button
                    className="tool-items fa fa-underline"
                    onClick={() => document.execCommand('underline', false, '')}

                />
                <button
                    className="tool-items fa fa-link"
                    onClick={() => addLink()}
                />
                <button
                    className="tool-items fa fa-undo"
                    onClick={() => document.execCommand('undo', false, '')}
                />
                <button
                    className="tool-items fa fa-repeat"
                    onClick={() => document.execCommand('redo', false, '')}
                />
                <button
                    className="tool-items fa fa-align-center"
                    onClick={() => document.execCommand('justifyCenter', false, '')}
                />
                <button
                    className="tool-items fa fa-align-left"
                    onClick={() => document.execCommand('justifyLeft', false, '')}
                />
                <button
                    className="tool-items fa fa-align-right"
                    onClick={() => document.execCommand('justifyRight', false, '')}
                />
            </div>
            <div className="text-editor" contentEditable={true} suppressContentEditableWarning={true}>
                <p>Your content goes here</p>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="print-button" onClick={getTextContent}>Print Text</button>
                <button className="print-button" onClick={getInnerHtml}>Print Html</button>
            </div>
        </React.Fragment>
    );
}

export default TextEditor;
