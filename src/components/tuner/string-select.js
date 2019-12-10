import React from 'react';
import {connect} from 'react-redux';

const StringSelect = props => {
    return(
        <ul className="string-list">
            {(() => {
                switch (props.selected) {
                    case "Tune down 1/2 step":   
                        return props.down_halfs.map((value, index) => {
                            return (
                                <li 
                                className={`${props.bounceIn} ${value.clicked}`}  
                                key={index} 
                                onClick={(e) => value.isPlaying ? props.pause(value, value.sound.pause(), value.sound.currentTime = 0) : props.play(value, value.sound.play())}>
                                    {value.name}
                                </li>
                            )
                        })
                    case "Tune down one step":   
                        return props.down_ones.map((value, index) => {
                            return (
                                <li 
                                className={`${props.bounceIn} ${value.clicked}`} 
                                key={index} 
                                onClick={(e) => value.isPlaying ? props.pause(value, value.sound.pause(), value.sound.currentTime = 0) : props.play(value, value.sound.play())}>
                                    {value.name}
                                </li>
                            )
                        })
                    case "Tune down two step":   
                        return props.down_twos.map((value, index) => {
                            return (
                                <li 
                                className={`${props.bounceIn} ${value.clicked}`}  
                                key={index} 
                                onClick={(e) => value.isPlaying ? props.pause(value, value.sound.pause(), value.sound.currentTime = 0) : props.play(value, value.sound.play())}>
                                    {value.name}
                                </li>
                            )
                        })
                    default:   
                        return props.standards.map((value, index) => {
                            return (
                                <li 
                                className={`${props.bounceIn} ${value.clicked}`} 
                                key={index} 
                                onClick={(e) => value.isPlaying ? props.pause(value, value.sound.pause(), value.sound.currentTime = 0) : props.play(value, value.sound.play())}>
                                    {value.name}
                                </li>
                            )
                        })
                }
            })()}
        </ul>
    )
}


function mapStateToProps(state) {
    return{
        selected: state.selected,
        bounceIn: state.bounceIn,
        standards: state.standards,
        down_halfs: state.down_halfs,
        down_ones: state.down_ones,
        down_twos: state.down_twos
    }
}

function mapDispatchToProps(dispatch) {
    return{
        pause:(element) => {
            const action = {type: 'PAUSE', element: element}
            dispatch(action)
        },
        play:(element) => {
            const action = {type: 'PLAY', element: element}
            dispatch(action)

            setTimeout(() => {
                const action = {type: 'ANIMATION_END', element: element}
                dispatch(action)
            }, 8000)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StringSelect);