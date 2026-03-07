import { tr } from "motion/react-client"

export const SlidUp = (delay) =>{
    return{
        hidden:{
            opacity:0,
            y:100,
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                duration:1,
                delay:delay
            }
        }
    }
}

export const SlidLeft = (delay) =>{
    return{
        hidden:{
            opacity:0,
            x:100,
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:1,
                delay:delay
            }
        }
    }
}


export const SlidRight = (delay) =>{
    return{
        hidden:{
            opacity:0,
            x:-100,
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:1,
                delay:delay
            }
        }
    }
}