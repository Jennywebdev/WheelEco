import "./Team.css";
import LinkedInLogo from "../../assets/linkedinLogo.png";
import GithubLogo from "../../assets/githublogo.png";
import DavidPicture from "../../assets/DavidPicture.jpeg";
import MaevaPicture from "../../assets/MaevaPicture.jpeg";
import GuillaumePicture from "../../assets/GuillaumePicture.jpeg";

export default function TeamPresentation() {
  const urlLinkedinJenny = "https://www.linkedin.com/in/jenny-terrible/";
  const urlGithubJenny = "https://github.com/Jennywebdev";
  const urlLinkedinMaeva = "https://www.linkedin.com/in/maevacarinha/";
  const urlGithubMaeva = "https://github.com/maevacrh";
  const urlLinkedinPierreAlexis =
    "https://www.linkedin.com/in/pierre-alexis-chaboche-718291251/";
  const urlGithubPierreAlexis = "https://github.com/PA-Chaboche";
  const urlLinkedinAntonin =
    "https://www.linkedin.com/in/antonin-loistron-5b546a251/";
  const urlGithubAntonin = "https://github.com/nordiste-developpement";
  const urlLinkedinDavid = "https://www.linkedin.com/in/david-de-abreu/";
  const urlGithubDavid = "https://github.com/deabreudavid";
  const urlLinkedinGuillaume =
    "https://www.linkedin.com/in/guillaume-carrez-b8ba11238/";
  const urlGithubGuillaume = "https://github.com/Frenchkisss";
  return (
    <div className="presentationPage">
      <div className="presentation">
        <div className="artiste1">
          <img src="" alt="" className="picTeam" />
          <h1 className="namepres"> Jenny Terrible </h1>
        </div>
        <div className="paraphpres1">
          <a href={urlLinkedinJenny}>
            <img src={LinkedInLogo} alt="linkedin Logo" className="logopres" />
          </a>
          <a href={urlGithubJenny}>
            <img src={GithubLogo} alt="github logo" className="logopres" />
          </a>
        </div>
      </div>
      <div className="presentation">
        <div className="artiste2">
          <img src={MaevaPicture} alt="" className="picTeam" />
          <h1 className="namepres"> Maeva Carinha</h1>
        </div>
        <div className="paraphpres">
          <a href={urlLinkedinMaeva}>
            <img src={LinkedInLogo} alt="linkedin Logo" className="logopres" />
          </a>
          <a href={urlGithubMaeva}>
            <img src={GithubLogo} alt="github logo" className="logopres" />
          </a>
        </div>
      </div>
      <div className="presentation">
        <div className="artiste1">
          <img src="" alt="" className="picTeam" />
          <h1 className="namepres"> Pierre-Alexis Chaboche </h1>
        </div>
        <div className="paraphpres1">
          <a href={urlLinkedinPierreAlexis}>
            <img src={LinkedInLogo} alt="linkedin Logo" className="logopres" />
          </a>
          <a href={urlGithubPierreAlexis}>
            <img src={GithubLogo} alt="github logo" className="logopres" />
          </a>
        </div>
      </div>
      <div className="presentation">
        <div className="artiste2">
          <img src="" alt="" className="picTeam" />
          <h1 className="namepres"> Antonin Loistron </h1>
        </div>
        <div className="paraphpres">
          <a href={urlLinkedinAntonin}>
            <img src={LinkedInLogo} alt="linkedin Logo" className="logopres" />
          </a>
          <a href={urlGithubAntonin}>
            <img src={GithubLogo} alt="github logo" className="logopres" />
          </a>
        </div>
      </div>
      <div className="presentation">
        <div className="artiste1">
          <img src={DavidPicture} alt="" className="picTeam" />
          <h1 className="namepres"> David De Abreu</h1>
        </div>
        <div className="paraphpres1">
          <a href={urlLinkedinDavid}>
            <img src={LinkedInLogo} alt="linkedin Logo" className="logopres" />
          </a>
          <a href={urlGithubDavid}>
            <img src={GithubLogo} alt="github logo" className="logopres" />
          </a>
        </div>
      </div>
      <div className="presentation">
        <div className="artiste2">
          <img src={GuillaumePicture} alt="" className="picTeam" />
          <h1 className="namepres"> Guillaume Carrez</h1>
        </div>
        <div className="paraphpres">
          <a href={urlLinkedinGuillaume}>
            <img src={LinkedInLogo} alt="linkedin Logo" className="logopres" />
          </a>
          <a href={urlGithubGuillaume}>
            <img src={GithubLogo} alt="github logo" className="logopres" />
          </a>
        </div>
      </div>
    </div>
  );
}
