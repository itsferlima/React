function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Cadastrou o user")
    }
    return(
        <>
            <h1>Subscribe</h1>
            <form onSubmit={cadastrarUsuario}>
            <>
            <input type="text" placeholder="Write your name"></input>
            </>
            <>
            <input type="submit" value="send"></input>
            </>
            </form>
        </>
    )
}
export default Form