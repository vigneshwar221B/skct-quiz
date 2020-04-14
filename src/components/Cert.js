import React from 'react'
import '../styles.css'

class Cert extends React.Component {
	componentDidMount() {
		
		fetch('https://limitless-cliffs-33100.herokuapp.com/add')
			.then((res) => res.json())
			.then((data) => {})
	}

	render() {
		return (
			<div className='container' style={{transform: this.props.show && 'scale(0.6)'}}>
				<div className='outer-border'>
					<div className='inner-border'>
						<img
							src={require('../assets/side.png')}
							className='side-img'
							alt='side'
						/>
						<div className='main'>
							<img
								src={require('../assets/skct.png')}
								className='skct'
								alt='skct'
							/>
							<div className='title'>
								COVID-19 Pandemic General <br /> Awarness Quiz
							</div>
							<div className='subject'>
								Certificate of Appreciation gladly presented to
							</div>
							<div className='name'>{this.props.state.name}</div>
							<div className='reason'>
								For Excellent Performance in COVID-19 Pandemic <br />
								General Awarness Quiz
							</div>
							<div className='college'>
								Presented By:
								<br />
								Department of CSE
							</div>
							<img
								src={require('../assets/ski.png')}
								className='ski'
								alt='ski'
							/>
							<div className='date'>{new Date().toLocaleDateString()}</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Cert
