import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    header: {
        height: '23%',
        backgroundColor: '#68B3C8',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    boxTitle: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
        marginTop: 10,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    boxIconTitle: {
        flexDirection: 'row'
    },
    titleHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    customBadge: {
        height: 8,
        width: 8,
        backgroundColor: 'red',
        borderRadius: 20,
        position: 'absolute',
        right: 2,
        top: 5
    },
    labelName: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%',
        height: 80,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,
        position:'absolute',
        bottom:-30
    },
    boxCount:{
        paddingLeft:10,
        paddingRight:10,
        width:'50%'
    },
    count: {
        fontSize: 40,
        fontWeight:'bold',
        color:'#000',
        paddingBottom:10
    },
    desCount : {
        textAlign:'center',
        fontSize:12,
        color:'#000',
        position:'absolute',
        bottom:0,
        left:'10%'
    },
    boxTag : {
        // marginTop: 40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
    },
    listTag : {
        height: 30,
        width:80,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        borderWidth:2,
        borderColor:'#68B3C8',
        margin:5
    }

})
