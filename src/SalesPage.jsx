import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@300;400;600;700;900&family=Montserrat:wght@300;400;500;600&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #FFFFFF;
    color: #1A2B3C;
    line-height: 1.8;
    text-align: center;
  }

  * {
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, #FFFFFF, #F8F9FA);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const Hero = styled.section`
  background: linear-gradient(rgba(26, 43, 60, 0.75), rgba(26, 43, 60, 0.85)),
              url('https://images.unsplash.com/photo-1536152470836-b943b246224c?auto=format&fit=crop&w=2000&q=80') center/cover no-repeat;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 3rem 1.5rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    min-height: 70vh;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: #FFFFFF;
  opacity: 0;
  animation: ${fadeIn} 1.2s ease-out forwards;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.8rem, 6vw, 4.2rem);
  line-height: 1.1;
  margin-bottom: 2.5rem;
  font-weight: 900;
  letter-spacing: -0.03em;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 5vw, 3rem);
  }
`;

const Subtitle = styled.h2`
  font-family: 'Fraunces', serif;
  font-size: clamp(1.4rem, 2.5vw, 1.8rem);
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 3rem;
  opacity: 0.95;
  max-width: 85%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: clamp(1.2rem, 2vw, 1.6rem);
    margin-bottom: 2rem;
  }
`;

const Section = styled.section`
  max-width: 720px;
  margin: 100px auto;
  padding: 0 2rem;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  p {
    font-family: 'Fraunces', serif;
    font-size: 1.4rem;
    line-height: 1.7;
    color: #2C3E50;
    margin-bottom: 2.5em;
    font-weight: 300;
    letter-spacing: -0.01em;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      line-height: 1.5;
    }
  }
`;

const ResponsiveEbookCover = styled.div`
  margin: 80px auto;
  max-width: 340px;
  perspective: 1500px;
  text-align: center;

  .ebook-cover {
    width: 100%;
    aspect-ratio: 1/1.414;
    background: linear-gradient(135deg, #2D5A7C 0%, #1A2B3C 100%);
    border-radius: 8px;
    padding: 2.5rem;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transform: rotateY(-15deg) rotateX(5deg);
    box-shadow: 25px 25px 50px rgba(0, 0, 0, 0.15);
    transition: all 0.5s ease;

    @media (max-width: 768px) {
      transform: rotateY(-10deg) rotateX(3deg);
      padding: 2rem;
    }

    @media (max-width: 480px) {
      transform: rotateY(-5deg) rotateX(2deg);
      padding: 1.5rem;
    }

    h3 {
      font-family: 'Fraunces', serif;
      font-size: 3rem;
      margin-bottom: 1.5rem;
      line-height: 1.1;
      font-weight: 900;
      letter-spacing: -0.02em;

      @media (max-width: 768px) {
        font-size: 2.5rem;
      }

      @media (max-width: 480px) {
        font-size: 2rem;
      }
    }

    p {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.2rem;
      opacity: 0.9;
      font-weight: 400;
      letter-spacing: 0.3px;
      max-width: 85%;
      margin: 0 auto;
      line-height: 1.6;

      @media (max-width: 768px) {
        font-size: 1rem;
      }

      @media (max-width: 480px) {
        font-size: 0.9rem;
      }
    }
  }
`;

const EmotionalBlock = styled.div`
  max-width: 800px;
  margin: 120px auto;
  padding: 4rem;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 24px;
  box-shadow: 
    0 20px 40px rgba(45, 90, 124, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, rgba(45, 90, 124, 0.03) 0%, rgba(255, 255, 255, 0) 50%);
    pointer-events: none;
  }

  .author-quote {
    font-family: 'Fraunces', serif;
    font-size: 1.8rem;
    line-height: 1.5;
    color: #1A2B3C;
    font-weight: 500;
    margin-bottom: 3.5rem;
    position: relative;
    padding: 2rem;
    background: linear-gradient(to right bottom, #f8f9fa, #ffffff);
    border-radius: 16px;
    border-left: 4px solid #2D5A7C;
    transform: translateY(0);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 4rem 0;

    .feature {
      text-align: left;
      padding: 1.5rem;
      background: linear-gradient(to right bottom, rgba(248, 249, 250, 0.5), rgba(255, 255, 255, 0.8));
      border-radius: 12px;
      border: 1px solid rgba(45, 90, 124, 0.1);
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(45, 90, 124, 0.1);
      }
      
      p {
        font-family: 'Fraunces', serif;
        font-size: 1.2rem;
        color: #2C3E50;
        margin: 0;
        line-height: 1.6;
        position: relative;
        padding-left: 1.5rem;

        &::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #2D5A7C;
          font-size: 1.4rem;
        }
      }
    }
  }

  .highlight {
    font-family: 'Fraunces', serif;
    font-size: 2.2rem;
    line-height: 1.4;
    background: linear-gradient(120deg, #2D5A7C, #1A2B3C);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    text-align: center;
    margin: 4rem 0;
    padding: 2rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 3px;
      background: linear-gradient(90deg, transparent, #2D5A7C, transparent);
    }
  }

  .message {
    font-family: 'Fraunces', serif;
    font-size: 1.5rem;
    line-height: 1.8;
    color: #2C3E50;
    text-align: center;
    margin: 3rem 0;
    padding: 1rem;
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }

  .final-note {
    font-family: 'Fraunces', serif;
    font-size: 1.6rem;
    font-style: italic;
    color: #1A2B3C;
    text-align: center;
    margin-top: 4rem;
    padding: 2rem;
    background: linear-gradient(to right bottom, #f8f9fa, #ffffff);
    border-radius: 16px;
    box-shadow: 0 10px 20px rgba(45, 90, 124, 0.05);
  }
`;

const Price = styled.div`
  font-family: 'Montserrat', sans-serif;
  margin: 2.5rem 0;
  text-align: center;

  .start-now {
    font-size: 1.6rem;
    color: #2D5A7C;
    font-weight: 600;
    margin-bottom: 1rem;
    animation: pulse 2s infinite;
  }

  .price-tag {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin: 1.5rem 0;
    padding: 1rem;
    background: linear-gradient(to right bottom, rgba(45, 90, 124, 0.05), rgba(255, 255, 255, 0.1));
    border-radius: 12px;
  }

  .original-price {
    font-size: 1.6rem;
    color: #8895a7;
    text-decoration: line-through;
    opacity: 0.8;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: -5%;
      width: 110%;
      height: 2px;
      background: #e74c3c;
      transform: rotate(-12deg);
    }
  }

  .current-price {
    font-size: 2.4rem;
    color: #2D5A7C;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(45, 90, 124, 0.1);
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

const CTAButton = styled.a`
  display: block;
  width: 100%;
  max-width: 420px;
  margin: 3rem auto;
  padding: 1.75rem 2.5rem;
  background: linear-gradient(135deg, #2D5A7C 0%, #1A2B3C 100%);
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.35rem;
  text-align: center;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(26, 43, 60, 0.15);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 40px rgba(26, 43, 60, 0.25);
  }
`;

const PriceCTA = styled(CTAButton)`
  margin: 1rem auto;
  max-width: 300px;
  padding: 1.25rem 2rem;
  font-size: 1.2rem;
  background: linear-gradient(135deg, #34495E 0%, #2C3E50 100%);
`;

const ResponsiveCTAButton = styled(CTAButton)`
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1.5rem 2rem;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 1.2rem 1.8rem;
  }
`;

const ResponsiveSubtitle = styled(Subtitle)`
  @media (max-width: 768px) {
    font-size: clamp(1.2rem, 2.2vw, 1.6rem);
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ResponsiveHeroContent = styled(HeroContent)`
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const EbookPreview = styled.div`
  margin: 80px auto;
  max-width: 340px;
  perspective: 1500px;
  text-align: center;
  
  .ebook-cover {
    width: 100%;
    aspect-ratio: 1/1.414;
    background: linear-gradient(135deg, #2D5A7C 0%, #1A2B3C 100%);
    border-radius: 8px;
    padding: 2.5rem;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transform: rotateY(-15deg) rotateX(5deg);
    box-shadow: 25px 25px 50px rgba(0, 0, 0, 0.15);
    transition: all 0.5s ease;
    
    h3 {
      font-family: 'Fraunces', serif;
      font-size: 3rem;
      margin-bottom: 1.5rem;
      line-height: 1.1;
      font-weight: 900;
      letter-spacing: -0.02em;
    }
    
    p {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.2rem;
      opacity: 0.9;
      font-weight: 400;
      letter-spacing: 0.3px;
      max-width: 85%;
      margin: 0 auto;
      line-height: 1.6;
    }
  }
`;

const Guarantee = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: #2C3E50;
  text-align: center;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #F8F9FA;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 600px;

  strong {
    color: #2D5A7C;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 1rem;
  }
`;

const SecurePayment = styled.div`
  text-align: center;
  color: #445566;
  font-size: 0.9rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 1rem;
  color: #445566;
  background: #F8F9FA;
  border-top: 1px solid #E9ECEF;
`;

const CountdownTimer = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  color: #e74c3c;
  font-weight: 600;
  margin-top: 1rem;
  text-align: center;
`;

export default function SalesPage() {
  const sectionsRef = useRef([]);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutos em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container>
    
        <Hero>
          <ResponsiveHeroContent>
            <Title>
              Transforme seu silêncio em força<br />e suas dores em sabedoria
            </Title>
            <ResponsiveSubtitle>
              Você não está quebrado.<br />
              Você está sobrecarregado de silêncio, peso e memórias que nunca
              viraram palavras.<br />
              Esse material nasceu para ser seu ponto de virada.
            </ResponsiveSubtitle>
          </ResponsiveHeroContent>
        </Hero>

        <Section className="section">
          <p>
            Por muito tempo, você aprendeu a sobreviver calado.<br /><br />
            Engoliu dias ruins, sorrisos forçados, dores que ninguém entendeu.<br />
            Tentou parecer forte. Tentou parecer normal.
          </p>
          <p>
            Mas a verdade?<br /><br />
            A sua mente não é sua inimiga. Ela só tá cansada.
          </p>
          <p>
            Este material não é só um e-book.<br />
            É um abraço com palavras.<br />
            É um reencontro com quem você sempre foi, antes de tudo isso.
          </p>
        </Section>

        <ResponsiveEbookCover>
          <div className="ebook-cover">
            <h3>Você Importa</h3>
            <p>Encontrando Sentido e Alívio no Sofrimento Humano</p>
          </div>
          <Price>
            <div className="start-now">Você pode começar agora</div>
            <div className="price-tag">
              <span className="original-price">R$50</span>
              <span className="current-price">R$10</span>
            </div>
            <PriceCTA href="https://pay.kirvano.com/f1fb5790-51b6-4d6c-9d2f-e835325ef1eb">Quero Começar Minha Jornada</PriceCTA>
          </Price>
        </ResponsiveEbookCover>

        <EmotionalBlock>
          <div className="author-quote">
            "Escrito por alguém que já passou pelo mesmo — mas escolheu transformar dor em direção."
          </div>

          <div className="features">
            <div className="feature">
              <p>Com base em psicologia simbólica</p>
            </div>
            <div className="feature">
              <p>Experiências reais</p>
            </div>
            <div className="feature">
              <p>Um convite para finalmente se escutar</p>
            </div>
          </div>

          <div className="highlight">
            Você não precisa continuar carregando tudo sozinho.
          </div>

          <div className="message">
            Cada página foi escrita para aliviar esse peso.<br />
            Pra lembrar você que sentir não é fraqueza —<br />
            é o começo da cura.
          </div>

          <div className="message">
            Não é um curso.<br />
            Não é autoajuda barata.
          </div>

          <div className="final-note">
            É uma conversa direta com a parte sua que só quer respirar de novo.
          </div>
        </EmotionalBlock>

        <ResponsiveCTAButton href="https://pay.kirvano.com/f1fb5790-51b6-4d6c-9d2f-e835325ef1eb">Liberte-se desse peso agora mesmo</ResponsiveCTAButton>

        <Section className="section">
          <p>
            Você não chegou até aqui por acaso.<br />
            E talvez esse seja o primeiro passo pra você voltar pra casa —<br />
            dentro de você.
          </p>
          <p>
            O link está aqui.<br />
            A resposta que você tanto buscava, também.
          </p>
          <ResponsiveCTAButton href="https://pay.kirvano.com/f1fb5790-51b6-4d6c-9d2f-e835325ef1eb">Garanta Agora Mesmo</ResponsiveCTAButton>
          <CountdownTimer>
            Oferta expira em: {formatTime(timeLeft)}
          </CountdownTimer>
        </Section>

        <SecurePayment>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="#445566">
            <path d="M13 5l-1-1V2c0-1.1-.9-2-2-2H6C4.9 0 4 .9 4 2v2L3 5c-.6.6-1 1.4-1 2.3V13c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3V7.3c0-.9-.4-1.7-1-2.3zM6 2h4v2H6V2z" />
          </svg>
          ⚠ Produto digital. Entrega imediata por e-mail.<br />
          Você vai receber o PDF e um bônus surpresa exclusivo.
        </SecurePayment>

        <Guarantee>
          <strong>Garantia de 7 dias:</strong> Se você não estiver satisfeito com o material, devolvemos 100% do seu investimento. Sem perguntas, sem complicações.
        </Guarantee>

        <Footer>© 2025 Todos os direitos reservados</Footer>
      </Container>
    </>
  );
}