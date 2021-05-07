import React, { useEffect } from "react";

import "./TextEditor.css";

function TextEditor(props) {
    const id = props.id;
    const toolbarStyle = props.toolbarStyle ? props.toolbarStyle : {};
    const toolbarItemsStyle = props.toolbarItemsStyle ? props.toolbarItemsStyle : {};
    const editorStyle = props.editorStyle ? props.editorStyle : {};

    useEffect(() => {
        let content = props.content;
        if (content) {
            content = stringToHtml(content);
            addContentTo(content, props.id);
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const addLink = () => {
        var url = prompt("Enter URL:");
        document.execCommand("createLink", false, url);
    }

    const handleClick = (value) => {
        document.execCommand([value], false, '');
    };

    return (
        <React.Fragment>
            <div className="toolbar" style={toolbarStyle}>
                <button
                    className="tool-items fa fa-bold"
                    onClick={() => handleClick("bold")}
                    style={toolbarItemsStyle}
                />
                <button
                    className="tool-items fa fa-italic"
                    onClick={() => handleClick("italic")}
                    style={toolbarItemsStyle}
                />
                <button
                    className="tool-items fa fa-underline"
                    onClick={() => handleClick("underline")}
                    style={toolbarItemsStyle}

                />
                <button
                    className="tool-items fa fa-link"
                    onClick={() => addLink()}
                    style={toolbarItemsStyle}
                />
                <button
                    className="tool-items fa fa-align-center"
                    onClick={() => handleClick("justifyCenter")}
                    style={toolbarItemsStyle}
                />
                <button
                    className="tool-items fa fa-align-left"
                    onClick={() => handleClick("justifyLeft")}
                    style={toolbarItemsStyle}
                />
                <button
                    className="tool-items fa fa-align-right"
                    onClick={() => handleClick("justifyRight")}
                    style={toolbarItemsStyle}
                />
                <button
                    className="tool-items fa fa-undo"
                    onClick={() => handleClick("undo")}
                    style={toolbarItemsStyle}
                />
                <button
                    className="tool-items fa fa-repeat"
                    onClick={() => handleClick("redo")}
                    style={toolbarItemsStyle}
                />
            </div>
            <div
                className="react-text-editor"
                id={id}
                contentEditable={true}
                suppressContentEditableWarning={true}
                style={editorStyle}
            >
                <p>Content</p>
            </div>
        </React.Fragment>
    );
}

const getTextContent = (id) => {
    const editorContent = document.querySelector(`#${id}`);
    return editorContent.textContent;
};

const getInnerHtml = (id) => {
    const editorContent = document.querySelector(`#${id}`);
    return editorContent.innerHTML;
};

const addContentTo = (content, id) => {
    const targetDiv = document.querySelector(`#${id}`);
    targetDiv.innerHTML = "";
    targetDiv.innerHTML += content;
};

const stringToHtml = (originalStr) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(originalStr, 'text/html');
    return doc.body.innerHTML;
};

export {
    TextEditor,
    getTextContent,
    getInnerHtml,
    addContentTo
}
