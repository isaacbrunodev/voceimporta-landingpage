import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useTheme } from 'styled-components';
import { Helmet } from 'react-helmet';
import ebookCapa from './images/ebook.png'; // Importando a capa do ebook
import PV1 from './images/PV1.jpg';
import PV2 from './images/PV2.jpg';
import PV3 from './images/PV3.jpg';
import PV4 from './images/PV4.jpg';
import perfilIsaac from './images/PERFILISAAC.jpg';
import { FaWhatsapp } from 'react-icons/fa';

// Imagem de marca d'água
const watermarkUrl = 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #f7f7f7;
    color: #333;
    position: relative;
  }

  #root {
    position: relative;
    z-index: 1;
  }
`;

const theme = {
  primary: '#3b82f6',      // Azul moderno (Tailwind Blue-500)
  secondary: '#1e40af',    // Azul escuro
  background: '#f9fafb',   // Cinza quase branco
  text: '#1f2937',         // Cinza escuro
};

const Watermark = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url(${watermarkUrl}) center center no-repeat;
  background-size: cover;
  opacity: 0.05;
  z-index: 0;
  pointer-events: none;
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Hero = styled.section`
  background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
  text-align: center;
  color: white;
  padding: 100px 20px;

  h1 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.3;
    color: white;

    span {
      color: #fef08a;
      text-decoration: underline;
      text-decoration-color: #fef08a;
      text-decoration-thickness: 3px;
      text-underline-offset: 4px;
    }
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 30px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
    color: rgba(255,255,255,0.9);
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 48px;
    }

    h2 {
      font-size: 24px;
    }
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  background: #ff3e6c;
  color: white;
  font-weight: bold;
  padding: 18px 40px;
  border-radius: 12px;
  font-size: 20px;
  margin-top: 20px; /* Ajustado para espaçamento */
  text-decoration: none;
  box-shadow: 0 6px 18px rgba(0,0,0,0.2);
  transition: 0.3s ease;

  &:hover {
    background: #e63560;
    transform: scale(1.05);
  }
`;

const PriceSection = styled.div`
  background: #1a1a1a;
  color: white;
  padding: 50px 20px;
  text-align: center;

  .price-box {
    display: inline-block;
    background: #2c2c2c;
    border-radius: 15px;
    padding: 30px;
    width: 280px;
    margin: 10px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    text-align: center;

    .old-price {
      font-size: 18px;
      text-decoration: line-through;
      color: #aaa;
      margin-bottom: 15px;
    }

    .new-price {
      font-size: 36px;
      font-weight: 800;
      color: #ff3e6c;
      margin-bottom: 15px;
    }

    .discount {
      font-size: 14px;
      color: #f0f0f0;
      margin-bottom: 15px;
    }

    .cta-button {
      display: inline-block;
      background: #ff3e6c;
      color: white;
      font-weight: bold;
      padding: 12px 30px;
      border-radius: 12px;
      font-size: 18px;
      text-decoration: none;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: 0.3s ease;
      
      &:hover {
        background: #e63560;
        transform: scale(1.05);
      }
    }
  }

  @media (min-width: 1024px) {
    .price-box {
      width: 320px;
    }
  }
`;

const ContentSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 60px 20px;
  background: #ffffff;

  div {
    max-width: 500px;
    padding: 20px;
    text-align: center;
  }

  img {
    max-width: 100%;
    border-radius: 14px;
    margin: 20px;
  }

  h4 {
    font-size: 24px;
    margin-bottom: 15px;
    color: #333;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    gap: 40px;

    div {
      text-align: left;
    }

    img {
      max-width: 400px;
    }
  }
`;

const Benefits = styled.div`
  background: #f9fafb;
  padding: 60px 20px;
  text-align: center;

  h3 {
    font-size: 24px;
    color: #1e40af;
    margin-bottom: 40px;
    position: relative;
    display: inline-block;

    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: #3b82f6;
      border-radius: 2px;
    }
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 400px;
    margin: 0 auto;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      max-width: 800px;
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
      max-width: 1200px;
    }
  }

  .benefit-card {
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    }

    .emoji {
      font-size: 36px;
      margin-bottom: 15px;
    }

    p {
      font-size: 14px;
      line-height: 1.5;
      color: #1f2937;
    }

    @media (min-width: 768px) {
      padding: 25px;

      .emoji {
        font-size: 40px;
      }

      p {
        font-size: 16px;
      }
    }
  }
`;

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #25D366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  z-index: 1000;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1) rotate(10deg);
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  }
  
  &::after {
    content: "Dúvidas? Fale conosco";
    position: absolute;
    right: 70px;
    white-space: nowrap;
    background: #25D366;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 14px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

const UrgencySection = styled.section`
  background: #ff3e6c;
  color: white;
  padding: 40px 20px;
  text-align: center;
  border-radius: 12px;
  margin-top: 40px;

  h3 {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .countdown {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

const WhyNowSection = styled.section`
  background: #f7f7f7;
  color: #333;
  padding: 40px 20px;
  text-align: center;
  border-radius: 12px;
  margin-top: 40px;

  h3 {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 18px;
      margin-bottom: 10px;
      text-align: left;
      max-width: 600px;
      margin: 0 auto;
    }
  }
`;

const BioSection = styled.section`
  background: #f7f7f7;
  color: #333;
  padding: 40px 20px;
  text-align: center;
  border-radius: 12px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const TestimonialsSection = styled.section`
  background: ${theme.background};
  padding: 60px 20px; /* Increased padding */
  text-align: center;

  h3 {
    font-size: 28px; /* Increased font size */
    margin-bottom: 30px; /* Added more margin */
    font-weight: bold;
    color: ${theme.secondary};
  }

  .testimonial {
    background: white;
    border-radius: 12px;
    padding: 20px;
    margin: 10px auto;
    max-width: 500px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: left;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    span {
      font-size: 14px;
      color: ${theme.secondary};
      display: block;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      line-height: 1.8; /* Increased line height */
      color: ${theme.text};
    }
  }
`;

const ProofsSection = styled.section`
  background: #ffffff;
  padding: 40px 20px;
  text-align: center;

  h3 {
    font-size: 24px;
    margin-bottom: 30px;
    font-weight: bold;
    color: #333;
  }

  .proofs-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 400px;
    margin: 0 auto;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      max-width: 800px;
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      max-width: 1200px;
    }
  }

  .proof {
    max-width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
`;

const MetricsSection = styled.section`
  background: #1a1a1a;
  color: white;
  padding: 40px 20px;
  text-align: center;
  border-radius: 12px;
  margin-top: 40px;

  h3 {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 18px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      span {
        font-size: 24px;
        color: #ff3e6c;
      }
    }
  }
`;

const PriceStackSection = styled.section`
  background: #ffffff;
  color: ${theme.text};
  padding: 40px 20px;
  text-align: center;
  border-radius: 12px;
  margin-top: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 28px;
    margin-bottom: 20px;
    font-weight: bold;
    color: ${theme.secondary};
  }

  .price-stack {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
  }

  .item {
    background: ${theme.background};
    border-radius: 12px;
    padding: 20px;
    max-width: 600px;
    text-align: left;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  .item h4 {
    font-size: 20px;
    margin-bottom: 10px;
    color: ${theme.primary};
  }

  .item p {
    font-size: 16px;
    margin-bottom: 5px;
    color: ${theme.text};
  }

  .item .price {
    font-size: 14px;
    color: ${theme.secondary};
    font-weight: bold;
  }

  .final-price {
    font-size: 24px;
    font-weight: bold;
    color: ${theme.primary};
    margin-bottom: 20px;
  }

  .cta-button {
    display: inline-block;
    background: ${theme.primary};
    color: white;
    font-weight: bold;
    padding: 12px 30px;
    border-radius: 12px;
    font-size: 18px;
    text-decoration: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: 0.3s ease;

    &:hover {
      background: #2563eb;
      transform: scale(1.05);
    }
  }
`;

const CountdownTimer = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: ${theme.primary};
  margin-bottom: 20px;
  text-align: center;
  animation: blink 1s step-start infinite;

  @keyframes blink {
    50% {
      opacity: 0.5;
    }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const DarkSection = styled.section`
  background: #1e3a8a;
  color: white;
  padding: 40px 20px;
  text-align: center;
  border-radius: 12px;
  margin-top: 40px;

  p, li {
    color: rgba(255,255,255,0.9);
    font-weight: 400;
  }

  a {
    color: #fef08a;
  }
`;

const LightSection = styled.section`
  background: white;
  color: #1f2937;
  padding: 40px 20px;
  text-align: center;
  border-radius: 12px;
  margin-top: 40px;

  p {
    color: #4b5563;
    line-height: 1.7;
  }
`;

const App = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 1); // Oferta válida até amanhã
    targetDate.setHours(23, 59, 59, 999);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft("Oferta encerrada!");
      } else {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return ( 
    <>
      <Helmet>
        <title>Você Importa - Transforme sua vida emocional</title>
        <meta name="description" content="Descubra como superar a dor emocional em apenas 7 dias com um método prático e acolhedor." />
      </Helmet>
      <GlobalStyle />
      <Watermark />
      <Wrapper>
        {/* 1. Big Promise */}
        <Container>
          <Hero>
            <h1>
              COMO 437 PESSOAS TRANSFORMARAM SUA DOR EM FORÇA EM APENAS 1 SEMANA<br />
              <span>E COMO VOCÊ PODE FAZER O MESMO, AINDA SEM FORÇAS PARA TENTAR NOVAMENTE</span>
            </h1>
            <h2>
              Um método direto, acolhedor e 100% prático para reconstruir sua autoestima
              e transformar sua dor em força — sem precisar de terapia longa ou remédios.
            </h2>
            <div className="badge">500+ pessoas transformadas</div>
          </Hero>
        </Container>

        {/* 2. Identificação com o avatar */}
        <Container>
          <BioSection>
            <img src={perfilIsaac} alt="Foto do autor Isaac" />
            <h3>Sobre o Criador</h3>
            <p>
              Me chamo Isaac. Não sou terapeuta. Sou alguém que, por muito tempo, buscou um motivo real para levantar da cama.
            </p>
            <p>
              Passei por dias em que respirar doía, e noites em que o silêncio gritava mais alto que qualquer pensamento. Vivi a ansiedade, enfrentei a depressão e encarei o medo de frente — o medo de não conseguir continuar.
            </p>
            <p>
              Foi nesse caos que descobri algo: ninguém está sozinho, mas muitos se sentem assim. Eu fui um deles.
            </p>
            <p>
              Movido por essa dor, mergulhei em livros, estudos, terapia, espiritualidade e principalmente... prática. Testei estratégias. Errei. Acertei. Anotei tudo. Refleti. Me reconstruí.
            </p>
            <p>
              Este manual nasceu desse processo. Ele não é apenas um conteúdo: é um mapa real, criado por alguém que esteve no fundo do poço — e encontrou uma escada.
            </p>
            <p>
              Se você sente que está cansado de apenas sobreviver, eu quero te dizer: existe saída. Eu encontrei a minha. E escrevi este guia para te ajudar a encontrar a sua.
            </p>
          </BioSection>
        </Container>

        {/* 3. Apresentação rápida */}
        <Container>
          <ContentSection>
            <img src={ebookCapa} alt="Capa do Ebook Você Importa" />
            <div>
              <h4>O que é o Ebook Você Importa?</h4>
              <p>
                Um guia prático e emocional que ajuda pessoas a lidarem com traumas, inseguranças e dores emocionais.
                Com exercícios, vídeo-aulas e ferramentas de autoconhecimento, você poderá resgatar sua autoestima e bem-estar.
              </p>
            </div>
          </ContentSection>
        </Container>

        {/* 4. História envolvente */}
        <Container>
          <Hero>
            <iframe
              src="https://www.youtube.com/embed/v6KpfIfHoCY"
              title="Vídeo: Você Importa"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Hero>
        </Container>

        {/* 5-7. Introdução e amplificação do problema */}
        <Container>
          <WhyNowSection>
            <h3>Por que agir agora?</h3>
            <ul>
              <li>✔ A dor não vai embora sozinha.</li>
              <li>✔ Quanto mais tempo você esperar, mais profundo o buraco.</li>
              <li>✔ Você merece paz hoje, não só amanhã.</li>
            </ul>
          </WhyNowSection>
        </Container>

        {/* 8. Introdução da solução */}
        <Container>
          <Benefits>
            <h3>Além do ebook você vai ter direito a:</h3>
            <div className="benefits-grid">
              <div className="benefit-card">
                <span className="emoji">📘</span>
                <p>Ebook PDF com leitura simples e transformadora</p>
              </div>
              <div class="benefit-card">
                <span class="emoji">💻</span>
                <p>Reuniões online para apoio emocional e prático</p>
              </div>
              <div class="benefit-card">
                <span class="emoji">🧘</span>
                <p>Exercícios guiados para clareza emocional</p>
              </div>
              <div class="benefit-card">
                <span class="emoji">🤝</span>
                <p>Grupo privado de apoio (opcional)</p>
              </div>
            </div>
          </Benefits>
        </Container>

        {/* 9-10. Apresentação do veículo novo e provas sociais */}
        <Container>
          <ProofsSection>
            <h3>O que as pessoas estão dizendo:</h3>
            <div className="proofs-container">
              <div className="proof">
                <img src={PV1} alt="Depoimento no WhatsApp" />
              </div>
              <div className="proof">
                <img src={PV2} alt="Avaliação de aprovação" />
              </div>
              <div className="proof">
                <img src={PV3} alt="Depoimentos no site" />
              </div>
              <div className="proof">
                <img src={PV4} alt="Story no Instagram" />
              </div>
            </div>
          </ProofsSection>
        </Container>

        {/* 11-12. Benefício da solução e demonstração do método */}
        <Container>
          <MetricsSection>
            <h3>Por que tantas pessoas estão baixando?</h3>
            <ul>
              <li><span>📥</span> Mais de 320 downloads nos primeiros dias</li>
              <li><span>⭐</span> Avaliação média: 4.8 / 5</li>
              <li><span>💬</span> Feedbacks de pessoas dizendo que voltaram a ter esperança</li>
            </ul>
          </MetricsSection>
        </Container>

        <Container>
          <PriceStackSection>
            <h3>🎁 Você Recebe Tudo Isso:</h3>
            <div className="price-stack">
              <div className="item">
                <h4>📘 Guia Digital em PDF</h4>
                <p>✔ Leitura Simples e Transformadora</p>
                <p>✔ Linguagem direta e acolhedora</p>
                <p>✔ Ajuda prática para organizar o caos emocional</p>
                <p className="price">💰 Valeria fácil R$49,90</p>
              </div>
              <div className="item">
                <h4>💻 Reuniões Online de Apoio Emocional e Prático</h4>
                <p>✔ Orientação de quem já passou por isso</p>
                <p>✔ Apoio coletivo com escuta e empatia</p>
                <p className="price">💰 Poderiam custar R$97,00 por mês</p>
              </div>
              <div className="item">
                <h4>🧘 Exercícios Guiados para Clareza Emocional</h4>
                <p>✔ Técnicas simples que funcionam</p>
                <p>✔ Práticas para acalmar e clarear a mente</p>
                <p className="price">💰 Terapias assim custam R$30+ por sessão</p>
              </div>
              <div className="item">
                <h4>🤝 Grupo Privado de Apoio (Opcional)</h4>
                <p>✔ Compartilhamento com segurança e acolhimento</p>
                <p>✔ Você não está só — nunca mais</p>
                <p className="price">💰 Grupos de suporte assim cobram R$50 ou mais</p>
              </div>
            </div>
            <p className="final-price">✅ Valor Real Total: R$226+</p>
            <p>Mas você não vai pagar isso. Nem R$97... Nem R$49...</p>
            <p className="final-price">🔥 Apenas R$17 à vista</p>
            <p>📲 Acesso imediato e vitalício.</p>
            <p>💸 Menos que um lanche. Mais que um alívio.</p>
            <p>🚨 Oferta por tempo limitado.</p>
            <a className="cta-button" href="https://pay.kirvano.com/f1fb5790-51b6-4d6c-9d2f-e835325ef1eb" target="_blank">Quero Começar Agora</a>
          </PriceStackSection>
        </Container>

        {/* 13-16. Oferta, objeções, empilhamento de valor e garantia */}
        <Container>
          <PriceSection>
            <div className="price-box">
              <div className="old-price">De R$ 67,00</div>
              <div className="new-price">Por apenas R$ 17,00</div>
              <div className="discount">Promoção por tempo limitado</div>
              <CTAButton className="cta-button" href="https://pay.kirvano.com/f1fb5790-51b6-4d6c-9d2f-e835325ef1eb" target="_blank">
                Comprar agora
              </CTAButton>
            </div>
          </PriceSection>
        </Container>

        {/* 17-18. Bônus e escassez/urgência */}
        <Container>
          <UrgencySection>
            <h3>Essa oferta só estará disponível até amanhã!</h3>
            <p>Não perca a chance de transformar sua vida emocional por um preço especial.</p>
            <CountdownTimer>{timeLeft}</CountdownTimer>
            <CTAButton href="https://pay.kirvano.com/f1fb5790-51b6-4d6c-9d2f-e835325ef1eb" target="_blank" role="button">
              Aproveitar agora
            </CTAButton>
          </UrgencySection>
        </Container>

        {/* 19-20. Chamada para ação e reforço final */}
        <Container>
          <Hero>
            <h1>
              VOCÊ MERECE UMA NOVA CHANCE DE RECOMEÇAR<br />
              <span>TRANSFORME SUA VIDA HOJE</span>
            </h1>
            <CTAButton href="https://pay.kirvano.com/f1fb5790-51b6-4d6c-9d2f-e835325ef1eb" target="_blank">
              Quero começar agora
            </CTAButton>
          </Hero>
        </Container>
      </Wrapper>
      <WhatsAppButton href="https://wa.me/5579991327843" target="_blank">
        <FaWhatsapp />
      </WhatsAppButton>
    </>
  );
};

export default App;
