import React, { Component } from 'react';
import ComentForm from '../component/ComentForm';
import Responses from '../component/Responses';

class Block extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <div>
                <Block></Block>
                <Responses></Responses>
                <ComentForm></ComentForm>                
            </div>
        );
    }
}
 
export default Block;