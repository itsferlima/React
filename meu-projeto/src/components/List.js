import Item from './Item'

function List (){
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
            <Item marca="ferrari" ano_lancamento={1999}/>
            <Item marca="posche" ano_lancamento={1990}/>
            <Item marca="lambo" ano_lancamento={2010}/>
            </ul>
        </>
    )   
}

export default List