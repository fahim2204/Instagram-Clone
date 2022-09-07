const Posts = () => {
    return (
        <>
            <div className="row bg-white rounded-2 border my-3">
                <div className="col-12 d-flex justify-content-between align-items-center mt-1">
                    <div className="d-flex">
                        <img className="rounded-circle m-2 shadow-sm" alt="profile" height="40px" width="40px" src="https://source.unsplash.com/random/100?sig=10" />
                        <span className='mt-1'>
                            <div className="fw-semibold">Adam Loe</div>
                            <div className="text-muted line-height-1"><small>Original Audio</small>
                            </div>
                        </span>
                    </div>
                    <div className="me-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="grey" height="22px" width="22px" viewBox="0 0 20 20"><g fillRule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Posts