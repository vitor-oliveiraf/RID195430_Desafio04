import Button from "../../components/Button/Button";
import ProjectCard from "../../components/CardProject/CardProject";
import Header from "../../components/Header/Header";
import "./home.css";

// Importando as imagens
import landingPageImage from "../../assets/images/Landing-page-DNC.png";
import responsiveBlogImage from "../../assets/images/Responsive-blog-DNC.png";
import bootstrapBankImage from "../../assets/images/Bootstrap-bank-dnc.png";
import todoListImage from "../../assets/images/Todo-list-DNC.png";
import CardSobre from "../../components/CardSobre copy/CardSobre";
import Footer from "../../components/Footer/Footer";
import { useRef } from "react";

const projects: Project[] = [
  {
    title: "Landing Page DNC",
    description:
      "No presente projeto foi utilizado as linguagens HTML / CSS. Para a integração do formulário com a planilha do google foi utilizado o Sheets Monkey.",
    image: landingPageImage,
    link: "https://landing-page-dnc-vitor.netlify.app/",
  },
  {
    title: "Responsive Blog DNC",
    description:
      "Este é um projeto de um Blog Responsivo, desenvolvido com foco em adaptabilidade para diferentes tamanhos de tela, proporcionando uma experiência otimizada para usuários em dispositivos variados.",
    image: responsiveBlogImage,
    link: "https://responsive-blog-dnc-vitor.netlify.app/",
  },
  {
    title: "Bootstrap Bank DNC",
    description:
      "Este é um projeto de um site responsivo DNC banc, desenvolvido com foco em adaptabilidade para diferentes tamanhos de tela, utilizando HTML, CSS e Bootstrap.",
    image: bootstrapBankImage,
    link: "https://dnc-bank-bootstrap.netlify.app/",
  },
  {
    title: "Todo List DNC",
    description:
      "Este projeto é uma aplicação de To-Do List desenvolvida para aprimorar habilidades em JavaScript, HTML e CSS, como parte das atividades propostas pela escola DNC.",
    image: todoListImage,
    link: "https://todo-list-dnc.netlify.app/",
  },
];

const sobre: Sobre[] = [
  {
    ano: "2010",
    description:
      "Em 2010, iniciei minha carreira na Prepara Cursos Profissionalizantes como instrutor. Com dedicação, fui crescendo até me tornar coordenador educacional. Liderava uma equipe de professores e contribuía diretamente para a qualidade do ensino e o bom funcionamento da escola.",
  },
  {
    ano: "2011",
    description:
      "Já em 2011, entrei na Trust IT Projetos e Serviços, onde atuei monitorando o desempenho das URAs e ajudando na tratativa de incidentes. Sempre buscando otimizar os processos e melhorar a experiência dos clientes.",
  },
  {
    ano: "2011/2012",
    description:
      "No mesmo ano, comecei um novo desafio na TODO BPO, onde fiquei até 2017. Lá, trabalhei com sistemas como Genesys e Avaya, garantindo a estabilidade das plataformas e resolvendo incidentes com agilidade. Foi um período de muito aprendizado técnico e crescimento.",
  },
  {
    ano: "2017",
    description:
      "Em 2017, passei a fazer parte da equipe da Tahto, onde permaneci até o fim de 2021. Atuei com foco na plataforma de call center Genesys, utilizando ferramentas como SQL, CCM e NICE, além de dar suporte técnico e monitorar sistemas para manter tudo funcionando perfeitamente.",
  },
  {
    ano: "2023",
    description:
      "Desde 2023, estou na Audac Serviços Especializados, onde atuo como Helpdesk de TI. Dou suporte técnico à equipe interna, cuido da configuração de VPNs, e-mails corporativos, VoIP e redes, sempre garantindo que tudo esteja funcionando bem para todos trabalharem sem interrupções.",
  },
];
interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface Sobre {
  ano: string;
  description: string;
}

function Home() {
  const sobreContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sobreContainerRef.current) {
      sobreContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sobreContainerRef.current) {
      sobreContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="title">Vitor Oliveira</h1>
        <div className="resume-container">
          <p className="resume">
            Sou Vitor, profissional com mais de 10 anos de experiência na área
            de tecnologia. <br />
            Atualmente estou em busca de construir uma carreira sólida no
            desenvolvimento de software e estou em busca de oportunidades que me
            permitam crescer profissionalmente e contribuir com projetos
            desafiadores na área.
          </p>
          <Button link="/sobre" text="Sobre mim" />
        </div>
        <h1 id="projetos" className="title">
          Projetos
        </h1>
        <div className="projects-container">
          {projects.map((project: Project, index: number) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
        <h1 id="sobre" className="title">
          Sobre mim
        </h1>
        {/* <div className="sobre-wrapper"> */}
        <div className="sobre-container" ref={sobreContainerRef}>
          {sobre.map((el: Sobre, index: number) => (
            <CardSobre
              key={index}
              ano={el.ano}
              description={el.description}
              line={
                index === 0
                  ? "right"
                  : index === sobre.length - 1
                  ? "left"
                  : "center"
              }
            />
          ))}
        </div>
        <div className="sobre-navigation">
          <button className="nav-button left" onClick={scrollLeft}>
            ←
          </button>
          <button className="nav-button right" onClick={scrollRight}>
            →
          </button>
        </div>
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
