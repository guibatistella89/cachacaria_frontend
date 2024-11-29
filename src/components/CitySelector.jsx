import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const CitySelector = ({ onSelectCity, initialCity }) => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(initialCity || null);

  useEffect(() => {
    if (initialCity) {
      setSelectedCity(initialCity); // Define a cidade inicial
    }
  }, [initialCity]);

  const fetchCities = async (query) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/cities?query=${query}`);
      setCities(response.data); // Retorna uma lista de cidades com nome e ID
    } catch (error) {
      console.error("Erro ao buscar cidades:", error);
    }
  };

  const handleCityChange = (event, value) => {
    setSelectedCity(value);
    onSelectCity(value);
  };

  return (
    <Autocomplete
      options={cities}
      getOptionLabel={(option) => option.nome || ''} // Mostra o nome da cidade
      value={selectedCity} // Define o valor selecionado
      onInputChange={(event, value) => fetchCities(value)} // Busca cidades quando o usuário digita
      onChange={handleCityChange} // Atualiza a cidade selecionada
      renderInput={(params) => <TextField {...params} label="Cidade" />}
    />
  );
};

export default CitySelector;
