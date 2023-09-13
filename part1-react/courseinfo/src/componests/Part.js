import React, {Fragment} from "react"
const Part = () =>{

    let list = [
        {"part": 'Fundamentals of React', "exercises": 10},
        {"part": 'Using props to pass data', "exercises": 7},
        {"part": 'State of a component', "exercises": 14}
    ]

    return(
        <Fragment>
            {
                list.map(el =>(
                    <p>
                        {el.part} {el.exercises}
                    </p>
                ))
            }
        </Fragment>
    )
}

export default Part