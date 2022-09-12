import React, { useState } from "react";
import axios from "axios";
import Button from "../Button";
import Input from "../Input";
import { Title, Container, StyledLink } from "../SignStyle";

export default function CadastroPage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
  });
  function handleSignUp() {

    const promise = axios.post(
      "http://localhost:5000/singup",
      {
        ...data,
      }
    );

    promise.then((response) => console.log(response));
    promise.catch((error) => console.log(error.response));
  }

  function handleInputChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <Title>MyWallet</Title>
      <div>
        <Input
        type="text"
        value={data.name}
        onChange={handleInputChange}
        name="name"
        placeholder="Nome"
        />
        <Input
        type="email"
        value={data.email}
        onChange={handleInputChange}
        name="email"
        placeholder="E-mail"
          />
        <Input
        type="password"
        value={data.password}
        onChange={handleInputChange}
        name="password"
        placeholder="Senha"
        />
        <Input
        type="password"
        value={data.password}
        onChange={handleInputChange}
        name="confirmpassword"
        placeholder="Confirme a senha"
        />
        <Button onClick={handleSignUp}>Cadastrar</Button>
      </div>
      <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
    </Container>
  );
}