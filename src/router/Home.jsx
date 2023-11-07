import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token")

    const validate = () => {
        if (!token || !user) {
            alert("Faça login primeiro");
            navigate("/")
        }
    }

    useEffect(() => {
        validate();
    })

    return (
        <>
        {user && <>
            <h1>Home</h1>
            <p>Olá {JSON.parse(user).username}</p>
            <button onClick={() => {
                localStorage.clear();
                navigate("/");
            }}>Sair</button>
        </>}
            
        </>
    )
}

export default Home;