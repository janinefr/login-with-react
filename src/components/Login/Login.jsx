import React, { useState } from 'react'
import './styles.css'
import { FaUser, FaLock } from "react-icons/fa"

const Login = () => {

// armazenar as entradas do usuario
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")

// função para quando o forms é enviado
const handleSubmit = (event) => {
    //impede que a página seja recarregada
    event.preventDefault();
    console.log("Dados de login: ", {username, password})
}

  return (
    <div className="wrapper">
        <form onSubmit={handleSubmit}>
            {/* inputs */}
            <h1>Login</h1>
            <div className="input-box">
                <input
                    type="text"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <FaUser className="icon"/>
            </div>
            <div className="input-box">
                <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <FaLock className="icon"/>
            </div>
            {/* esqueceu senha */}
            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href='#'>Forgot password?</a>
            </div>

            <button type="submit">Login</button>

            {/* registrar */}
            <div className="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
        </form>
    </div>
  )
}

export default Login
