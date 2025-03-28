/* eslint-disable strict */
import { useState } from 'packages/eslint-config-test/__test__/react';
var Component = function (props) {
    var _a = useState(), click = _a[0], setClick = _a[1];
    var handleClick = function (event) { return setClick(event); };
    return (<>
      <div>{props.children}</div>
    </>);
};
export default Component;
