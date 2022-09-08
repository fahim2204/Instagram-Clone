
const Story = () => {
    const storyInfo = [
        {
            name: "harriet12",
            id: 31
        },
        {
            name: "melvin_star",
            id: 32
        },
        {
            name: "diane",
            id: 33
        },
        {
            name: "maxwell",
            id: 34
        },
        {
            name: "joeraj",
            id: 35
        },
        {
            name: "danielle",
            id: 36
        },
        {
            name: "greene",
            id: 35
        },
        {
            name: "barkerpro",
            id: 36
        }
    ]

    return (
        <>
            <div className="row bg-white rounded-2 border py-2 pe-3">
                <div className="col-12 d-flex scroll-story user-select-none">
                    {
                        storyInfo.map((item, index) => {
                            return (
                                <div key={index} className="d-flex flex-column align-items-center">
                                    <span className="insta-border-1 rounded-circle ms-0 me-2">
                                        <img height="56" width="56" alt="profile" className="rounded-circle flex-shrink-0 border border-2 border-light" src={`https://source.unsplash.com/random/100?sig=${item.id}`} />
                                    </span>
                                    <span className="story-font mt-1">{item.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Story