import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./TextEditor.css";

function TextEditor(props) {
    const id = props.id;
    const toolbarStyle = props.toolbarStyle;
    const toolItemStyle = props.toolItemStyle;
    const editorStyle = props.editorStyle;

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
    };

    function insertHeading(html) {
        var sel, range;
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();
                var el = document.createElement("div");
                el.innerHTML = html;
                var frag = document.createDocumentFragment(), node, lastNode;
                while ((node = el.firstChild)) {
                    lastNode = frag.appendChild(node);
                }
                range.insertNode(frag);

                if (lastNode) {
                    range = range.cloneRange();
                    range.setStartAfter(lastNode);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
        } else if (document.selection && document.selection.type !== "Control") {
            document.selection.createRange().pasteHTML(html);
        }
    }

    const handleClick = (value) => {
        document.execCommand([value], false, '');
    };

    return (
        <React.Fragment>
            <div className="toolbar" style={toolbarStyle}>
                <button
                    className="tool-item heading-btn"
                    onClick={() => insertHeading(`<h1>Heading 1</h1>`)}
                >
                    h1
                </button>
                <button
                    className="tool-item heading-btn"
                    onClick={() => insertHeading(`<h2>Heading 2</h2>`)}
                >
                    h2
                </button>
                <button
                    className="tool-item heading-btn"
                    onClick={() => insertHeading(`<h3>Heading 3</h3>`)}
                >
                    h3
                </button>
                <button
                    className="tool-item heading-btn"
                    onClick={() => insertHeading(`<h4>Heading 4</h4>`)}
                >
                    h4
                </button>
                <button
                    className="tool-item heading-btn"
                    onClick={() => insertHeading(`<h5>Heading 5</h5>`)}
                >
                    h5
                </button>
                <button
                    className="tool-item heading-btn"
                    onClick={() => insertHeading(`<h6>Heading 6</h6>`)}
                >
                    h6
                </button>
                <button
                    className="tool-item fa fa-bold"
                    onClick={() => handleClick("bold")}
                    style={toolItemStyle}
                />
                <button
                    className="tool-item fa fa-italic"
                    onClick={() => handleClick("italic")}
                    style={toolItemStyle}
                />
                <button
                    className="tool-item fa fa-underline"
                    onClick={() => handleClick("underline")}
                    style={toolItemStyle}

                />
                <button
                    className="tool-item fa fa-link"
                    onClick={() => addLink()}
                    style={toolItemStyle}
                />
                <button
                    className="tool-item fa fa-align-center"
                    onClick={() => handleClick("justifyCenter")}
                    style={toolItemStyle}
                />
                <button
                    className="tool-item fa fa-align-left"
                    onClick={() => handleClick("justifyLeft")}
                    style={toolItemStyle}
                />
                <button
                    className="tool-item fa fa-align-right"
                    onClick={() => handleClick("justifyRight")}
                    style={toolItemStyle}
                />
                <button
                    className="tool-item fa fa-undo"
                    onClick={() => handleClick("undo")}
                    style={toolItemStyle}
                />
                <button
                    className="tool-item fa fa-repeat"
                    onClick={() => handleClick("redo")}
                    style={toolItemStyle}
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

const propTypes = {
    id: PropTypes.string.isRequired,
    toolbarStyle: PropTypes.object,
    toolItemStyle: PropTypes.object,
    editorStyle: PropTypes.object
};

const defaultProps = {
    id: "react-text-editor",
    toolbarStyle: {},
    toolItemStyle: {},
    editorStyle: {}
};

TextEditor.propTypes = propTypes;
TextEditor.defaultProps = defaultProps;

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
};
