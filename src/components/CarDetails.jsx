import React from 'react';

const CarDetails = ({ marca, km, cor, ano }) => {
  const isNovo = km === 0;

  return (
    <div>
      <h2>Detalhes do Carro</h2>
      <ul>
        <li>Marca: {marca}</li>
        <li>KM: {km}</li>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
        <li>Condição: {isNovo ? 'Novo' : 'Usado'}</li>
      </ul>
    </div>
  );
};

export default CarDetails;
