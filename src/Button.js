import { Component } from 'react';
import axios from 'axios';


class Button extends Component {

        constructor() {
            super();
            this.state = {
                //empty array to hold the movies
                movies: [],
            };
        }

        componentDidMount() {
            //call AJAX using axios
            axios({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/search/movie',
                responseType: 'json',
                params: {
                    api_key: '6e56b6d943c654a15ce707b1399bebc5',
                    query: 'christmas',
                },
            })
            //.then((res) => {
                //res = res.data.title
            //})
        }

        //handleClick = () => {

        //}
        
        render() {
            return (
                <button onClick={this.handleClick}>Find me a holiday movie!</button>
            )
        }
    }




export default Button;