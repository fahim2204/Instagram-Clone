import "./body.css"
const Comments = (props) => {
    const timeDifference = (current, previous) => {
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;

        var elapsed = current - previous;

        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + 's';
        }

        else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + 'm';
        }

        else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + 'h';
        }

        else if (elapsed < msPerMonth) {
            return Math.round(elapsed / msPerDay) + 'd';
        }

        else if (elapsed < msPerYear) {
            return Math.round(elapsed / msPerMonth) + 'M';
        }

        else {
            return Math.round(elapsed / msPerYear) + 'y';
        }
    }


    return (
        <>
            <div className="row w-100 p-1 p-md-0 pt-0 m-2 m-md-0">
                <div className="d-block d-md-none col-12 d-flex justify-content-end align-items-center mb-2">
                    <span type="button" className="p-2" data-bs-dismiss="modal"><svg aria-label="Close" color="black" fill="black" height="18" role="img" viewBox="0 0 48 48" width="18"><title>Close</title><path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg></span>
                </div>
                <div className="col-12 col-lg-6 p-0">
                    <img className="img-fluid" height="100%" src={props.post.images.standard_resolution.url} alt="post" />
                </div>
                <div className="col-12 col-lg-6 pe-0 scroll-comment">
                    <div className="row w-100">
                        <div className="col-12 d-flex justify-content-between align-items-center border-bottom my-1 py-2 mx-0 p-0">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle m-2 shadow-sm" alt="profile" height="32px" width="32px" src={props.post.user.profile_picture} />
                                <span className="fw-semibold"><small>{props.post.user.username}</small></span>
                            </div>
                            <div className="me-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="grey" height="22px" width="22px" viewBox="0 0 20 20"><g fillRule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg>
                            </div>
                        </div>
                        {props.post.comments.map((item, index) => {
                            return (
                                <div key={index} className="col-12 d-flex align-items-start">
                                    <img height="32" width="32" alt="profile" className="rounded-circle m-2 flex-shrink-0" src={item.user.profile_picture} />
                                    <div className='d-flex flex-column mt-1 mb-2 ps-2 pe-1'>
                                        <div className="">
                                            <span className="fw-semibold"><small>{item.user.username}</small></span>
                                            <span className="ms-1"><small>{item.text}</small></span>
                                        </div>
                                        <div className="d-flex">
                                            <span className="text-muted fw-semibold mx-1 story-font"><small>{timeDifference(Date.now(), item.created_at)}</small></span>
                                            <span className="fw-semibold text-muted mx-1 story-font"><small>Like</small></span>
                                            <span className="fw-semibold text-muted mx-1 story-font"><small>Reply</small></span>
                                        </div>
                                    </div>
                                    <div className="align-self-center ms-auto"><svg aria-label="Like" color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg></div>
                                </div>
                            )
                        })}
                        <div className="col-12 d-flex justify-content-between align-content-center pt-2 border-top">
                            <div>
                                <span className="test-trans hover-opacity" onClick={(() => props.handleLike(props.post))}>{props.post.user_has_liked ? <svg className="mx-2 test-trans" aria-label="Unlike" color="red" fill="red" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg> : <svg className="mx-2 test-trans" aria-label="Like" color="black" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>}</span>
                                <span className="hover-opacity" type="button" data-bs-toggle="modal" data-bs-target="#addNewModal">
                                    <svg className="mx-2" aria-label="Comment" color="black" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                </span>
                                <span className="dropdown" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg className="mx-2 hover-opacity" aria-label="Share Post" color="black" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                                    <ul className="dropdown-menu mt-1" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <div className='dropdown-item'>
                                                <img height="22" width="22" alt="icon" src="https://img.icons8.com/ios/50/000000/facebook-messenger--v1.png" />
                                                <span className="ms-2 user-select-none">Send in Messenger</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='dropdown-item'>
                                                <img height="22" width="22" alt="icon" src="https://img.icons8.com/material-outlined/48/000000/whatsapp--v1.png" />
                                                <span className="ms-2 user-select-none">Send in Whatsapp</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='dropdown-item'>
                                                <img height="22" width="22" alt="icon" src="https://img.icons8.com/sf-regular/48/000000/group-foreground-selected.png" />
                                                <span className="ms-2 user-select-none">Share to a group</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='dropdown-item'>
                                                <img height="22" width="22" alt="icon" src="https://img.icons8.com/windows/32/000000/copy.png" />
                                                <span className="ms-2 user-select-none">Copy Link</span>
                                            </div>
                                        </li>

                                    </ul>
                                </span>
                            </div>
                            <div className="ms-auto ">
                                <svg aria-label="Save" color="black" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                            </div>
                        </div>
                        <div className="col-12 pt-2">
                            <span className="ms-2 fw-bold user-select-none"><small>{props.post.likes} Likes</small></span>
                        </div>
                        <div className="col-12 pt-2 mx-2">
                            <span className="fw-bold"><small>{props.post.caption.from.username}</small></span>
                            <span className="ms-1"><small>{props.post.caption.text}</small></span>
                        </div>
                        <div className="col-12 pt-2 mx-2 d-flex flex-column">
                            <span className="text-muted"><small>{props.post.comments ? `View all ${props.post.comments.length} comments` : "No Comments"}</small></span>
                            <span className="text-muted post-time-font mt-1">{props.timeDifference(Date.now(), props.post.created_time)}</span>
                        </div>
                        <div className="col-12 d-flex justify-content-between align-content-center border-top mt-3 pt-2 pb-3 w-100">
                            <svg className="hover-opacity" aria-label="Emoji" color="black" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                            <input className="ms-2 border-0 input-comment-font flex-fill" type="text" autoComplete="off" placeholder="Add a comment..." />
                            <span className="text-primary btn btn-sm p-0 px-2 fw-semibold">Post</span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Comments