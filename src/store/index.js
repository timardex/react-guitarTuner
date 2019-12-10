import initialState from './initialState';
import {createStore} from 'redux';

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
            const playSound = (item) => {
                let _item = item.map(value => value.id === action.element.id ? 
                    {
                        ...value, 
                        isPlaying: action.element.isPlaying = true,
                        clicked: action.element.clicked = 'active', 
                        string_animated: action.element.string_animated = 'shake-horizontal shake-constant',
                    } : value    
                )

                return _item
            }
            return{
                ...state,
                standards: playSound(state.standards),
                down_halfs: playSound(state.down_halfs),
                down_ones: playSound(state.down_ones),
                down_twos: playSound(state.down_twos)
            }
        case 'PAUSE':
                const pauseSound = (item) => {
                    let _item = item.map(value => value.id === action.element.id ? 
                        {
                            ...value, 
                            isPlaying: action.element.isPlaying = false,
                            clicked: action.element.clicked = '', 
                            string_animated: action.element.string_animated = '',
                        } : value    
                    )
    
                    return _item
                }
                return{
                    ...state,
                    standards: pauseSound(state.standards),
                    down_halfs: pauseSound(state.down_halfs),
                    down_ones: pauseSound(state.down_ones),
                    down_twos: pauseSound(state.down_twos)
                }
        case 'ANIMATION_END':
            const animationEnd = (item) => {
                let _item = item.map(value => value.id === action.element.id ? 
                    {
                        ...value, 
                        clicked: action.element.clicked = '', 
                        string_animated: action.element.string_animated = ''
                    } : value    
                )

                return _item
            }
            return{
                ...state,
                standards: animationEnd(state.standards),
                down_halfs: animationEnd(state.down_halfs),
                down_ones: animationEnd(state.down_ones),
                down_twos: animationEnd(state.down_twos)
            }
        default:
            return state
    }
}

const store = createStore(reducer);

export default store;