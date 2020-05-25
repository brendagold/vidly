import React, { Component } from 'react';

class Like extends Component {
    

    likeStatus = () => {
        
        getIconClass() {
            let classes = "fa fa-";
            classes += () ? "heart-o" : "heart";
            return classes;
        }
    }

    render() { 
        return ( 
            <button className="btn btn-link" onClick={this.likeStatus}><i className={this.getIconClass}></i> </button>
         );
    }

    
}



export default Like;