import { Container, MainContainer, Header, Main } from "./styled/app";

function App() {
  return (
    <Container>
      <MainContainer>
        <Header>
          <img className="swords" alt="swords_logo" src="/images/swords.svg" />
          <a href="#">Home</a>
          <a href="#">Skills</a>
          <a href="#">Skins</a>
        </Header>
        <Main>
          <div className="left_content ">
            <img src="/images/yasuo_name.svg" alt="yasuo name" />
            <h3></h3>
            <p>
              Yasuo, um ioniano extremamente determinado, é também um ágil
              espadachim que usa o próprio ar como arma para enfrentar seus
              inimigos. Quando jovem, ele teve seu orgulho ferido ao ser acusado
              injustamente do assassinato de seu mestre.
            </p>
            <div className="buttons">
              <button className="play_now">Jogue Agora</button>
              <button className="login">Iniciar Sessão</button>
            </div>
          </div>
          <div className="right_content">
            <img
              src="/images/nightbringer_yasuo.png"
              alt="nightbringer yasuo"
            />
          </div>
        </Main>
      </MainContainer>
    </Container>
  );
}

export default App;
