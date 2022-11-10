export const Annonceur = ({ userImage, userName, children }) => {
  return (
    <div className="col-md-4 w-full bg-white mh-fit">
      <div className="w-100 border rounded-2 shadow-sm p-2 ">
        <div className="d-flex flex-row w-100  space-between align-items-center">
          {/* userImage */}
          <div className="w-50 text-right">
            <img
              src={userImage}
              alt={userName ? userName : "Le nom de l'annonceur"}
              className="w-100"
            />
          </div>
          {/* Name */}
          <div className="w-100 text-right fw-bold fs-6 text-muted">
            {userName || 'Annonceur'}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
