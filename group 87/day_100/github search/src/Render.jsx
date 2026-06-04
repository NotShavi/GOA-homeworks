const Render = (user) =>{
    
    return <>
    <div id="infodiv">
        <div id="image"><img src={user.avatar_url} width="60px" height="60px" id="pfp"/></div>
            <div id="information">
                <div id="basic">
                    <div id="inbasic">
                        <h3 id="devname">{user.login}</h3>
                        <p id="blue">Type: {user.type}</p>
                        <p id="bio">{user.bio}</p>
                    </div>
                    <div id="inbasic2">
                        <h4 id="date">Register date: {user.created_at}</h4>
                    </div>
                </div>
                <div id="diff">
                    <div className="diff">
                        <h5 className="diffh5">Repos</h5>
                        <p className="diffp">{user.public_repos}</p>
                    </div>
                    <div className="diff">
                        <h5 className="diffh5">Followers</h5>
                        <p className="diffp">{user.followers}</p>
                    </div>
                    <div className="diff">
                        <h5 className="diffh5">Following</h5>
                        <p className="diffp">{user.following}</p>
                    </div>
                </div>
                <div id="last">
                    <p className="lastp">Location: {user.location}</p>
                    <p className="lastp">Twitter Username: {user.twitter_username}</p>
                    <p className="lastp">Company: {user.company}</p>
                    <p className="lastp">Url: {user.url}</p>
                </div>
            </div>
    </div>
    </>
}

export default Render