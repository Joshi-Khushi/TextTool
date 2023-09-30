import React, {useState} from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark'?'white':'#22395a',
        backgroundColor: props.mode === 'dark'?'#22395a':'white',
    }

  return (
    <div className="container" >
        <h1 className="my-3" style={{color: props.mode === 'dark'?'white':'#22395a'}}>About Us</h1>

        <p style={{color: props.mode === 'dark'?'white':'#22395a', fontSize: '18px'}}>Introducing a versatile solution designed to ease the way you interact with text. Whether you need to streamline content, reformat documents, or imply specific letter case to your information, our website offers an intuitive platform with a powerful array of features. From seamless conversions to dynamic restructuring, it's your go-to companion for transforming text in a flash. Bid manual editing farewell and embrace the efficiency of our Text Transformation Tool - TextUtils.</p>

        <h4 className="my-2" style={{color: props.mode === 'dark'?'white':'#22395a'}}>TextUtils Features:</h4>

        <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                <strong>UpperCase to LowerCase</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                This transformation involves converting all capital letters in a text to their corresponding small letters. For example, "TEXTUTILS" becomes "textutils" after the transformation.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                <strong>LowerCase to UpperCase</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                This transformation involves converting all small letters in a text to their corresponding capital letters. For example, "textutils" becomes "TEXTUTILS" after the transformation.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                <strong>Trim extra spaces</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                This transformation involves removing extra blank spaces at the start and end of the text content. For example, "    TextUtils is nice     " becomes "TextUtils is nice" after transformation.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={myStyle}>
                <strong>Clear Text</strong>
            </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                This is an option button to clear the text area in case you want to transform new text content.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingFive">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={myStyle}>
                <strong>Word Counter & Character Counter</strong>
            </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                Word count is the number of words in a given piece of text or document. For example, in the sentence "Hello World" there are 2 words.
                Character count is the total number of characters in a piece of text, including letters, numbers, punctuation, and spaces.For example, in the sentence "Hello, World!", there are 13 characters, including the space and punctuation.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingSix">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" style={myStyle}>
                <strong>Reading Time</strong>
            </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                Time taken to read the entire text content is displayed to track your reading speed. On an average, it takes about 0.008 minutes to read 1 word.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingSeven">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven" style={myStyle}>
                <strong>Free to Use with Unlimited Access</strong>
            </button>
            </h2>
            <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                TextUtils aims to help anyone and everyone and provides free access to use it multiple times.
            </div>
            </div>
        </div>
        </div>

    </div>
  )
}
