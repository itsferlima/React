function Evento({numero}){
    function meuEvento(){
        console.log(`Fui ativado! ${numero}`)
    }
    return(
        <>
        <p>Clique para disparar</p>
        <button onClick={meuEvento}>Ativar</button>
        </>
    )
}
export default Evento