import { useState } from "react"
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';

const Comentarios = ({comments, id, loggedUser, commentsAction}) => {

    const [comentarios, setComentarios] = useState({})

    const capturarComentario = e => {
        const valor = e.target.value
        const propiedad = e.target. name
      setComentarios({...comentarios,
               [propiedad]: valor,
               id,
               name: loggedUser.name,
               commentPic: loggedUser.profilePic
            } 
        )
    }

    const cargarComentario = async e => {
        e.preventDefault()
        const respuesta = await commentsAction(comentarios)
        if(!respuesta){
            console.log("hubo un error")
        }else{
            console.log(respuesta)
        }
   
    }
   
    return (
        <div>
            <div>{comments.map(comment => 
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '2vh'}}>
                    <div style={{backgroundImage: `url(${comment.commentPic})`, width: '20vw', height: '10vh', backgroundSize: 'cover'}}></div>
                    <p key={comment._id}>{comment.comment}</p>    
                </div>          
            )}</div>
            <input type="text" name="comment" disabled={!loggedUser && "disabled"} placeholder={!loggedUser ? "You must be logged to comment": "Comment"} onChange={capturarComentario} />  
            <button onClick={cargarComentario}>Comment</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        loggedUser: state.userR.loggedUser
    }
}

const mapDispatchToProps = {
    commentsAction: itinerariesActions.comments
}
export default connect(mapStateToProps, mapDispatchToProps)(Comentarios)