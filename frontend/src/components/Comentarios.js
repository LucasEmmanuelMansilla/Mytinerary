import { useState } from "react"
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';

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

    const [visible, setVisible] = useState(false)

    const cargarComentario = e => {
       
        e.preventDefault()
       commentsAction(comentario) 
       document.getElementById('vacio').value = ''
          
    }
    const [editarComment, setEditarComment] = useState({})

    const capturarNewComment = e => {
        setEditarComment({
            newComment: e.target.value, 
            itineraryId: id, 
            idCiudad, 
            idComment: e.target.id,
        })
    }

    const borrarComentario = e => {
        e.preventDefault()
       
        borrarComment({
            itineraryId: id,
            idCity: idCiudad,
            idComment: e.target.id,
            token: localStorage.getItem('token')
        })   
    }
    const editarComentario = e => {
        setVisible(!visible)
        e.preventDefault()
        editComment(editarComment)
        
    }
    return (
        <div>          
            <div style={{display: 'flex', flexDirection: 'column'}}>{comments.map(comment =>          
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '2vh'}} key={comment._id}>
                    <div style={{backgroundImage: `url(${comment.commentPic})`, margin:'0 2vw'}} className="comentario"></div>{
                    visible ? 
                    <> 
                    <input style={{margin:'0 1vw'}} name="newComment" onChange={capturarNewComment} id={comment._id} placeholder="Edit comment"/> 
                        <button onClick={editarComentario}>Edit comment</button>
                        
                       
                    </>: 
                    <p key={comment._id}>{comment.userComment} says: {comment.comment}</p>}                
                    {loggedUser && loggedUser.profilePic === comment.commentPic && 
                    <>
                        <button style={{margin:'0 1vw', outline: 'none', border: 'none'}} onClick={borrarComentario}><i id={comment._id} className="fas fa-trash-alt" ></i></button>
                        <button style={{margin:'0 1vw', outline: 'none', border: 'none'}} onClick={() => setVisible(!visible)}><i className="fas fa-edit"></i></button> 
                    </>}                
                </div>     
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