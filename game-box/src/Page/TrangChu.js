import React, { Component } from 'react';
import LatestGame from "../widgets/LatestGame";
import ListGame from "../widgets/ListGame";
import Poster from "../widgets/Poster";
import Xbox from "../widgets/Xbox";



class TrangChu extends Component {
    constructor(props) {
        super(props);
        
    }
    

    

    render() { 
        return (  
            <div>
                <ListGame handleAddToCart={this.props.handleAddToCart} />           
                <LatestGame></LatestGame>
                <Poster></Poster>
                <Xbox></Xbox>
            </div>
        );
    }
}
 
export default TrangChu;