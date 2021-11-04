import {StyleSheet, Dimensions} from 'react-native'

export const styles = StyleSheet.create({
    mainContainer : {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    header:{
        height: '25%',
        backgroundColor:'#2496F3',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
    },
    boxTitle : {
        flexDirection : 'row',
        height:40,
        justifyContent:'space-between',
        marginTop: 30,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    boxIconTitle : {
        flexDirection:'row'
    },
    titleHeader : {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    customBadge :{
        height: 8,
        width:8,
        backgroundColor:'red',
        borderRadius: 20,
        position: 'absolute',
        right:2,
        top:5
    },
    labelName : {
        height: 50,
        marginTop: 20,
        alignItems: 'center',
        justifyContent:'center'
    },
    labelFirst: {
        color: 'white',
        fontSize: 18,
        fontWeight:'bold'
    },
    labelScound : {
        color: 'white',
        fontSize:15
    },
    content:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        paddingBottom:20
    },
    listContent : {
        height: '80%',
        width:Dimensions.get('window').width - 20,
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'center'
    },
    boxContent : {
        height:155,
         width:"40%", 
         backgroundColor:'#C33831', 
         borderRadius:25,
         alignItems: 'center',
         justifyContent:'center'
    },
    count : {
        fontSize: 35,
        color:'white',
        fontWeight:'bold'
    },
    countTitle : {
        color:'white',
        fontSize:14,
        fontWeight:'bold'
    }

})