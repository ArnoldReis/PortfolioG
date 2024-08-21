import React from 'react';
import './css/About.css';

export default function About() {
  return (
    <div className="client-container">
      <h2>Principais Clientes</h2>
      <div className="client-content">
        <div className="about-description">
          <p>
            Temos orgulho em atender grandes empresas em diversos setores. Nossos clientes confiam em nossos serviços
            para manter a eficiência e a segurança de suas operações.
          </p>
          {/* Você pode adicionar mais conteúdo ou listas de clientes aqui */}
        </div>
      </div>
    </div>
  );
}
