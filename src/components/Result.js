import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import ReactToPrint from 'react-to-print'

import data from '../data/main'
import Cert from './Cert'

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
	const componentRef = useRef()
	const classes = useStyles()

	const restart = () => {
		props.restart()
	}

	const total = data.questions.length
	const fail = (
		<Container>
			<Grid container spacing={3} alignItems='center'>
				<Grid item xs={12}>
					you scored {props.state.score} pts
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
			{total !== props.state.score ? (
				fail
			) : (
				<>
					<Cert state={props.state} total={total} ref={componentRef} />
					<ReactToPrint
						trigger={() => (
							<Button
								style={{
									background:
										'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
									color: 'white',
									position: 'absolute',
									top: '8px',
									right: '8px',
								}}
							>
								print
							</Button>
						)}
						content={() => componentRef.current}
					/>
				</>
			)}
		</>
	)
}

export default Result
