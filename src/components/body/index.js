import "./body.css"
import Posts from "./Posts"
import Story from "./Story"
import UserSection from "./UserSection"

const Body = () => {
    return (
        <>
            <div style={{ marginTop: "68px", backgroundColor: "#fafafa" }}>
                <div className="container px-5">
                    <div className="row gx-4 mx-5 px-5 pt-4">
                        <div className="col-7">
                            <Story/>
                            <Posts/>
                            <Posts/>
                            <Posts/>
                        </div>
                        <div className="col-5 ps-4">
                            <UserSection/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Body