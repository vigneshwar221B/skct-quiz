import React from 'react'

class Cert extends React.Component {
	componentDidMount() {
		fetch('https://limitless-cliffs-33100.herokuapp.com/add')
			.then((res) => res.json())
			.then((data) => {})
	}

	render() {
		return (
			<div
				id='printC'
				style={{
					padding: '20px',
					textAlign: 'center',
					border: '10px solid #FBC500',
					backgroundColor: 'white',
					marginBottom: '10px',
				}}
			>
				<div
					style={{
						padding: '20px',
						textAlign: 'center',
						border: '5px solid #FF6701',
						backgroundColor: 'white',
					}}
				>
					<span
						style={{
							fontSize: '50px',
							fontWeight: 'bold',
							fontFamily: 'sans-serif',
						}}
					>
						Certificate of Completion
					</span>
					<br />
					<br />
					<br />
					<span style={{ fontSize: '25px', fontFamily: 'sans-serif' }}>
						<i>This is to certify that</i>
					</span>
					<br />
					<span style={{ fontSize: '30px', fontFamily: 'sans-serif' }}>
						{this.props.state.name + '   '}
					</span>
					<span style={{ fontSize: '25px', fontFamily: 'sans-serif' }}>
						<i>has completed the course</i>
					</span>{' '}
					<br />
					<br />
					<span style={{ fontSize: '30px', fontFamily: 'sans-serif' }}>
						course name
					</span>{' '}
					<br />
					<br />
					<span style={{ fontSize: '20px', fontFamily: 'sans-serif' }}>
						with score of{' '}
						<b>
							{this.props.state.score} of {this.props.total}
						</b>
					</span>{' '}
					<br />
					<br />
					<br />
					<br />
					<span style={{ fontSize: '25px', fontFamily: 'sans-serif' }}>
						<i>dated {new Date().toDateString()}</i>
					</span>
					<br />
				</div>
			</div>
		)
	}
}

export default Cert
