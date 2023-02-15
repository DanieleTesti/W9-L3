import { useNavigate } from "react-router-dom";

const NotFound = ({ spacings }) => {
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <div className={`text-center ${spacings}`}>
      <h2>404 - Pagina non trovata</h2>
      <p>La risorsa richiesta non esiste</p>
      <button
        onClick={() => {
          navigate("/Home");
        }}
      >
        Torna indietro
      </button>
    </div>
  );
};

export default NotFound;
