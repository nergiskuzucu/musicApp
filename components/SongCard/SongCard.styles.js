import { StyleSheet } from "react-native";

export default StyleSheet.create({

    //en dış kutu
    container:{
        padding:10,
        flexDirection:'row'


        
    },

    image:{
        width:120,
        height:120,
        borderRadius:60,
    },

    inner_container:{
       // backgroundColor:'orange',
        padding:10,
        flex:1,
        justifyContent: 'center'



    },

    title:{
        fontWeight:'bold',
        fontSize:27,
    },

    info_container:{
        flexDirection:'row',
        

    },

    year:{
        marginLeft: 10,
        color:  'gray',
        fontWeight: 'bold',
        fontSize: 12,
    },

})