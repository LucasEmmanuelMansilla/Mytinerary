
export const Filtro = ({filtrado}) => {

    return (
        <div>
            <input onChange={filtrado} type="text" name="filtro" autoComplete="off" placeholder="Find a city"/>
        </div>
    )
}
