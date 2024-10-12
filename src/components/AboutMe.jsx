import "../css/AboutMe.css";
import heroImage from "../../public/img/bedstebud.png";

export default function AboutMe() {
  return (
    <div className=" front-page">
      <section
        className="front-page-hero"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <div>
          <h1>{"</Coder>"}</h1>
          <p>
            Front end developer who writes clean, elegant and efficient code.
          </p>
        </div>
        <div>
          <h1>Designer</h1>
          <p>Product designer specialising in UI design and design systems.</p>
        </div>
      </section>

      <section className="front-page-work-header">
        <div></div>
        <p>SOME OF MY LATEST WORK</p>
        <div></div>
      </section>
    </div>
  );
}
