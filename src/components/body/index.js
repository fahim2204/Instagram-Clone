import "./body.css"
import Posts from "./Posts"
import Story from "./Story"
import UserSection from "./UserSection"
import { userDummyApi } from "../../api/userPosts"
import { useState } from "react"


const Body = () => {
    const [dummyApi, setDummyApi] = useState(userDummyApi.posts)
    return (
        <>
            <div style={{ marginTop: "68px", backgroundColor: "#fafafa" }}>
                <div className="container-fluid container-lg px-1 px-xl-4 px-xxl-5">
                    <div className="row mx-1 mx-sm-3 mx-lg-4 mx-xxl-5 px-2 px-lg-3 px-xxl-5 pt-3 pt-md-4">
                        <div className="col-12 col-md-8 col-xl-7 px-0">
                            <Story />
                            <Posts dummyApi={dummyApi} setDummyApi={setDummyApi} />
                        </div>
                        <div className="d-none d-md-block col-4 col-xl-5 ps-4">
                            <UserSection/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Body