import React from 'react';
import {connect} from 'react-redux';

import Strings from './strings';
import StringSelect from './string-select';

const GuitarNeck = props => {
    return(
        <div className="col-sm-7">
            <div className="guitar-neck width">
                <div className="background">
                    <div className={"overlay " + props.tuning}>
                        <div className="box-style orange text-center">Tuning the Guitar for <b><i>{props.selected}</i></b></div>
                    </div>
                    
                    <div className="guitar-keys">
                        {[...Array(6)].map((e, i) => <img src={require('../../assets/images/guitar-key.png')} alt="Guitar Key" key={i} className={props.animated_key + ' key-' + i}/>)}
                    </div>
                    
                    <Strings />
                    
                </div>
                
                <StringSelect />
                    
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return{
        selected: state.selected,
        tuning: state.tuning,
        animated_key: state.animated_key
    }
}

function mapDispatchToProps(dispatch) {
    return{
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuitarNeck);