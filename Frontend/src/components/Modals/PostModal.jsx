import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import Container from "../Container/Container.jsx";
import CommentCard from "../CommentCard/CommentCard.jsx";
import {isAdmin} from "../../utils.js";
import {useState} from "react";
export default function PostModal({post,onClose}){
    const { ownerId, id, title, body, date, tags, comments } = post;

    const [likes, setLikes] = useState(post?.likes);
    const [alreadyLiked, setAlreadyLiked] = useState(false);

    const dateObj = new Date(date);
    const formattedDate = `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;


    function handleLike(){
        alreadyLiked ? setLikes(likes - 1) : setLikes(likes + 1);
        setAlreadyLiked(!alreadyLiked);
    }

    return (
        <Modal show onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title className={"fw-bold d-flex flex-row justify-content-between align-items-center w-100"}>
                    {`Leyendo post #${id}`}
                    <div className={"d-flex gap-2"}>
                        {isAdmin() && <Button className={"btn btn-danger fw-bold p-1"} onClick={onClose}>Eliminar Post</Button>}
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={"d-flex flex-column justify-content-center align-items-center"}>
                <h4 className={"fw-semibold"}> {ownerId} - {title} - {formattedDate}</h4>
                <div className={"d-flex w-100 align-items-start mb-2"}>
                    {post?.tags?.map(tag => (
                        <span key={tag.id} className="badge rounded-pill text-bg-success me-1">{tag.name}</span>
                    ))}
                </div>
                <div className={"w-100 text-start mb-1 mt-1"}>
                    <Button className={`btn fw-bold p-1 ${alreadyLiked ? "btn-primary" : "btn-dark"}`} onClick={() => handleLike()}>{likes} Me gusta 👍</Button>
                </div>
                <p>{body}</p>
                <h5 className={"fw-semibold"}>💬 Comentarios</h5>
                <Container width={"100"} height={"100"} justifyContent={"start"} gap={"2"}>
                    {comments.map(comment => {
                        const commentDate = new Date(comment.date);
                        const formattedCommentDate = `${commentDate.getDate()}/${commentDate.getMonth() + 1}/${commentDate.getFullYear()}`;
                        return (
                            <CommentCard key={comment.ownerId} owner={comment.ownerId}
                                         commentary={comment.comment} date={formattedCommentDate}/>
                        );
                    })}
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button className={"btn btn-dark fw-bold"} onClick={onClose}>Cerrar</Button>
            </Modal.Footer>
        </Modal>

    )
}