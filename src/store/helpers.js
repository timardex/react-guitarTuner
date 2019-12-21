export const playSound = (item, payload) => {
    let _item = item.map(value => value.id === payload.id ? 
        {
            ...value, 
            isPlaying: payload.isPlaying = true,
            clicked: payload.clicked = 'active', 
            string_animated: payload.string_animated = 'shake-horizontal shake-constant',
        } : value    
    )

    return _item
}

export const pauseSound = (item, payload) => {
    let _item = item.map(value => value.id === payload.id ? 
        {
            ...value, 
            isPlaying: payload.isPlaying = false,
            clicked: payload.clicked = '', 
            string_animated: payload.string_animated = '',
        } : value    
    )

    return _item
}

export const animationEnd = (item, payload) => {
    let _item = item.map(value => value.id === payload.id ? 
        {
            ...value, 
            clicked: payload.clicked = '', 
            string_animated: payload.string_animated = ''
        } : value    
    )

    return _item
}
