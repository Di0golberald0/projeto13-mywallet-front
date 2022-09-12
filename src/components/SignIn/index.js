import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Button from "../Button";
import Input from "../Input";
import { Title, Container, StyledLink } from "../SignStyle";

export default function LoginPage({ setToken, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignIn() {
    const promise = axios.post(
      "http://localhost:5000/singin",
    {
      email: email,
      password: password
    }
    );

    promise.then((response) => {
      setUser(response.data);
      setToken(response.data.token);
      navigate("/wallet");
    });
    promise.catch((error) => console.log(error.response));
  }

  return (
    <Container>
      <Title>MyWallet</Title>
      <div>
        <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
        />
        <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        />
        <Button onClick={handleSignIn}>Entrar</Button>
      </div>
      <StyledLink to="/signUp">Primeira vez? Cadastre-se!</StyledLink>
    </Container>
  );
}