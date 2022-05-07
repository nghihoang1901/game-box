import React, { Component } from 'react';
import Headings from "../component/Headings";
import Button from "../component/Buttons";
import ProgressBars from "../component/ProgressBars";
import Breadcrumbs from "../component/Breadcrumbs";
import Alert from "../component/Alert";
import Pagination from "../component/Pagination";
import Wells from "../component/Wells";
import Badges from '../component/Badges';

class Typography extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <div>
                <Headings></Headings>
                <Button></Button>
                {/* <ProgressBars></ProgressBars> */}
                <Breadcrumbs></Breadcrumbs>
                <Pagination></Pagination>
                <Alert></Alert>
                <Wells></Wells>
                <Badges></Badges>
            </div>
        );
    }
}
 
export default Typography;