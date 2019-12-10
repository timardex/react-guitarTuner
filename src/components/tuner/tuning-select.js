import React from 'react';
import {connect} from 'react-redux';

const TuningSelect = props => {
    return(
        <div className="col-sm-5">
            <div className="string-sound-select width">
                <div>
                    <div className="form-group">
                        <select  className="form-control" onChange={(e) => props.tuningSelect(e.target.value)} value={props.selected}>
                            {props.tunings.map((value, index) => {
                                return <option key={index} value={value.name}>{value.name}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group selected-tune text-center">
                        <p>Selected tune</p>
                        <div className="box-style orange">{props.selected}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return{
        selected: state.selected,
        tunings: state.tunings
    }
}

function mapDispatchToProps(dispatch) {
    return{
        tuningSelect:(event) => {
            const action = {type: 'TUNING_SELECT', event: event}
            dispatch(action)
            setTimeout(() => {
                const action = {type: 'SELECTED_TUNE', event: event}
                dispatch(action)
            }, 2000)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TuningSelect);