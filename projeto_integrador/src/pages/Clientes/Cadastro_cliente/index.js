<<<<<<< HEAD
import React, { useState } from 'react';
=======
<<<<<<< HEAD
import React, { useState } from 'react';
=======
function Clientes(){

return(
    <div className="container">
        <h1>Cadastro</h1>
        </div>
    );
>>>>>>> 10ef01b0de7587cebc5ce91070f90cb048e61aa2
>>>>>>> 7b3a11d8bb7e42a7e7c6e62b09781892ee47c4ef

const CadastroCliente = () => {
  const [cliente, setCliente] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    cep: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para enviar os dados do cliente para o servidor
    console.log('Dados do cliente:', cliente);
    // Limpar o formulário após o envio
    setCliente({
      nome: '',
      cpf: '',
      telefone: '',
      logradouro: '',
      bairro: '',
      cidade: '',
      cep: ''
    });
  };

  return (
    <div>
      <h1>Cadastro de Cliente</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={cliente.nome}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          CPF:
          <input
            type="text"
            name="cpf"
            value={cliente.cpf}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Telefone:
          <input
            type="text"
            name="telefone"
            value={cliente.telefone}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Logradouro:
          <input
            type="text"
            name="logradouro"
            value={cliente.logradouro}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Bairro:
          <input
            type="text"
            name="bairro"
            value={cliente.bairro}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Cidade:
          <input
            type="text"
            name="cidade"
            value={cliente.cidade}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          CEP:
          <input
            type="text"
            name="cep"
            value={cliente.cep}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroCliente;
