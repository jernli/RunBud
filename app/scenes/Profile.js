import React, { Component } from 'react'
import {
	Image,
	StyleSheet,
	Text,
	View
} from 'react-native'

import ViewContainer from '../components/ViewContainer'
import StatusbarBackground from '../components/StatusbarBackground'

export default class Profile extends Component{
	render() {
		return (
			<ViewContainer>
				<StatusbarBackground/>
				<View style={styles.profilePicture}>
					<View style={styles.profilePictureBorder}>
						<Image source={require('../resources/Logo.png')} />
					</View>
				</View>

				<View style={styles.name}>
					<Text style={styles.nameText}>Kwang Jern Lee</Text>
				</View>

				<View style={styles.runnersDescription}>
					<Text style={styles.runnersDescriptionText}>just a template</Text>
					<Text style={styles.runnersDescriptionText}>still learning</Text>
					<Text style={styles.runnersDescriptionText}>real thing coming soon</Text>
				</View> 

				<View style={styles.personalDescription}>
					<View style={styles.columnOne}>
						<Text style={styles.personalDescriptionText}>Age</Text>
						<Text style={styles.personalDescriptionText}>Profession</Text>
						<Text style={styles.personalDescriptionText}>Hangouts</Text>
					</View>

					<View style={styles.columnTwo}>
						<Text style={styles.personalDescriptionText}>22</Text>
						<Text style={styles.personalDescriptionText}>Soft. Dev.</Text>
						<Text style={styles.personalDescriptionText}>Riverdale; North York</Text>
					</View>
				</View>
			</ViewContainer>
		)
	}
}

const styles = StyleSheet.create({

	profilePicture:{
		alignItems:'center',
		marginTop:70
	},

	profilePictureBorder:{
		borderWidth: 1,
		borderColor: 'darkblue',
		height: 130,
		width: 130,
		borderRadius: 70,
		overflow: 'hidden'
	},

	name:{
		alignItems:'center',
		marginTop: 35,
		marginBottom: 24
	},

	nameText:{
		fontSize: 24,
		color: 'darkblue'
	},

	runnersDescription:{
		alignItems:'center',
		marginBottom: 80,
		paddingLeft: 30,
		paddingRight: 30
	},

	runneresDescriptionText:{
		fontSize: 12
	},

	personalDescription:{
		flex: 1,
		flexDirection:'row'
	},

	personalDescriptionText:{
		fontSize:12,
		marginBottom: 40
	},

	columnOne:{
		flex:1,
		paddingLeft: 80
	},

	columnTwo:{
		flex:1,
		paddingRight: 50
	}
})