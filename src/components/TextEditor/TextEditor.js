import React from "react";

import "./TextEditor.css";

function TextEditor() {
    const addLink = () => {
        var url = prompt("Enter URL:");
        document.execCommand("createLink", false, url);
    }

    const handleClick = (value) => {
        document.execCommand([value], false, '');
    };

    const getTextContent = () => {
        var editorContent = document.querySelector(".text-editor");
        console.log(editorContent.textContent);
    };

    const getInnerHtml = () => {
        var editorContent = document.querySelector(".text-editor");
        console.log(editorContent.innerHTML);
    };

    return (
        <div>
            <div className="toolbar">
                <button
                    className="tool-items fa fa-bold"
                    onClick={() => handleClick('bold')}
                />
                <button
                    className="tool-items fa fa-italic"
                    onClick={() => handleClick('italic')}
                />
                <button
                    className="tool-items fa fa-underline"
                    onClick={() => handleClick('underline')}

                />
                <button
                    className="tool-items fa fa-link"
                    onClick={() => addLink()}
                />
                <button
                    className="tool-items fa fa-undo"
                    onClick={() => handleClick('undo')}
                />
                <button
                    className="tool-items fa fa-repeat"
                    onClick={() => handleClick('redo')}
                />
                <button
                    className="tool-items fa fa-align-center"
                    onClick={() => handleClick('justifyCenter')}
                />
                <button
                    className="tool-items fa fa-align-left"
                    onClick={() => handleClick('justifyLeft')}
                />
                <button
                    className="tool-items fa fa-align-right"
                    onClick={() => handleClick('justifyRight')}
                />
            </div>
            <div className="text-editor" contentEditable={true} suppressContentEditableWarning={true}>
                <p>Content</p>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="print-button" onClick={getTextContent}>Print Text</button>
                <button className="print-button" onClick={getInnerHtml}>Print Html</button>
            </div>
        </div>
    );
}

export default TextEditor;
