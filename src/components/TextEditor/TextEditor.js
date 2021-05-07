import React from "react";

import "./TextEditor.css";

function TextEditor() {
    // var btn = document.querySelector(".sai");
    // var getText = document.querySelector(".getText");
    // var content = document.querySelector(".getcontent");
    // var editorContent = document.querySelector(".editor");

    // btn.addEventListener("click", function () {
    //     var s = editorContent.innerHTML;
    //     content.style.display = "block";
    //     content.textContent = s;
    // });

    // getText.addEventListener("click", function () {
    //     const old = editorContent.textContent;
    //     content.style.display = "block";
    //     content.textContent = old;
    // });

    function link() {
        var url = prompt("Enter the URL");
        document.execCommand("createLink", false, url);
    }

    // function copy() {
    //     document.execCommand("copy", false, "");
    // }

    // function changeColor() {
    //     var color = prompt("Enter your color in hex ex:#f1f233");
    //     document.execCommand("foreColor", false, color);
    // }


    // function getImage() {
    //     var file = document.querySelector("input[type=file]").files[0];

    //     var reader = new FileReader();

    //     let dataURI;

    //     reader.addEventListener(
    //         "load",
    //         function () {
    //             dataURI = reader.result;

    //             const img = document.createElement("img");
    //             img.src = dataURI;
    //             editorContent.appendChild(img);
    //         },
    //         false
    //     );

    //     if (file) {
    //         console.log("s");
    //         reader.readAsDataURL(file);
    //     }
    // }

    const printInnerHtml = () => {
        var getContent = document.querySelector(".getcontent");
        var editorContent = document.querySelector(".text-editor");
        getContent.textContent = editorContent.innerHTML;

        console.log(editorContent);
    }

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
                    onClick={() => link()}
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

            <button className="sai btn">GetHtml</button>
            <button className="getText btn">GetText</button>
            <button className="btn print" onClick={printInnerHtml}>PrintHtml</button>

            <section className="getcontent" />
        </React.Fragment>
    );
}

export default TextEditor;
