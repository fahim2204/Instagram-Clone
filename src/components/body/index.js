import "./body.css"

const Body = () => {
    return (
        <>
            <div style={{ marginTop: "68px", backgroundColor: "#fafafa" }}>
                <div className="container">
                    <div className="row mx-5 px-5 pt-4">
                        <div className="col-6">
                            <div className="bg-white rounded-2 border p-2 scroll-room user-select-none">
                                <div className=""><img height="66" width="66" alt="profile" className="rounded-circle m-1 flex-shrink-0 border border-danger border-2 insta-border-1" src="https://source.unsplash.com/random/100?sig=1" /></div>
                            </div>
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