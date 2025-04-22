import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { Helmet } from 'react-helmet';

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
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const HeroSection = styled.section`
  background: #f9f9f9;
  padding: 40px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #222;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 30px;
`;

const EbookImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CTAButton = styled.a`
  display: inline-block;
  background: #28a745; /* Verde */
  color: white;
  text-decoration: none;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #218838; /* Verde mais escuro no hover */
  }
`;

const Section = styled.section`
  margin-bottom: 40px;
  text-align: left;
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  color: #222;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 10px;
  &::before {
    content: '✔️';
    margin-right: 10px;
    color: #007BFF;
  }
`;

const FAQ = styled.div`
  margin-top: 40px;
  text-align: left;
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
`;

const Question = styled.h4`
  font-size: 1.2rem;
  color: #222;
  margin-bottom: 10px;
`;

const Answer = styled.p`
  font-size: 1rem;
  color: #555;
`;

const GuaranteeSection = styled.section`
  background: #f0f8ff;
  border: 2px solid #007BFF;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 40px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const GuaranteeTitle = styled.h3`
  font-size: 2rem;
  color: #007BFF;
  margin-bottom: 20px;
  font-weight: bold;
`;

const GuaranteeText = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.8;
`;

const FAQSection = styled.section`
  background: #f9f9f9;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FAQTitle = styled.h3`
  font-size: 2rem;
  color: #222;
  margin-bottom: 20px;
  font-weight: bold;
`;

const FAQItemStyled = styled.div`
  margin-bottom: 20px;
`;

const FAQQuestion = styled.h4`
  font-size: 1.2rem;
  color: #007BFF;
  margin-bottom: 10px;
  font-weight: bold;
`;

const FAQAnswer = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const CTAFinalButton = styled(CTAButton)`
  font-size: 1.5rem;
  padding: 15px 30px;
  font-weight: bold;
`;

const PainSection = styled.section`
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  color: #fff;
  padding: 40px;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const PainTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const PainParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const PainList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

const PainListItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 10px;
  position: relative;
  padding-left: 30px;

  &::before {
    content: '❌';
    position: absolute;
    left: 0;
    color: #ff4d4d;
    font-size: 1.5rem;
  }
`;

const SolutionSection = styled.section`
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: #fff;
  padding: 50px;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const SolutionTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const SolutionParagraph = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const SolutionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px 0;
`;

const SolutionListItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 15px;
  position: relative;
  padding-left: 40px;

  &::before {
    content: '✔️';
    position: absolute;
    left: 0;
    color: #00cc99; /* Alterei a cor para um verde mais vibrante */
    font-size: 1.5rem;
  }
`;

const OfferSection = styled.section`
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  color: #333;
  padding: 50px;
  border-radius: 15px;
  margin-bottom: 40px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const OfferTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #d9534f;
`;

const OfferText = styled.p`
  font-size: 1.4rem;
  line-height: 1.8;
  margin-bottom: 20px;
  font-weight: 500;
`;

const PriceHighlight = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #28a745;
  background: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  display: inline-block;
  margin: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TimerContainer = styled.div`
  margin-top: 20px;
  font-size: 1.3rem;
  color: #d9534f;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const TimerIcon = styled.span`
  font-size: 1.5rem;
`;

const TimerText = styled.p`
  font-size: 1.3rem;
  color: #d9534f;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return <TimerText>⏳ Tempo restante: {formatTime(timeLeft)}</TimerText>;
};

const SalesPage = () => {
  return (
    <>
      <Helmet>
        <title>Você Importa - Cure Sua Dor Emocional e Renasça</title>
        <meta name="description" content="Sinta-se valorizado, cure suas feridas emocionais e descubra sua importância com este eBook transformador. Garantia total!" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "eBook Você Importa",
            "description": "Sinta-se valorizado, cure suas feridas emocionais e descubra sua importância com este eBook transformador.",
            "offers": {
              "@type": "Offer",
              "price": "9.99",
              "priceCurrency": "BRL",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150"
            }
          })}
        </script>
      </Helmet>
      <Container>
        <HeroSection>
          <Title>❝Sabe aquela sensação de não ser suficiente... de se sentir invisível?❞</Title>
          <Subtitle>Descubra como reconstruir sua autoestima e encontrar paz interior com apenas alguns minutos de leitura por dia.</Subtitle>
          <EbookImage src="/images/ebook.png" alt="Capa do eBook Você Importa" />
          <CTAButton href="https://pay.kirvano.com/f1fb5790-51b6-4d6c-9d2f-e835325ef1eb" target="_blank">👉 Quero me libertar da dor agora!</CTAButton>
        </HeroSection>

        <PainSection>
          <PainTitle>A Dor</PainTitle>
          <PainParagraph>Você já se pegou chorando escondido, engolindo a dor porque "ninguém entenderia"? Já tentou ser forte o tempo todo, mas por dentro estava em pedaços?</PainParagraph>
          <PainParagraph>Sentir-se rejeitado. Ignorado. Frustrado. Parece que o mundo não se importa com você... Mas e se o problema não for você?</PainParagraph>
          <PainList>
            <PainListItem>Se sente constantemente sozinho, mesmo cercado de pessoas</PainListItem>
            <PainListItem>Tem medo de se abrir, por já ter sido ferido antes</PainListItem>
            <PainListItem>Se esforça demais para agradar e recebe pouco em troca</PainListItem>
          </PainList>
          <PainParagraph>Se você disse “sim” a pelo menos uma dessas frases... Esse eBook foi feito especialmente pra você.</PainParagraph>
        </PainSection>

        <SolutionSection>
          <SolutionTitle>A Solução</SolutionTitle>
          <SolutionParagraph>❝Você não precisa continuar vivendo assim.❞ Existe uma forma de se curar, de se fortalecer emocionalmente e, finalmente, sentir que você importa de verdade.</SolutionParagraph>
          <SolutionList>
            <SolutionListItem>Técnica simples de libertação emocional</SolutionListItem>
            <SolutionListItem>Mensagens que falam direto com sua dor</SolutionListItem>
            <SolutionListItem>Transformações reais em menos de 7 dias</SolutionListItem>
            <SolutionListItem>Escrita suave, direta e acolhedora</SolutionListItem>
          </SolutionList>
          <SolutionParagraph>Criado com base em estudos de neurociência e psicologia emocional. Já impactou centenas de pessoas com feridas emocionais profundas.</SolutionParagraph>
        </SolutionSection>

        <OfferSection>
          <OfferTitle>Oferta Especial</OfferTitle>
          <OfferText>💰 Por menos do que o preço de um lanche, você pode transformar o seu interior.</OfferText>
          <PriceHighlight>R$ 9,99</PriceHighlight>
          <OfferText>Oferta disponível por tempo limitado. Não perca essa oportunidade única de mudar sua vida.</OfferText>
          <TimerContainer>
            <TimerIcon>⏳</TimerIcon>
            <CountdownTimer />
          </TimerContainer>
          <CTAButton href="https://pay.kirvano.com/f1fb5790-51b6-4d6c-9d2f-e835325ef1eb" target="_blank">✅ Sim, eu quero minha cura agora.</CTAButton>
        </OfferSection>

        <GuaranteeSection>
          <GuaranteeTitle>🛡️ Garantia</GuaranteeTitle>
          <GuaranteeText>
            Garantia incondicional de 7 dias. Se você não sentir nenhuma transformação emocional, devolvemos seu dinheiro. Sem perguntas.
          </GuaranteeText>
          <GuaranteeText>
            Você não perde nada. Mas pode ganhar tudo.
          </GuaranteeText>
        </GuaranteeSection>

        <FAQSection>
          <FAQTitle>FAQ</FAQTitle>
          <FAQItemStyled>
            <FAQQuestion>❓ Esse conteúdo serve para qualquer idade?</FAQQuestion>
            <FAQAnswer>✔️ Sim, é uma leitura leve e acessível para qualquer pessoa a partir dos 16 anos.</FAQAnswer>
          </FAQItemStyled>
          <FAQItemStyled>
            <FAQQuestion>❓ Quanto tempo leva para ver resultado?</FAQQuestion>
            <FAQAnswer>✔️ A maioria dos leitores relata alívio emocional já nos primeiros dias.</FAQAnswer>
          </FAQItemStyled>
          <FAQItemStyled>
            <FAQQuestion>❓ É seguro comprar?</FAQQuestion>
            <FAQAnswer>✔️ Sim! O pagamento é 100% seguro, e você ainda tem garantia total de 7 dias.</FAQAnswer>
          </FAQItemStyled>
        </FAQSection>

        <CTAFinalButton href="https://pay.kirvano.com/f1fb5790-51b6-4d6c-9d2f-e835325ef1eb" target="_blank">🔒 Quero sentir que eu importo</CTAFinalButton>
      </Container>
    </>
  );
};

export default SalesPage;