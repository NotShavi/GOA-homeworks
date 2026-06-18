import { Link } from "react-router-dom"

const Home = () =>{
    return (
        <>
            <h1>Home Page</h1>
            <br /><br />
            <ul>
                <li><Link to="/register">Register page</Link></li>
                <li><Link to="/login">Login page</Link></li>
            </ul>

        </>
    )
}

export default Home