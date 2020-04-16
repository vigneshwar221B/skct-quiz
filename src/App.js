import React, { useState } from 'react'
import './App.css'

import Home from './components/Home'
import Name from './components/Name'
import Quiz from './components/Quiz'
import Result from './components/Result'

function App() {
	const [state, setstate] = useState({
		start: false,
		name: '',
		score: 0,
		finish: false,
	})

	const stateHandler = (newstate) => {
		setstate((state) => {
			return {
				...state,
				...newstate,
			}
		})
	}

	console.log(state)

	const restart = () => {
		setstate((state) => {
			return {
				...state,
				start: false,
				name: '',
				score: 0,
				finish: false,
			}
		})
	}
	return (
		<>
			<div
				className='App'
				style={{
					display: 'flex',
					height: '100%',
					width: '100%',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{!state.start && !state.finish && <Home start={stateHandler} />}
				{state.start && !state.name && !state.finish && (
					<Name setName={stateHandler} />
				)}
				{state.name && !state.finish && (
					<Quiz name={state.name} handler={stateHandler} />
				)}
				{state.finish && <Result state={state} restart={restart} />}
			</div>
			<div class='footer' id='foot'>
				<div class='left'>
					<b>copyright ©</b>
				</div>
				<div class='center'>
					<b>by SKCT website team CSE</b>
				</div>
				<div class='right'>
					<a href="http://www.skct.edu.in" style={{color: 'white', textDecoration: 'none'}}>official website</a>
				</div>
			</div>
		</>
	)
}

export default App
