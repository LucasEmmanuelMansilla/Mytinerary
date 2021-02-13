import { useState } from "react"
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import Comentario from "./Comentario";

const Comentarios = (props) => {
    const {comments, id, loggedUser, commentsAction, idCiudad, borrarComment, editComment} = props
    const [comentario, setComentario] = useState({})

    const capturarComentario = e => {
        
        const valor = e.target.value
        const propiedad = e.target.name
        setComentario({...comentario,
               [propiedad]: valor,
               id,
               token: localStorage.getItem('token'),
               idCiudad
            } 
        )       
    }

    const cargarComentario = e => {
       e.key === 'Enter' && alert('hola')
        e.preventDefault()
        commentsAction(comentario) 
       document.getElementById('vacio').value = ''
          
    }

    return (
        <div>          
            <div style={{display: 'flex', flexDirection: 'column', marginTop: '5vw'}}>{
            comments.map(comment =>    
                <Comentario comment={comment} id={id} idCiudad={idCiudad} />         
            )}</div>
            
            <div className="inputComentario">
                <input id="vacio" type="text" name="comment" disabled={!loggedUser && "disabled"} placeholder={!loggedUser ? "You must be logged to comment": "Comment"} onChange={capturarComentario} autoComplete="off" />  
                <button onClick={loggedUser && cargarComentario} className="comentario"><i className="fas fa-paper-plane comentario"></i></button>
            </div>      
        </div>
    )
}

const mapStateToProps = state => {
    return{
        loggedUser: state.userR.loggedUser
    }
}

const mapDispatchToProps = {
    commentsAction: itinerariesActions.comments,
    borrarComment: itinerariesActions.deleteComment,
    editComment: itinerariesActions.editComment
}
export default connect(mapStateToProps, mapDispatchToProps)(Comentarios)