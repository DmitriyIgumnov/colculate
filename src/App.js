import styles from "./App.module.css";
import { useState } from "react";

const numbers = [];
export const App = () => {
	const [value, setValue] = useState();

	const click = (event) => {
		const child = event.target.firstChild.data;
		setValue((updateValue) =>
			updateValue === undefined ? (updateValue = child) : updateValue + child,
		);
	};

	const sign = (event) => {
		const sign = event.target.firstChild.data;
		setValue((updateValue) => (updateValue = undefined));
		numbers.push(value)
		numbers.push(sign);
	};

	const results = (event) => {
		numbers.push(value)
		const num1 = Number(numbers[0]);
		const sign = numbers[1];
		const num2 = Number(numbers[2]);
		let result = undefined;
		switch (sign) {
			case "+":
				result = num1 + num2;
				break;
			case "-":
				result = num1 - num2;
				break;
		}
		setValue((updateValue) => (updateValue = result));
		numbers.length = 0
	};

	const clear = () => {
		setValue((updateValue) => (updateValue = undefined))
		numbers.length = 0
	}

	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<div className={styles.strong}>{value}</div>
				<button onClick={click} className={styles.button}>
					0
				</button>
				<button onClick={click} className={styles.button}>
					1
				</button>
				<button onClick={click} className={styles.button}>
					2
				</button>
				<button onClick={click} className={styles.button}>
					3
				</button>
				<button onClick={click} className={styles.button}>
					4
				</button>
				<button onClick={click} className={styles.button}>
					5
				</button>
				<button onClick={click} className={styles.button}>
					6
				</button>
				<button onClick={click} className={styles.button}>
					7
				</button>
				<button onClick={click} className={styles.button}>
					8
				</button>
				<button onClick={click} className={styles.button}>
					9
				</button>
				<button onClick={sign} className={("plus", styles.button)}>
					+
				</button>
				<button onClick={sign} className={("minus", styles.button)}>
					-
				</button>
				<button onClick = {results} className={( styles.button)}>=</button>
				<button onClick={clear} className={(styles.button)}>C</button>
			</header>
		</div>
	);
};
