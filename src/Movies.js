import { Component } from "react";

class Movies extends Component {
    render() {
        return (
            <div className="movies">
                <h2>{this.props.title}</h2>
            </div>
        );
    }
}

export default Movies;
