import {createStore} from 'redux';
import initialState from './initialState';
import {playSound, pauseSound, animationEnd} from './helpers';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TUNING_SELECT':
            return{
                ...state,
                selected: action.event,
                animated_key: 'rotate',
                tuning: 'tuning',
                bounceIn: 'bounceIn',
            }
        case 'SELECTED_TUNE':
                return{
                    ...state,
                    animated_key: '',
                    tuning: '',
                    bounceIn: ''
                }
        case 'PLAY':
            return{
                ...state,
                standards: playSound(state.standards, action.element),
                down_halfs: playSound(state.down_halfs, action.element),
                down_ones: playSound(state.down_ones, action.element),
                down_twos: playSound(state.down_twos, action.element)
            }
        case 'PAUSE':
                return{
                    ...state,
                    standards: pauseSound(state.standards, action.element),
                    down_halfs: pauseSound(state.down_halfs, action.element),
                    down_ones: pauseSound(state.down_ones, action.element),
                    down_twos: pauseSound(state.down_twos, action.element)
                }
        case 'ANIMATION_END':
            return{
                ...state,
                standards: animationEnd(state.standards, action.element),
                down_halfs: animationEnd(state.down_halfs, action.element),
                down_ones: animationEnd(state.down_ones, action.element),
                down_twos: animationEnd(state.down_twos, action.element)
            }
        default:
            return state
    }
}

const store = createStore(reducer);

export default store;