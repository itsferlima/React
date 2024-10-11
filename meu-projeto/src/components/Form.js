/*import {useState} from 'react'

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`User cadatrado ${name} and password ${password}`)
        
    }
    const [name, setName] = useState()
    const [password, setPassword] = useState()

return (
        <div>
        <h1>Subscribe</h1>
        <form onSubmit={cadastrarUsuario}>
        <div>
            <label htmlFor="name">Name:</label>
            <input 
                type="text" 
                id="name"
                name="name"
                placeholder="Write your name"
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        
        <div>
        <label htmlFor="password">Password:</label>
            <input>
                type="password"
                id="password"
                name="password"
                placeholder="Write your password"
                onChange={(e) => setPassword(e.target.value)}
            </input>
        </div>

        <div>
            <input type="submit" value="send"></input>
        </div>

        </form>
        </div>
    )
}
export default Form*/