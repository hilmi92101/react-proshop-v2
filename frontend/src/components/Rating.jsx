import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ value, text, color }) => {
    return (
        <div className='rating'>
            <span>
                {value >= 1 ? (
                    <FaStar />
                ) : value >= 0.5 ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
            </span>
            <span>
                {value >= 2 ? (
                    <FaStar />
                ) : value >= 1.5 ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
            </span>
            <span>
                {value >= 3 ? (
                    <FaStar />
                ) : value >= 2.5 ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
            </span>
            <span>
                {value >= 4 ? (
                    <FaStar />
                ) : value >= 3.5 ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
            </span>
            <span>
                {value >= 5 ? (
                    <FaStar />
                ) : value >= 4.5 ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
            </span>
            <span className='rating-text'>{text && text}</span>
            {/* {text && text} is a short way of saying "if there is text in the text prop, show it, otherwise show nothing". This is a common trick in React to avoid displaying empty elements. */}
        </div>
    )
}

export default Rating