import { ContentBody } from './ContentBody';
import { ContentHeader } from './ContentHeader';

export const AdContent = () => {
  return (
    <div className="col-md-8 w-full">
      <ContentHeader />
      <ContentBody
        title={"Le titre de l'annonce"}
        adresse="119 rue de Paris ,94000 Vitry-sur-seine"
        date={'10//11/2019 à 10:30'}
        prix={1200}
      />
    </div>
  );
};
