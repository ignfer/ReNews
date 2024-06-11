import styles from "./PostCard.module.css";
import PostModal from "../Modals/PostModal.jsx";
export default function PostCard ({ post, onClick = () => {}, date,
                                  textAlign = "start", height = "auto", width = "auto"}) {

    const dateObj = new Date(post?.date);
    const formattedDate = `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;

    return (
        <div className={`card d-flex w-${width} h-${height} ${styles['postCard-custom']} text-${textAlign}`} onClick={onClick}>
            <div className="card-body">
                <div className={"w-100 d-flex flex-row justify-content-between align-items-center"}>
                    <h5 className={"text-dark fw-bold p-0"}>{post?.title}</h5>
                    <p className={"text-dark-emphasis p-0"}>{formattedDate}</p>
                </div>
                <div className={"d-flex align-items-center mb-2"}>
                    {post?.tags?.map(tag => (
                        <span key={tag.id} className="badge rounded-pill text-bg-success me-1">{tag.name}</span>
                    ))}
                </div>
                <p className="card-text">{`${post?.body.slice(0, 150 - 3)}...`}</p>
            </div>
        </div>
    )
}