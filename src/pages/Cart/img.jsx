import React, { useState, useEffect } from 'react';
import defaultImage from '../../assets/defaultItem.png';

export default function ImagemProd({ idImgProd, nomeImgProd }) {
    const [imageSrc, setImageSrc] = useState(defaultImage);
    useEffect(() => {
        import(`../../assets/${nomeImgProd + idImgProd}.jpg`)
            .then((image) => setImageSrc(image.default))
            .catch(() => setImageSrc(defaultImage)); // Fallback para imagem padrão
    }, [idImgProd]);

    return (
        <img
            src={imageSrc}
            alt={`Imagem do produto: ${nomeImgProd}`}
            style={{ width: '120px', marginRight: '40px' }}
        />
    );
}
