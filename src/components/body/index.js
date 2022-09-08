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
                <div className="container px-5">
                    <div className="row gx-4 mx-5 px-5 pt-4">
                        <div className="col-7">
                            <Story />
                            <Posts dummyApi={dummyApi} setDummyApi={setDummyApi} />
                        </div>
                        <div className="col-5 ps-4">
                            <UserSection dummyApi={dummyApi}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Body