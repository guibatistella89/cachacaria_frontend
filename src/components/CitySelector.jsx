import React, { useState } from 'react';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const CitySelector = ({ onSelectCity }) => {
  const [cities, setCities] = useState([]);

  
  const fetchCities = async (query) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/cities?query=${query}`);
      setCities(response.data); // Retorna uma lista de cidades com nome e ID
    } catch (error) {
      console.error("Erro ao buscar cidades:", error);
    }
  };

  return (
    <Autocomplete
      options={cities}
      getOptionLabel={(option) => option.nome} // Mostra o nome da cidade
      onInputChange={(event, value) => fetchCities(value)} // Busca cidades quando o usuário digita
      onChange={(event, value) => onSelectCity(value)} // Envia a cidade selecionada
      renderInput={(params) => <TextField {...params} label="Cidade" />}
    />
  );
};

export default CitySelector;
