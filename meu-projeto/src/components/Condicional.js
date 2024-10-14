import {useState} from 'react'


function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] =useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function cleanEmail(e){
        setUserEmail("")
    }

    return (
        <div>
            <h2>Submit your email</h2>
            <form>
                <input type="email" 
                placeholder="Write your email"
                onChange={(e) => setEmail(e.target.value)}/>
            <button type="submit" onClick={enviarEmail}>Submit</button>
            {userEmail && (
                <div>
                    <p>Email user is: {userEmail}</p>
                    <button onClick={cleanEmail}>Clean email</button>
                </div>
            )}
            </form>
        </div>
    )
}

export default Condicional