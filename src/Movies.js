import { Component } from "react";

class Movies extends Component {
    render() {
        return (
            <div className="movies">
                <h2>{this.props.name}</h2>
                <img src={this.props.thumbnail} alt=""/>
            </div>
        );
    }
}

export default Movies;
