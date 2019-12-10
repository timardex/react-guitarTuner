import React from 'react';
import TuningSelect from './tuning-select';
import GuitarNeck from './guitar-neck';

const Tuner = () => {
    return(
        <div className="row">
            <TuningSelect />
            <GuitarNeck />
        </div>
    )
}

export default Tuner;