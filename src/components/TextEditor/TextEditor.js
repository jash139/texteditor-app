import React from "react";

import "./TextEditor.css";

function TextEditor() {
    const addLink = () => {
        var url = prompt("Enter the URL");
        document.execCommand("createLink", false, url);
    }

    const printText = () => {
        var editorContent = document.querySelector(".text-editor");
        console.log(editorContent.textContent);
    };

    const printInnerHtml = () => {
        var getContent = document.querySelector(".getcontent");
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
            <div className="text-editor" contentEditable>
                <p>Your content goes here</p>
            </div>

            <button className="print-button" onClick={printText}>Print Text</button>
            <button className="print-button" onClick={printInnerHtml}>Print Html</button>
        </React.Fragment>
    );
}

export default TextEditor;
