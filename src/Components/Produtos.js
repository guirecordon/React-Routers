import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Produtos.module.css';
import Head from './Head';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);
  if (produtos === null) return null;
  return (
    <section className={styles.produtos}>
      <Head title="Ranek" description="Descrição dos produtos da Ranek" />
      {produtos.map((produto) => (
        <Link key={produto.id} to={`produto/${produto.id}`}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].alt} />
          <h1>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
