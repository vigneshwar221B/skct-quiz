import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

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

const Home = (props) => {
	const [count, setCount] = useState('Many')
	const classes = useStyles()

	const startQuiz = () => {
		props.start({ start: true })
	}

	useEffect(() => {
		fetch('https://limitless-cliffs-33100.herokuapp.com/howmany')
			.then((res) => res.json())
			.then((data) => {
				setCount(data.count + '+')
			})
			.catch((err) => console.log(err))
	}, [])

	const loading = (
		<div
			style={{
				height: '100%',
				width: '100%',
				backgroundColor: 'rgb(255,255,255)',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{' '}
			<img src={require('../assets/inst.png')} alt="loading" style={{
				height: '14vh',
				width: '14vh',
			}} />
		</div>
	)

	return (
		<>
			{count === 'Many' ? (
				loading
			) : (
				<Container>
					<Grid container spacing={3} alignItems='center'>
						<Grid item xs={12}>
							<h1 style={{ color: 'white', fontSize: '30px' }}>
								Take up the quiz for Covid-19 awareness. Let's Join the chain to
								build unity and strengthen the community together.
								<br />
								<br />
								{count} have already taken the quiz
							</h1>
						</Grid>
						<Grid item xs={12}>
							<Button onClick={startQuiz} className={classes.root}>
								Take quiz now
							</Button>
						</Grid>
					</Grid>
				</Container>
			)}
		</>
	)
}

export default Home
