import React from "react";
import PropTypes from 'prop-types';
export default function Buttons(props) {
  return (
    <button
      onClick={props.btnFunc}
      className={`mx-1 border-2 rounded-md px-2 py-1 ${props.bgColor} hover:${props.hoverBgCol} text-white active:${props.borderCol} active:border-t-4 active:${props.bgColor}`}
      style={props.btnStyle}
    >
      {props.btnName}
    </button>
  );
}
Buttons.propTypes={
  btnName:PropTypes.string,
  btnFunc:PropTypes.func.isRequired,
  bgColor:PropTypes.string,
  hoverBgCol:PropTypes.string,
  borderCol:PropTypes.string,
  btnStyle:PropTypes.object
}

Buttons.defaultProps={
  btnName:"Button",
  bgColor:'bg-cyan-900',
   hoverBgCol:"bg-cyan-700",
   borderCol:"border-x-cyan-900"
};