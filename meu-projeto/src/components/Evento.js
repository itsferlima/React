import Button from "./events/Button"

function Evento(){
    function meuEvento(){
        console.log(`Primeiro evento`)
    }

    function segundoEvento(){
        console.log("Ativando segundo evento")
    }

    return(
        <>
        <p>Clique para disparar um evento:</p>
        <Button event={meuEvento} text="Primeiro evento">Ativar</Button>
        <Button event={segundoEvento} text="Segundio evento">Ativar</Button>
        </>
    )
}
export default Evento