import { useState } from 'react'

const Listado = ({nombres}) => {
    const [names, setNames] = useState(nombres)
    const remove = (index) => {
        // console.log(index)
        // nombres.splice(index,1)
        // console.log(nombres)
        const arrayAuxiliar = [...names]
        arrayAuxiliar.splice(index,1)
        setNames([...arrayAuxiliar])
    }
  return (
    <div>{names.map((nombre, index) => <p>{nombre} <button  onClick={()=>remove(index)}>X</button></p>)}</div>
  )
}

export default Listado