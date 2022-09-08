import { userDummyApi } from "../../api/userPosts"

const UserSection = () => {
    const sugestedUser = [
        {
            name: "harriet12",
            id: 41
        },
        {
            name: "melvin_star",
            id: 42
        },
        {
            name: "diane",
            id: 43
        },
        {
            name: "maxwell",
            id: 44
        },
        {
            name: "joeraj",
            id: 45
        }
    ]

    return (
        <>
            <div className="row pt-1">
                <div className="col-12 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img className="rounded-circle m-2 shadow-sm" alt="profile" height="56px" width="56px" src={userDummyApi.user.profile_picture} />
                        <div className='mt-1 d-flex flex-column'>
                            <span className="fw-semibold line-height-2"><small>{userDummyApi.user.username}</small></span>
                            <span className="text-muted"><small>{userDummyApi.user.name}</small></span>
                        </div>
                    </div>
                    <div>
                        <span className="text-primary fw-semibold"><small>Switch</small></span>
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-between align-items-center my-1">
                    <span className="text-muted fw-semibold"><small>Suggestions For You</small></span>
                    <span className="fw-semibold"><small>See All</small></span>
                </div>
                {
                    sugestedUser.map((user, index) => {
                        return (
                            <div key={index} className="col-12 d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle m-2 shadow-sm" alt="profile" height="32px" width="32px" src={`https://source.unsplash.com/random/50?sig=${user.id}`} />
                                    <div className='d-flex flex-column'>
                                        <span className="fw-semibold line-height-2"><small>{user.name}</small></span>
                                        <span className="text-muted input-comment-font"><small>Follows you</small></span>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-primary fw-semibold input-comment-font"><small>Follow</small></span>
                                </div>
                            </div>
                        )
                    })
                }



            </div>
        </>
    )
}
export default UserSection