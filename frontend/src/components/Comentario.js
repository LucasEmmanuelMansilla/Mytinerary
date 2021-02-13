import React, { useState } from 'react'
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';

const Comentario = ({comment, borrarComment, editComment, id, idCiudad, loggedUser}) => {

    const [visible, setVisible] = useState(false)

    console.log(loggedUser)
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
        e.keyCode == 13 || e.keyCode == 18 && console.log("gola")
        
    }

    return (
        <div>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '2vh', justifyContent: 'space-between'}} key={comment._id} className="comentario">
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{backgroundImage: `url(${comment.commentPic})`, margin:'0 2vw'}} className="fotoComentario"></div>
                        {!visible && <p key={comment._id} className="comentario">{comment.userComment} says: {comment.comment}</p>}
                    </div>
                  {visible && 
                    <>                
                    <input style={{margin:'0 1vw'}} name="newComment" onChange={capturarNewComment} id={comment._id} list={comment.comment}/> 
                    <button onClick={editarComentario} style={{margin:'0 1vw', outline: 'none', border: 'none', backgroundColor: '#1db1d6', color: '#FA8D02', cursor: 'pointer', fontSize: '1.5vw'}}><i className="fas fa-edit"></i></button>                
                    </> 
                    }                
                    {loggedUser && !visible && loggedUser.profilePic === comment.commentPic && 
                    <div>
                        <button style={{margin:'0 1vw', outline: 'none', border: 'none', backgroundColor: '#1db1d6', color: 'red', cursor: 'pointer', fontSize: '1.5vw'}} onClick={borrarComentario}><i id={comment._id} className="fas fa-trash-alt" ></i></button>
                        <button style={{margin:'0 1vw', outline: 'none', border: 'none', backgroundColor: '#1db1d6', color: '#FA8D02', cursor: 'pointer', fontSize: '1.5vw'}} onClick={() => setVisible(!visible)}><i className="fas fa-edit"></i></button> 
                       
                    </div>}                
                </div>  
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loggedUser: state.userR.loggedUser
    }
}

const mapDispatchToProps = {
    borrarComment: itinerariesActions.deleteComment,
    editComment: itinerariesActions.editComment
}

export default connect(mapStateToProps, mapDispatchToProps)(Comentario)
