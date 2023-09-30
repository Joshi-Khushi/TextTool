import React, {useState} from 'react'

export default function TextForm(props) {

    // function for transforming to uppercase on clicking the button
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("success", "text converted to upper case.");
    }

    // function for transforming to lowercase on clicking the button
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("success", "text converted to lower case.");
    }

    // function for trimming blank spaces on clicking the button
    const handleTrimClick = () => {
        let newText = text.trim();
        setText(newText);
        props.showAlert("success", "text extra spaces trimmed.");
    }

    // function for clearing all text on clicking the button
    const handleClearClick = () => {
        let newText = " ";
        setText(newText);
        props.showAlert("success", "text cleared.");

    }

    // function to handle change
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    // text = "new text"; //wrong way to change the state
    // setText("new text"); //correct way to change the state

    return (
        <>
        <div className="container mb-2" style={{color: props.mode === 'dark'?'white':'#042743'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#162531':'white', color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTrimClick}>Trim extra space</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear text</button>
            
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}} >
            <h1>Your text summary</h1>
            {/* '\s' denotes any kind of whitespace and '+' denotes more than one whitespace */}
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes taken to read</p>

            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter text to preview . . ."}</p>
        </div>
        </>
    )
}