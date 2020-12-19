const multiply = (state = 2, action) => {
    console.log("Got here")
    switch(action.type){
        case "MULTIPLY":
            return state * 10
        case "DIVIDE":
            return state / 10
        default: 
            return state
    }
}

export default multiply;