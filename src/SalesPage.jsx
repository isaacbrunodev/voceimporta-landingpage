import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ebookCapa from './images/ebook.png'; // Importando a capa do ebook

// Imagem de marca d'água
const watermarkUrl = 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Segoe UI', sans-serif;
    background: #f7f7f7;
    color: #333;
    position: relative;
  }

  #root {
    position: relative;
    z-index: 1;
  }
`;

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
  background: url('/img/bg.jpg') center center / cover no-repeat;
  text-align: center;
  color: white;
  padding: 120px 20px 40px;
  position: relative;

  h1 {
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 20px;
    line-height: 1.4;
    color: #000;

    span {
      color: #ff3e6c;
      text-decoration: underline;
      text-decoration-color: #ff3e6c; /* Cor do sublinhado */
      text-decoration-thickness: 3px; /* Espessura do sublinhado */
      text-underline-offset: 4px; /* Distância entre o texto e o sublinhado */
    }
  }

  h2 {
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 30px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
    color: #000;
  }

  iframe {
    width: 100%;
    max-width: 560px;
    height: 315px;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    margin-bottom: 20px; /* Adicionado para espaçamento */
  }

  a {
    display: block; /* Garante que o botão fique em uma nova linha */
    margin: 20px auto 0; /* Centraliza o botão e adiciona espaçamento */
    max-width: 300px; /* Define uma largura máxima para o botão */
  }

  @media (min-width: 1024px) {
    padding: 160px 40px 60px;

    h1 {
      font-size: 48px;
    }

    h2 {
      font-size: 28px;
    }

    iframe {
      max-width: 720px;
      height: 405px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 40px 20px;
  gap: 30px;

  h3 {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
    color: #333;
  }

  .benefit {
    display: flex;
    align-items: center;
    background: #fafafa;
    border-radius: 12px;
    padding: 25px;
    max-width: 400px;
    text-align: left;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    gap: 15px;

    span {
      font-size: 30px; /* Tamanho do emoji */
    }

    p {
      font-size: 16px;
      color: #555;
      margin: 0;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;

    .benefit {
      max-width: 300px;
    }
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
      <GlobalStyle />
      <Watermark />
      <Wrapper>
        <Hero>
          <h1>
            VOCÊ VAI DESCOBRIR COMO SUPERAR A DOR EMOCIONAL EM APENAS 7 DIAS<br />
            <span>MESMO QUE VOCÊ NÃO ACREDITE MAIS EM VOCÊ</span>
          </h1>
          <h2>
            Um método direto, acolhedor e 100% prático para reconstruir sua autoestima
            e transformar sua dor em força — sem precisar de terapia longa ou remédios.
          </h2>
          <iframe
            src="https://www.youtube.com/embed/v6KpfIfHoCY"
            title="Vídeo: Você Importa"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <CTAButton href="https://pay.kirvano.com/f1fb5790-51b6-4d6c-9d2f-e835325ef1eb" target="_blank">
            Quero Transformar Minha Vida
          </CTAButton>
        </Hero>

        <UrgencySection>
          <h3>Essa oferta  só estará disponível até amanhã!</h3>
          <p>Não perca a chance de transformar sua vida emocional por um preço especial.</p>
          <div className="countdown">{timeLeft}</div>
          <CTAButton href="https://pay.kirvano.com/f1fb5790-51b6-4d6c-9d2f-e835325ef1eb" target="_blank">
            Aproveitar agora
          </CTAButton>
        </UrgencySection>

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

        <ContentSection>
          <img src={ebookCapa} alt="Capa do Ebook Você Importa" />
          <div>
            <h4>O que é o Ebook Você Importa?</h4>
            <p>
              Um guia prático e emocional que ajuda pessoas a lidarem com traumas, inseguranças e dores emocionais.
              Com exercícios, vídeo-aulas e ferramentas de autoconhecimento, você poderá resgatar sua autoestima e bem-estar.
            </p>
            <CTAButton href="https://pay.kirvano.com/f1fb5790-51b6-4d6c-9d2f-e835325ef1eb" target="_blank">Comprar agora</CTAButton>
          </div>
        </ContentSection>

        <Benefits>
          <h3>Além do ebook você vai ter direito a:</h3>
          <div className="benefit">
            <span>📘</span>
            <p>Ebook PDF com leitura simples e transformadora</p>
          </div>
          <div className="benefit">
            <span>💻</span>
            <p>Reuniões online para apoio emocional e prático</p>
          </div>
          <div className="benefit">
            <span>🧘</span>
            <p>Exercícios guiados para clareza emocional</p>
          </div>
          <div className="benefit">
            <span>🤝</span>
            <p>Grupo privado de apoio (opcional)</p>
          </div>
        </Benefits>

        <WhyNowSection>
          <h3>Por que agir agora?</h3>
          <ul>
            <li>✔ A dor não vai embora sozinha.</li>
            <li>✔ Quanto mais tempo você esperar, mais profundo o buraco.</li>
            <li>✔ Você merece paz hoje, não só amanhã.</li>
          </ul>
          <CTAButton href="https://pay.kirvano.com/f1fb5790-51b6-4d6c-9d2f-e835325ef1eb" target="_blank">
            Comece sua transformação agora
          </CTAButton>
        </WhyNowSection>
      </Wrapper>
    </>
  );
};

export default App;
