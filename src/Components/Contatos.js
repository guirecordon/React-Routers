import React from 'react';
import styles from './Contatos.module.css';
import photo from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contatos} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={photo} alt="writing machine" />
      <div>
        <ul className={styles.dados}>
          <li>gui@wafflestack.org</li>
          <li>(24)9.9999.9999</li>
          <li>Rua Nascimento Silva, 107</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
