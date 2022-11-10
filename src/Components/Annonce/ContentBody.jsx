export const ContentBody = ({ title, adresse, date, prix }) => {
  return (
    <div className="p-2 w-full">
      <div className="fs-3 fw-bold">{title}</div>
      <div className="text-muted">{adresse}</div>
      <div className="fs-4 fw-bold">{prix} €</div>
      <div className="text-muted">{date}</div>
    </div>
  );
};
