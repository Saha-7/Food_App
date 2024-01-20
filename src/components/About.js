import React from "react"
import UserClass from "./UserClass"



class About extends React.Component{

    constructor(props){
        super(props)
    }

    async componentDidMount(){

        const data = await fetch("https://api.github.com/users/saha-7")
        const json = await data.json()

       //console.log(json)       
    }

    render(){
        return (
            <div>
                <h1> This is the About us Page</h1>
                <h2>Thank You for your visit</h2>
    
               
    
                <UserClass name={"Pritam Saha (Class Based component using Props)"}/>
            </div>
        )
    }
}


  
export default About