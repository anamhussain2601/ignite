import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

class AvailableFormat extends Component{

    render(){
        console.log(this.props.format)
        return (
            <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        )
    }
}

export default AvailableFormat;