import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

import data from '../data/main'

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(3),
	},
	button: {
		margin: theme.spacing(1, 1, 0, 0),
	},
}))

export default function Quiz(props) {
	const classes = useStyles()
	const [value, setValue] = React.useState('')
	const [score, setScore] = React.useState(0)
	const [index, setIndex] = React.useState(0)

	const handleRadioChange = (event) => {
		setValue(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setValue('')

		if (value + '' === data.answers[index] + '') {
			setScore((score) => score + 1)
			props.handler({ score: score + 1 })
		}

		if (index === data.questions.length - 1) {
			props.handler({ finish: true })
		}

		setIndex((index) => index + 1)
	}

	return (
		<Paper elevation={3} style={{padding: '8px'}}>
			score: {score}
			<form onSubmit={handleSubmit}>
				<FormControl component='fieldset' className={classes.formControl}>
					<FormLabel component='legend'>{data.questions[index]}</FormLabel>
					<RadioGroup
						aria-label='quiz'
						name='quiz'
						value={value}
						onChange={handleRadioChange}
					>
						{data.choices[index].map((el) => {
							return (
								<FormControlLabel value={el} control={<Radio />} label={el} />
							)
						})}
					</RadioGroup>

					<Button
						type='submit'
						variant='outlined'
						color='primary'
						className={classes.button}
					>
						next
					</Button>
				</FormControl>
			</form>
		</Paper>
	)
}
