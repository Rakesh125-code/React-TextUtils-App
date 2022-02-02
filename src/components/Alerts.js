import React from 'react';

export default function Alerts(props) {
  return (
    props.alert && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
  <strong className="font-bold">Success</strong>
  <span className="block sm:inline">{props.alert.msg}</span>
  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
  </span>
</div>
  );
}
