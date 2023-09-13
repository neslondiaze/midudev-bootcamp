import { Fragment } from "react"

const Total = (props) =>{
    return (
        <Fragment>
            <p>
            {props.msg}: <strong>{props.total}</strong>
            </p>
        </Fragment>
    )
}

export default Total