import Button from "./events/Button"

function Evento(){
    function myEvent(){
        console.log(`First event`)
    }

    function secondEvent(){
        console.log("Second event")
    }

    return(
        <>
        <p>Click to start event</p>
        <Button event={myEvent} text="Fisrt event ">Start</Button>
        <Button event={secondEvent} text="Second event">Start</Button>
        </>
    )
}
export default Evento