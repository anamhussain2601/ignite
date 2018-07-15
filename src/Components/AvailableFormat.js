import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

class AvailableFormat extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectValue:""
        }
      }

    openLinkInNewTab=(value, formats)=>{
        var url;
        this.setState({
            selectValue:value
        });
        formats.map((obj,index)=>{
            if(obj.key === value){
             url = obj['value'];
            }
        });
        window.open(url);
    }
    render(){
        let formats=[];
        let format = this.props.format;
        for(let key in format){
            formats.push({key:key,value:format[key]})
        }
        return (
            <select   style={{
                top: "14px",
                right: "10px",
                padding:"5px",
                border: "1px solid "
              }} value ={this.state.selectValue} onChange={(e)=>{this.openLinkInNewTab(e.target.value, formats)}}>
            {
                formats.map((obj,index)=>{
                    return <option key={index}>{obj.key}</option>
                })
            }
          </select>
        )
    }
}

export default AvailableFormat;