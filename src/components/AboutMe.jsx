export default function AboutMe() {
  return (
    <section id="about">
      <h1></h1>

      <section id="about">
        <h1></h1>

        <div className="container">
          <div className="image-container">
            <img
              src={"../public/img/bedstebud.png"}
              alt="About Me"
              className="aboutme"
            />
            <div className="overlay-text left-text">
              <h1>Designer</h1>
              <p>
                Product designer specialising in UI design and design systems.
              </p>
            </div>
            <div className="overlay-text right-text">
              <h1> Front end developer</h1>
              <p>who writes clean, elegant and efficient code.</p>
            </div>
          </div>
        </div>

        <div className="App">
          {
            <section className="section-title">
              <div className="line"></div>
              <h2>Some of My Latest Work</h2>
              <div className="line"></div>
            </section>
          }

          <section>
            {/* Klikbart link med billedet */}
            <a href="http://project-menace.hani-bassam.dk/">
              <img
                className="project1"
                src="/public/img/project-menace.png" // Brug det importerede billede
                alt="Menace"
              />
            </a>
          </section>
        </div>
      </section>
    </section>
  );
}




