import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const [text, settext] = useState('');

  const handleOnChange = (event)=>{
    settext(event.target.value);
  }

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    settext(newText);
    props.showAlert("Converted to UpperCase", "success")
  }

  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    settext(newText);
    props.showAlert("Converted to LowerCase", "success")
  }

  const handleClear = ()=>{
    let newText = '';
    settext(newText);
    props.showAlert("Cleared all text", "success");
  }

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea className="form-control" id="my-box" style={{backgroundColor: props.mode==='dark'?'#042768':'#d5d8da', color: props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange} rows="10"></textarea>
      </div>
      <button className="btn btn-success mx-2 py-2" onClick={handleUpClick} style={{backgroundColor: props.mode==='dark'?'#042768':'#d5d8da', color: props.mode==='dark'?'white':'#042743'}}>Convert to UpperCase</button>
      <button className="btn btn-success mx-2 py-2" onClick={handleLowClick} style={{backgroundColor: props.mode==='dark'?'#042768':'#d5d8da', color: props.mode==='dark'?'white':'#042743'}}>Convert to LowerCase</button>
      <button className="btn btn-success mx-2 py-2" onClick={handleClear} style={{backgroundColor: props.mode==='dark'?'#042768':'#d5d8da', color: props.mode==='dark'?'white':'#042743'}}>Clear all Text</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h4>Your Text Summary</h4>
      <p>{text.split(" ").filter(Boolean).length} Words & {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} minutes take to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something above to view your preview"}</p>
    </div>
    </>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string
}