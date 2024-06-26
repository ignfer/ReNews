import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import Container from "../Container/Container.jsx";
import CommentCard from "../CommentCard/CommentCard.jsx";
import {isAdmin, notNullNotEmptyString, now, userId, validateNewCommentForm} from "../../utils.js";
import {useEffect, useState} from "react";
import {
    ALERT_INITIAL_STATE,
    COMMENT_DATA_INITIAL_STATE,
    VALIDATION_NEW_COMMENT_FORM_INITIAL_STATE,
} from "../../const.js";
import ConfirmationModal from "./ConfirmationModal.jsx";
export default function PostModal({post,onClose, handleDeletePost}){
    const { id, title, body, date, comments } = post;

    const [likes, setLikes] = useState(post?.likes);
    const [alreadyLiked, setAlreadyLiked] = useState(false);

    const [newComment, setNewComment] = useState({COMMENT_DATA_INITIAL_STATE});

    const dateObj = new Date(date);
    const formattedDate = `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;

    const [validations,setValidations] = useState(VALIDATION_NEW_COMMENT_FORM_INITIAL_STATE);
    const [alert,setAlert] = useState({ALERT_INITIAL_STATE});

    const [confirmationModal, setConfirmationModal] = useState({visible: false, message: ""});
    const [confirmationModalFunction, setConfirmationModalFunction] = useState(null);

    function handleConfirmationModal(id){
        setConfirmationModal({visible: true, message: "¿Seguro que desea eliminar este post?"});
        setConfirmationModalFunction(() => handleDeletePost);
    }

    useEffect(() => {
        if(validations?.body?.message !== ""){
            console.log("[PLACEHOLDER] Validation failed, please check the form for errors.");
            setAlert(ALERT_INITIAL_STATE);
        } else {
            console.log("[PLACEHOLDER] Creating comment: ", newComment);
            //postController.createPost(postData);
            setAlert({visible: true, isError: false, message: "Comentario creado correctamente."});
            setNewComment(COMMENT_DATA_INITIAL_STATE);
        }
    }, [validations]);

    function handleLike(){
        alreadyLiked ? setLikes(likes - 1) : setLikes(likes + 1);
        setAlreadyLiked(!alreadyLiked);
    }

    function updateNewCommentData(value, key){
        setNewComment({...newComment, [key]: value});
    }

    function handleNewComment(){
        setNewComment((prevState) => ({
            ...prevState,
            ownerId: userId(),
            postId: id,
            date: now()
        }));
        validateNewCommentForm(newComment, setValidations);
    }

    return (
        <>
            {confirmationModal.visible && <ConfirmationModal isOpen={confirmationModal.visible}
                                                             onClose={()=>setConfirmationModal({visible: false, value: ""})}
                                                             onConfirm={confirmationModalFunction}
                                                             message={confirmationModal.message}/>}
            <Modal show onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title className={"fw-bold d-flex flex-row justify-content-between align-items-center w-100"}>
                        {`Leyendo post #${id}`}
                        <div className={"d-flex gap-2"}>
                            {isAdmin() && <Button className={"btn btn-danger fw-bold p-1"} onClick={() => handleConfirmationModal()}>Eliminar Post</Button>}
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={"d-flex flex-column justify-content-center align-items-center"}>
                    <h4 className={"fw-semibold w-100 text-start"}> {post?.owner?.username} - {title} - {formattedDate}</h4>
                    <Container width={"100"} height={"100"}>
                        <div className={"d-flex w-100 align-items-start mb-2"}>
                            {post?.tags?.map(tag => (
                                <span key={tag.id} className="badge rounded-pill text-bg-success me-1">{tag.name}</span>
                            ))}
                        </div>
                        <div className={"w-100 text-start mb-1 mt-1"}>
                            <Button className={`btn fw-bold p-1 ${alreadyLiked ? "btn-primary" : "btn-dark"}`}
                                    onClick={() => handleLike()}>{likes} Me gusta 👍</Button>
                        </div>
                        <div>
                            <p className={"text-break"}>{body}</p>
                        </div>
                    </Container>
                    <Container width={"100"} height={"100"} justifyContent={"start"} gap={"2"}>
                    <h5 className={"fw-semibold"}>💬 Comentarios</h5>
                        {comments.map(comment => {
                            const commentDate = new Date(comment.date);
                            const formattedCommentDate = `${commentDate.getDate()}/${commentDate.getMonth() + 1}/${commentDate.getFullYear()}`;
                            return (
                                <CommentCard key={comment.id} owner={comment.ownerId} id={comment.id}
                                             body={comment.body} date={formattedCommentDate}/>
                            );
                        })}
                    </Container>
                    <Container width={"100"} height={"100"} justifyContent={"start"} gap={"2"}>
                        <h5 className={"fw-semibold"}>💬 Agrega un comentario</h5>
                        {alert?.visible && alert?.isError === false &&
                            <div className={`alert mt-2 alert-${alert.isError ? "danger" : "success"}`}>
                                {alert.message}
                            </div>
                        }
                        {
                            notNullNotEmptyString(validations?.body?.message) &&
                            <div className={`alert mt-2 alert-danger`}>
                                {validations?.body?.message}
                            </div>
                        }
                        <form className={"text-start w-100"}>
                            <textarea type="text" className="form-control" value={newComment?.body}
                                      onChange={e => updateNewCommentData(e.target.value, "body")}/>
                        </form>
                        <div className={"d-flex w-100 justify-content-end"}>
                            <Button className={"btn btn-primary fw-bold"} onClick={() => handleNewComment()}>Enviar comentario</Button>
                        </div>

                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button className={"btn btn-dark fw-bold"} onClick={onClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}