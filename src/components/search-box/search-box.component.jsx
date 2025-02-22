import { Component } from "react";
import './search-box.styles.css'; // this css is not specific to this file, the whole css is picked up and and compiled as a whole 

class SearchBox extends Component{
    render(){
        return(
            <div>
                <input
                className="search-box"
                type="search"
                placeholder={this.props.placeholder}
                onChange={this.props.onchangeHandler}
                />
            </div>
        );
    }
}
export default SearchBox;