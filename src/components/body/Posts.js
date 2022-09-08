import { useState } from "react";
import { userDummyApi } from "../../api/userPosts";

const Posts = (props) => {
    const [commentText, setCommentText] = useState("")


    const timeDifference = (current, previous) => {
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;

        var elapsed = current - previous;

        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + ' SECONDS AGO';
        }

        else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + ' MINUTES AGO';
        }

        else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + ' HOURS AGO';
        }

        else if (elapsed < msPerMonth) {
            return Math.round(elapsed / msPerDay) + ' DAYS AGO';
        }

        else if (elapsed < msPerYear) {
            return Math.round(elapsed / msPerMonth) + ' MONTHS AGO';
        }

        else {
            return Math.round(elapsed / msPerYear) + ' YEARS AGO';
        }
    }
    const handleLike = (post) => {
        const temp = props.dummyApi.map((item) => {
            if (item.id === post.id) {
                if (post.user_has_liked) {
                    return { ...item, user_has_liked: !post.user_has_liked, likes: post.likes - 1 }
                } else {
                    return { ...item, user_has_liked: !post.user_has_liked, likes: post.likes + 1 }
                }
            }
            else return item;
        })
        props.setDummyApi(temp)
    }
    const handleNewCommentInput = (e) => {
        setCommentText(e.target.value)
    }
    const handleCreateNewComment = (post) => {
        const newComment = {
            "text": commentText,
            "created_at": Date.now(),
            "user": {
                "username": userDummyApi.user.username,
                "name": userDummyApi.user.name,
                "profile_picture": userDummyApi.user.profile_picture
            }
        }
        const temp = props.dummyApi.map((item) => {
            if (item.id === post.id) {
                return { ...item, comments: post.comments ? [newComment, ...item.comments] : [newComment] }
            }
            else return item;
        })
        props.setDummyApi(temp)
        setCommentText("")
    }


    return (
        <>
            {
                props.dummyApi.map((item, index) => {
                    return (
                        <div className="row bg-white rounded-2 border my-3 pb-2">
                            <div className="col-12 d-flex justify-content-between align-items-center mt-1 ms-0 ps-0">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle m-2 shadow-sm" alt="profile" height="32px" width="32px" src={item.user.profile_picture} />
                                    <span className="fw-semibold"><small>{item.user.username}</small></span>
                                </div>
                                <div className="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="grey" height="22px" width="22px" viewBox="0 0 20 20"><g fillRule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg>
                                </div>
                            </div>
                            <div className="col-12 p-0">
                                <img className="img-fluid" alt="profile" src={item.images.standard_resolution.url} />
                            </div>
                            <div className="col-12 d-flex justify-content-between align-content-center pt-2">
                                <div>
                                    <span className="test-trans hover-opacity" onClick={(() => handleLike(item))}>{item.user_has_liked ? <svg className="mx-2 test-trans" aria-label="Unlike" color="red" fill="red" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg> : <svg className="mx-2 test-trans" aria-label="Like" color="black" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>}</span>
                                    <span className="hover-opacity">
                                        <svg className="mx-2" aria-label="Comment" color="black" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                                    </span>
                                    <span className="dropdown" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg className="mx-2 hover-opacity" aria-label="Share Post" color="black" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                        <ul class="dropdown-menu mt-1" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <div className='dropdown-item'>
                                                    <img height="22" width="22" alt="icon" src="https://img.icons8.com/ios/50/000000/facebook-messenger--v1.png" />
                                                    <span class="ms-2 user-select-none">Send in Messenger</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='dropdown-item'>
                                                    <img height="22" width="22" alt="icon" src="https://img.icons8.com/material-outlined/48/000000/whatsapp--v1.png" />
                                                    <span class="ms-2 user-select-none">Send in Whatsapp</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='dropdown-item'>
                                                    <img height="22" width="22" alt="icon" src="https://img.icons8.com/sf-regular/48/000000/group-foreground-selected.png" />
                                                    <span class="ms-2 user-select-none">Share to a group</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='dropdown-item'>
                                                    <img height="22" width="22" alt="icon" src="https://img.icons8.com/windows/32/000000/copy.png" />
                                                    <span class="ms-2 user-select-none">Copy Link</span>
                                                </div>
                                            </li>

                                        </ul>
                                    </span>
                                </div>
                                <div className="ms-auto ">
                                    <svg aria-label="Save" color="black" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                </div>
                            </div>
                            <div className="col-12 pt-2">
                                <span className="ms-2 fw-bold user-select-none"><small>{item.likes} Likes</small></span>
                            </div>
                            <div className="col-12 pt-2 mx-2">
                                <span className="fw-bold"><small>{item.caption.from.username}</small></span>
                                <span className="ms-1"><small>{item.caption.text}</small></span>
                            </div>
                            <div className="col-12 pt-2 mx-2 d-flex flex-column">
                                <span className="text-muted"><small>{item.comments ? `View all ${item.comments.length} comments` : "No Comments"}</small></span>
                                <span className="text-muted post-time-font mt-1">{timeDifference(Date.now(), item.created_time)}</span>
                            </div>
                            <div className="col-12 d-flex justify-content-between align-content-center border-top mt-3 pt-2 pb-1 w-100">
                                <svg className="hover-opacity" aria-label="Emoji" color="black" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                                <input className="ms-2 border-0 input-comment-font flex-fill" type="text" onChange={handleNewCommentInput} value={commentText} autoComplete="off" placeholder="Add a comment..." />
                                <span className={`text-primary btn btn-sm p-0 px-2 fw-semibold ${!commentText && "text-opacity-50"}`} onClick={() => handleCreateNewComment(item)}>Post</span>
                            </div>

                        </div>
                    )
                })
            }

        </>
    )
}
export default Posts