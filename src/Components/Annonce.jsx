import Logo from '../logo.svg';
import { useState } from 'react';
import { AdContent } from './Annonce/Content';
import { Annonceur } from './Annonce/Annonceur';
import { Actions } from './Annonce/Actions';
export const Annonce = ({ ...props }) => {
  const [showNumber, setShowNumber] = useState(false);
  return (
    <>
      <div className="container px-4 mt-2">
        <div className="row gx-5">
          <AdContent />
          <Annonceur userImage={Logo} userName={props?.user?.name}>
            <Actions
              showNumber={showNumber}
              setShowNumber={setShowNumber}
              number={props?.user?.number}
            />
          </Annonceur>
        </div>
      </div>
    </>
  );
};
