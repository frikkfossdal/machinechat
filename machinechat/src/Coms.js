import React from "react" 
import io from 'socket.io-client'

class Coms extends React.Component{
    constructor(){
        super();
        this.state = {
            connected: true
        }
        
        
    }

    componentDidMount(){
        console.log(this.socket)
        //const socket = io('localhost:8080')
    }

    render(){
        return(
            <div>
                {/* <a>
                Coms is: {this.state.connected}
                </a> */}
                </div>
        )
    }
}

export default Coms;