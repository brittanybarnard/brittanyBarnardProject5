import { Component } from "react";

class Movies extends Component {
    render() {
        console.log(this.props.thumbnail);
        return (
            <div className="movies">
                <h2>{this.props.name}</h2>
                <img src={`https://image.tmdb.org/t/p/w500${this.props.thumbnail}`} alt=""/>
            </div>
        );
    }
}

export default Movies;
