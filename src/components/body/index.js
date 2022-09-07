import "./body.css"
import Posts from "./Posts"
import Story from "./Story"

const Body = () => {
    return (
        <>
            <div style={{ marginTop: "68px", backgroundColor: "#fafafa" }}>
                <div className="container">
                    <div className="row gx-4 mx-5 px-5 pt-4">
                        <div className="col-6">
                            <Story/>
                            <Posts/>
                        </div>
                        <div className="col-6">
                            right
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Body