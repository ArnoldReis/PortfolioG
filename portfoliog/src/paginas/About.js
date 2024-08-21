import React from 'react';
import './css/About.css';

export default function About() {
  return (
    <div className="about-container">
      <h2>Sobre Nós</h2>
      <div className="about-content">
        <div className="about-image-wrapper">
          <div className="foreground-image"></div>
        </div>
        <div className="about-description">
          <p>A RMC iniciou suas atividades em 2011, visando oferecer um melhor atendimento na área de montagens e manutenções em equipamentos e serviços de engenharia de campo. Com este objetivo, contamos com equipe de profissionais capacitados e dispostos para oferecer um pronto atendimento e proporcionar-lhes tranqüilidade, economia e segurança para com o vosso sistema. Essa garantia é resultado de investimento contínuo em mão de obra especializada, devida a equipamentos e instrumentos adiantados para realização dos demais diversos serviços mecânicos necessários. Certos de termos atingido o nosso objetivo, e no aguardo de um contato para esclarecimentos de possíveis dúvidas ou elaboração de orçamentos, colocamo-nos ao seu inteiro dispor.</p>
        </div>
      </div>
    </div>
  );
}
