export const Actions = ({ setShowNumber, number, showNumber }) => {
  return (
    <>
      <div className="w-100 d-grid gap-2 col-6 mx-auto">
        <button type="button" className="btn btn-primary w-100">
          Envoyer un message
        </button>
        <button
          type="button"
          className="btn btn-outline-primary w-100 showNumber"
          onClick={() => setShowNumber(true)}
        >
          {!showNumber ? 'Voir le numéro' : number ? number : '0700000000'}
        </button>
      </div>
    </>
  );
};
