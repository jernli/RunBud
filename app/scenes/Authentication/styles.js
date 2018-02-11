import { StyleSheet } from 'react-native'

/* login main page design*/
export const styles = StyleSheet.create({
    textInput:{
        height: 40,
        paddingLeft: 40,
        paddingRight: 40,
        fontSize: 12,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 30
	},
	/* change it so that it's relative to screen size*/
	logo:{
		alignItems: 'center',
		marginTop: 70,
		marginBottom: 80
	},

	logoReg:{
		alignItems:'center',
		marginTop: 70,
		marginBottom: 50
	},

	login:{
		paddingLeft: 40,
		paddingRight: 40,
		marginBottom: 40
	},

	loginButton:{
		borderWidth: 1,
		height: 40,
		borderRadius: 20,
		overflow: 'hidden',
		alignItems: 'center',
	},

	loginButtonText:{
		padding: 10.5,
	},

	inputButtons:{
		marginBottom: 30
	},

	register:{
		alignItems: 'center'
	},

	registerButtonText:{

	}

})

