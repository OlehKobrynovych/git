//.........................................PropTypes
// https://uk.reactjs.org/docs/typechecking-with-proptypes.html
import React from 'react';
import PropTypes from 'prop-types';

const Asddd = (props) =>{
// const Asddd = ({asd, asd2, asd3,...}) =>{
    return (
        <ul style={styles.ul}>
            {props.arr.map((el, index) => {
                return <Li {...props} el={el} index={index}/>
            })}
        </ul>
    )
}

// Задає типізацію даних з пропсів:
Asddd.propTypes = {
    name: PropTypes.string,                                  // 'asd'
    asd4: PropTypes.number,                                  // 12345
    asd: PropTypes.array,                                  // ['asd',2,4,'asfe']
    asd2: PropTypes.arrayOf(PropTypes.object).isRequired,  // [{name: 'asd'}, {name: 'asd'}, {name: 'asd'}]
    asd2: PropTypes.arrayOf(PropTypes.string),             // // ['asd', 'asfe']
    asd3: PropTypes.object.isRequired,
    myff: PropTypes.func.isRequired,
    
    message:   PropTypes.string.isRequired,
    style:     PropTypes.object.isRequired,
    isMetric:  PropTypes.bool.isRequired,
    miles:     PropTypes.number.isRequired,
    milesToKM: PropTypes.func.isRequired,
    races:     PropTypes.array.isRequired,

    children: PropTypes.element.isRequired
}

// Задає значення пропсів за замовчуванням:
Greeting.defaultProps = {
    name: 'asdasd',
    asd4: 123,
};

export default Asddd;