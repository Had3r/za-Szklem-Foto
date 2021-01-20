import React from 'react';
import { MdLocalPhone } from '../../../assets/icons/icons';
import { TiMessages } from '../../../assets/icons/icons';

import { Wrapper } from './ContactBoxes.styles';
import { ContactBox } from './ContactBox';

export const ContactBoxes = () => {
  return (
    <Wrapper>
      <ContactBox
        data={{
          title: 'Porozmawiaj ze mną',
          description: `Interesuje Cię profesjonalna usługa fotograficzna? Po prostu podnieś telefon, aby
        porozmawiać z i dowiedzieć się więcej.`,
          icon: MdLocalPhone,
          number: '111 111 111',
        }}
      />
      <ContactBox
        data={{
          title: 'Kontakt mailowy',
          description: `Potrzebujesz pomocy ale wolisz wysłać wiadomość? 
          Nie martw się… jestem tu dla Ciebie`,
          icon: TiMessages,
          btnText: 'napisz do mnie',
        }}
      />
    </Wrapper>
  );
};
