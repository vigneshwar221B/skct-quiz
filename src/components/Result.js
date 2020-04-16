import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import cert from '../assets/cert'

import * as jsPDF from 'jspdf'
import { saveAs } from 'file-saver'

const useStyles = makeStyles({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px',
	},
})

const Result = (props) => {
	useEffect(() => {
		fetch(' https://limitless-cliffs-33100.herokuapp.com/add')
			.then((res) => res.json())
			.then((data) => {})
			.catch((err) => console.log(err))
	}, [])

	const classes = useStyles()

	const restart = () => {
		console.log('restarted')

		props.restart()
	}

	const fail = (
		<Container>
			<Grid container spacing={3} alignItems='center'>
				<Grid item xs={12} style={{ color: 'white' }}>
					<h1
						style={{
							fontSize: '30pt',
						}}
					>
						You scored only {props.state.score} points. Try to get atleast 7 to
						get the certificate.
					</h1>
				</Grid>
				<Grid item xs={12}>
					<Button onClick={restart} className={classes.root}>
						Re-take quiz now
					</Button>
				</Grid>
			</Grid>
		</Container>
	)

	return (
		<>
			{props.state.score < 7 ? (
				fail
			) : (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<p
						style={{
							color: 'white',
							fontSize: '30pt',
						}}
					>
						Thanks for taking the Quiz
					</p>
					<Button
						className={classes.root}
						style={{
							marginTop: '20px',
						}}
						onClick={() => {
							const doc = new jsPDF({ orientation: 'landscape' })
							doc.addImage(cert, 'PNG', 0, 0, 290, 210)
							doc.setFontSize(30)
							doc.setTextColor(0, 0, 0)
							doc.text(props.state.name, 140, 120, null, null, 'center')
							saveAs(doc.output('blob'), 'skct-covid19-quiz.pdf')
						}}
					>
						Download the certificate
					</Button>
				</div>
			)}
		</>
	)
}

export default Result
