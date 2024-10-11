import Item from './Item'

function List (){
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
            <Item marca="ferrari"/>
            <Item marca="posche"/>
            <Item marca="lambo"/>
            </ul>
        </>
    )   
}

export default List