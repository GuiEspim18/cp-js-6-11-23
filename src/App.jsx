import { useState } from "react";
import "./App.scss";
import SubmitButton from "./components/buttons/SubmitButton";
import PasswordInput from "./components/inputs/PasswordInput/PasswordInput";
import TextInput from "./components/inputs/TextInput/TextInput";

function App() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e, name) => {
    const value = e.target.value;
    form[name] = value;
    setForm(form);
  }

  const submit = (e) => {
    e.preventDefault();
    validate(form)
  }

  const validate = async (data) => {
    getUsers().then((response) => {
      const found = response.find(element => {
        return element.email === data.email;
      });
      if (found) {
        if (found.password === data.password) {
          alert(`Seja bem-vindo (a) ${found.username}`);
          delete found.password;
          const token = generateToken();
          localStorage.setItem("user", JSON.stringify(found));
          localStorage.setItem("token", JSON.stringify(token));
        } else {
          alert("Senha incorreta!");
        }
      } else {
        alert("Usuáio não cadastrado !");
      }
    })
  }

  const generateToken = () => {
    let result = '';
    for (var i = 80; i > 0; --i) {
      result += (Math.floor(Math.random()*256)).toString(16);
    }
    return result;
  }

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "GET"
      })
      return response.json();
    } catch (err) {
      throw new Error(err);
    }
  }

  return (
    <>
      <div className="card">
        <h1>Login</h1>
        <form onSubmit={submit}>
          <TextInput placeholder="Email" change={(e) => handleChange(e, "email")} />
          <PasswordInput placeholder="Senha" change={(e) => handleChange(e, "password")} />
          <SubmitButton text="Entrar" />
        </form>
      </div>
    </>
  );
}

export default App;
