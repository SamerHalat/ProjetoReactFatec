import React from 'react';
import CarDetails from './components/CarDetails';

function App() {
  const cars = [
    { id: 1, marca: 'Toyota', km: 0, cor: 'Branco', ano: 2024 },
    { id: 2, marca: 'Honda', km: 32000, cor: 'Preto', ano: 2020 },
    { id: 3, marca: 'Chevrolet', km: 5000, cor: 'Vermelho', ano: 2022 },
  ];

  return (
    <div className="App">
      <h1>Catálogo de Carros</h1>
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          marca={car.marca}
          km={car.km}
          cor={car.cor}
          ano={car.ano}
        />
      ))}
    </div>
  );
}

export default App;
