const UserSection = () => {
    return (
        <>
            <div className="row pt-1">
                <div className="col-12 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img className="rounded-circle m-2 shadow-sm" alt="profile" height="56px" width="56px" src="https://source.unsplash.com/random/50?sig=10" />
                        <div className='mt-1 d-flex flex-column'>
                            <span className="fw-semibold">USernanme</span>
                            <span className="text-muted line-height-1"><small>Name</small></span>
                        </div>
                    </div>
                    <div className="">
                        <span className="text-primary fw-semibold"><small>Switch</small></span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserSection