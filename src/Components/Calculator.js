/** @format */
/* eslint-disable */
import React, { useState } from "react";
import "./Style.css";
import DisplayInput from "./Display-input";
import Buttons from "./Buttons";

function Calculator() {
	const [obj, setObj] = useState({
		total: 0,
		next: 0,
		operation: null,
	});

	return (
		<div className="container">
			<div className="grid-container">
				<DisplayInput  obj={obj} />
				<Buttons name="Ac" obj={obj} setObj={setObj} />
				<Buttons name="+/-" obj={obj} setObj={setObj} />
				<Buttons name="%" obj={obj} setObj={setObj} />
				<Buttons name="/" obj={obj} setObj={setObj} />
				<Buttons name="7" obj={obj} setObj={setObj} />
				<Buttons name="8" obj={obj} setObj={setObj} />
				<Buttons name="9" obj={obj} setObj={setObj} />
				<Buttons name="x" obj={obj} setObj={setObj} />
				<Buttons name="4" obj={obj} setObj={setObj} />
				<Buttons name="5" obj={obj} setObj={setObj} />
				<Buttons name="6" obj={obj} setObj={setObj} />
				<Buttons name="-" obj={obj} setObj={setObj} />
				<Buttons name="1" obj={obj} setObj={setObj} />
				<Buttons name="2" obj={obj} setObj={setObj} />
				<Buttons name="3" obj={obj} setObj={setObj} />
				<Buttons name="+" obj={obj} setObj={setObj} />
				<Buttons name="0" obj={obj} setObj={setObj} />
				<Buttons name="." obj={obj} setObj={setObj} />
				<Buttons name="=" obj={obj} setObj={setObj} />
			</div>
		</div>
	);
}

export default Calculator;
