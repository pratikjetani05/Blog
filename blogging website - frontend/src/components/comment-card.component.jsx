import { useContext, useState } from "react"
import { getDay } from "../common/date"
import { UserContext } from "../App"
import toast from "react-hot-toast"
import CommentsField from "./comment-field.component"

const CommentCard = ({ index, leftVal, commentData }) => {

    let  { commented_by: { personal_info: { profile_img, fullname, username } }, commentedAt, comment, _id } = commentData

    let { userAuth: { access_token } } = useContext(UserContext)

    const [ isReplying , setReplying ] = useState(false);

    const handleReplyClick = () =>{
        if(!access_token){
            return toast.error("login first to leave a reply");
        }

        setReplying(preVal => !preVal);
    }

    return (
        <div className="w-full" style={{ paddingLeft: `${leftVal * 10}px` }}>
            <div className="my-5 p-6 rounded-md border border=-grey">
                <div className="flex gap-3 items-center mb-8">
                    <img src={profile_img} className="w-6 h-6 rounded-full" />

                    <p className="line-clamp-1">{fullname} @{username}</p>
                    <p className="min-w-fit">{getDay(commentedAt)}</p>
                </div>

                <p className="font-gelasio text-xl ml-3">{comment}</p>

                <div className="flex gap-5 item-center mt-5">
                    <button className="underline" onClick={handleReplyClick}>Reply</button>
                </div>

                {
                    isReplying ? 
                    <div className="mt-8">
                        <CommentsField action="reply" index={index} replyingTo={_id} setReplying={setReplying}/>
                    </div> : ""
                }

            </div>
        </div>
    )
}

export default CommentCard