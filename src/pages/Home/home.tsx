import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import "./home.css";

function Home() {
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
          <Button link="/sobre" text="Sobre mim" width="15rem" height="4rem" />
        </div>
      </div>
    </>
  );
}

export default Home;
