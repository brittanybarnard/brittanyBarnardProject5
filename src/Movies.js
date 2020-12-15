import { Component } from "react";

class Movies extends Component {
    render() {
        // console.log(this.props.thumbnail);
        return (
            <div ref={this.props.myRef} className="movies">
                <div className="movieContainer wrapper">
                    <h2>{this.props.name}</h2>
                    <div className="movieFlexContainer">
                        <img src={`https://image.tmdb.org/t/p/w500${this.props.thumbnail}`} alt=""/>
                        <p>{this.props.movieDescription}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Movies;
