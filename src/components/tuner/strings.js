import React from 'react';
import {connect} from 'react-redux';

const Strings = props => {
    return(
        <div className="strings">
            {(() => {
                switch (props.selected) {
                    case "Tune down 1/2 step":   
                        return props.down_halfs.map((value, index) => {
                            return <div className={`string ${value.string} ${value.string_animated}`} key={index}></div>
                        })
                    case "Tune down one step":   
                        return props.down_ones.map((value, index) => {
                            return <div className={`string ${value.string} ${value.string_animated}`} key={index}></div>
                        })
                    case "Tune down two step":   
                        return props.down_twos.map((value, index) => {
                            return <div className={`string ${value.string} ${value.string_animated}`} key={index}></div>
                        })
                    default:   
                        return props.standards.map((value, index) => {
                            return <div className={`string ${value.string} ${value.string_animated}`} key={index}></div>
                        })
                }
            })()}
        </div>
    )
}

function mapStateToProps(state) {
    return{
        selected: state.selected,
        standards: state.standards,
        down_halfs: state.down_halfs,
        down_ones: state.down_ones,
        down_twos: state.down_twos
    }
}


export default connect(mapStateToProps)(Strings);