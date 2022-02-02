import React, { useState } from "react";
import Buttons from "./Buttons";
export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleOnUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to uppercase");
  };
  const handleOnLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to lowercase");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra space removed");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(" Copied to clipboard");
  };
  const handleClear = () => {
    setText("");
    props.showAlert(" Text Cleared");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className=" flex justify-center py-5">
        <textarea
          value={text}
          onChange={handleOnChange}
          className={`px-2 py-1 border-2 rounded-md  w-full mx-1 sm:w-11/12 md:w-10/12 lg:w-1/2 ${props.mode==="Light"?"text-cyan-100 border-cyan-100 ":"text-cyan-900 border-cyan-900" } `}
          
          style={{backgroundColor: props.mode==="Light"?"#122738":"rgb(219 234 254)"}}
        //   className="text-cyan-900 px-2 py-1 border-2 rounded-md bg-blue-100 border-cyan-900 w-1/2"
          rows="10"
        > 
        </textarea>
      </div>
      
      {/* <div className=" flex justify-center px-2 py-5"></div> */}
      <div className="flex justify-center flex-wrap  px-2 py-5">
        <Buttons btnFunc={handleOnUpper} btnName="ToUpperCase"
         bgColor={`${props.mode==="Light"?"bg-DarkBlue":"bg-cyan-900"}`} />
        <Buttons btnFunc={handleOnLower} btnName="ToLowerCase"  bgColor={`${props.mode==="Light"?"bg-DarkBlue":"bg-cyan-900"}`}/>
        <Buttons btnFunc={handleExtraSpace} btnName="RemoveExtraSpace" bgColor={`${props.mode==="Light"?"bg-DarkBlue":"bg-cyan-900"}`} />
        <Buttons btnFunc={handleCopy} btnName="Copy" bgColor={`${props.mode==="Light"?"bg-DarkBlue":"bg-cyan-900"}`} />
        <Buttons
          btnFunc={handleClear}
          btnName="Clear"
          bgColor="bg-red-900"
          hoverBgCol="bg-red-700"
          borderCol="border-x-red-900"
        />

        {/* <button
          onClick={handleOnUpper}
          className="mx-1 border-2 rounded-md px-2 py-1 bg-cyan-900 hover:bg-cyan-700 text-white active:border-x-cyan-900 active:border-t-4 active:bg-cyan-900"
        >
          ToUpperCase
        </button>

        <button
          onClick={handleOnLower}
          className="mx-1 border-2 rounded-md px-2 py-1 bg-cyan-900 hover:bg-cyan-700 text-white active:border-x-cyan-900 active:border-t-4 active:bg-cyan-900"
        >
          ToLowerCase
        </button>

        <button
          onClick={handleExtraSpace}
          className="mx-1 border-2 rounded-md px-2 py-1 bg-cyan-900 hover:bg-cyan-700 text-white active:border-x-cyan-900 active:border-t-4 active:bg-cyan-900"
        >
          RemoveExtraSpace
        </button>

        <button
          onClick={handleCopy}
          className="mx-1 border-2 rounded-md px-2 py-1 bg-cyan-900 hover:bg-cyan-700 text-white active:border-x-cyan-900 active:border-t-4 active:bg-cyan-900"
        >
          Copy
        </button>

        <button
          onClick={handleClear}
          className="mx-1 border-2 rounded-md px-2 py-1 bg-red-900 hover:bg-red-700 text-white active:border-x-red-900 active:border-t-4 active:bg-red-900"
        >
          Clear
        </button> */}
      </div>

      <div className=" mx-2 text-2xl">

        <div className=" flex justify-center py-4">

          <h1 className={` text-center  border-2 px-3 py-1 rounded-xl border-x-4 w-full mx-1 sm:w-11/12 md:w-10/12 lg:w-1/2
          ${props.mode==="Light"?"text-white border-x-white border-y-white bg-DarkBlue"
          :"text-cyan-900 border-x-cyan-500  border-y-cyan-900"}`}>
            Your Text Summary
          </h1>

        </div>
         <div className={`${props.mode==="Light"?"text-white":"text-DarkBlue"}`}>
        <p className=" text-center text-xl py-2 px-3">
          {text.split(" ").length} words and {text.length} characters
        </p>

        <p className=" text-center text-xl py-2 px-3">
          {text.split(" ").length * 0.008} minutes to read
        </p>
        </div>
    
      </div>
    </>
  );
}
