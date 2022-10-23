import React from "react";
import Star from "./Star";
import PropTypes from 'prop-types';


const Stars = ({count}) => {
    if (count > 0 && count <=5) {
        const arrStars = [];
        for(let i = 1; i <= count; i++) {
            arrStars.push(i)
        }

        return (
            <ul className="card-body-stars u-clearfix">
                {arrStars.map((item, i) => <Star key={i} /> )}                
            </ul>
        )
    }
    else {
        console.log('Невалидное значение количества звезд: ' + count )
        return ''
    }

}

Stars.propTypes = {
    count: PropTypes.number.isRequired
  };

export default Stars;