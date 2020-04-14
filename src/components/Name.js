import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
	return <MuiAlert elevation={6} variant='filled' {...props} />
}

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(5),
			width: '25ch',
		},
	},
	btn: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px',
	},
}))

const Name = (props) => {
	const classes = useStyles()
	const [name, setName] = useState('')
	const [open, setOpen] = React.useState(false)

	const handleName = (e) => {
		setName(e.target.value)
	}

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}
		setOpen(false)
	}

	return (
		<>
			<Snackbar open={open} 
			autoHideDuration={6000} 
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			onClose={handleClose}>
				<Alert onClose={handleClose} severity="error">
					type your name
				</Alert>
			</Snackbar>
			<form className={classes.root} noValidate autoComplete='off'>
				<TextField
					id='outlined-secondary'
					label='Name'
					variant='filled'
					value={name}
					onChange={handleName}
					style={{
						backgroundColor: 'white',
					}}
					InputProps={{
						style: {
							color: 'black',
						},
					}}
				/>
				<Button
					onClick={() => {
						console.log('uwu')

						if (name.trim().length === 0) {
							setOpen(true)
						} else props.setName({ name })
					}}
					className={classes.btn}
				>
					Take quiz now
				</Button>
			</form>
		</>
	)
}

export default Name
