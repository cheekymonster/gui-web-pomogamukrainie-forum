import { OffersBaseOffer, UserInfo } from '@app/core/api';

export const loggedUserInfo: UserInfo = { email: 'john@email.invalid', firstName: 'John' };

export const userOffers: OffersBaseOffer = {
  content: [
    {
      id: 1,
      userFirstName: 'Basia',
      title: 'Mieszkanie w bloku, 2 osoby - Rzeszów, woj. podkarpackie',
      description:
        'nocleg noclegmazowieckie transport Dolnośląskie, miejscowość Wrocław - ok. 5 km od Dworca głównego. Kawalerka na wyłączność pomieści 2 osoby + zwierzęta są mile widziane. Okres: 2 miesiące, Bezpłatnie....',
      modifiedDate: '2022-03-14T10:36:12Z',
      location: {
        region: 'podkarpackie',
        city: 'Rzeszów',
      },
      guests: 2,
      lengthOfStay: 'MONTH_2',
      hostLanguage: ['PL', 'UA'],
      phoneNumber: '48123456789',
      type: 'ACCOMMODATION',
    },
    {
      id: 19,
      userFirstName: 'Maria',
      title: 'Mam do oddania zabawki dziecięce',
      description:
        'worek zabawek do oddania, wszystkie w dobrym stanie, dla dziecka w wieku 5-10 lat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      modifiedDate: '2022-03-16T14:43:15Z',
      category: 'FOR_CHILDREN',
      location: {
        region: 'Mazowieckie',
        city: 'Warszawa',
      },
      phoneNumber: '48456789123',
      type: 'MATERIAL_AID',
    },
    {
      id: 23,
      userFirstName: 'Mariusz',
      title: 'Darmowy transport na granicę i z granicy z Ostrowa i okolic',
      description:
        'Darmowy transport z Ostrowa i okolic na granicę z Ukraniną i z granicy mam 4 miejsca mam foteliki dla dzieci najleipiej w weekend',
      modifiedDate: '2022-03-16T14:43:15Z',
      origin: { region: 'woj. warmińsko-mazurskie, pow. szczycieński, gm. Szczytno', city: 'Szczytno' },
      destination: { region: 'woj. pomorskie, pow. Gdańsk, gm. Gdańsk', city: 'Gdańsk' },
      capacity: 10,
      transportDate: '2022-03-16',
      phoneNumber: '48789123456',
      type: 'TRANSPORT',
    },
    {
      id: 30,
      userFirstName: 'Piotr',
      title: 'TEXT_NO_SPACESMieszkaniewbloku,4osobyMiędzygórze,woj.podlaskie',
      description:
        'TEXT_NO_SPACESKawalerkanawyłącznośćpomieści2osoby+zwierzętasąmilewidziane.Okres:2miesiące,Bezpłatnie....',
      modifiedDate: '2022-03-16T14:43:15Z',
      location: { region: 'podlaskie', city: 'Międzygórze' },
      guests: 4,
      lengthOfStay: 'LONGER',
      hostLanguage: ['PL', 'UA'],
      phoneNumber: '48891234567',
      type: 'ACCOMMODATION',
    },
    {
      id: 234,
      userFirstName: 'Stefan',
      title: 'Darmowy transport na granicę i z granicy z Warszawy i okolic',
      description:
        'Darmowy transport z Warszawy i okolic na granicę z Ukraniną i z granicy mam 4 miejsca mam foteliki dla dzieci najleipiej w weekend',
      modifiedDate: '2022-03-16T14:43:15Z',
      origin: {
        region: 'Pomorskie',
        city: 'Gdańsk',
      },
      destination: {
        region: 'Mazowieckie',
        city: 'Warszawa',
      },
      capacity: 6,
      transportDate: '2022-03-17',
      phoneNumber: '48789123457',
      type: 'TRANSPORT',
    },
    {
      id: 2345,
      userFirstName: 'Anna',
      title: 'Darmowy transport na granicę i z granicy z Przemyśla i okolic',
      description:
        'Darmowy transport z Przemyśla i okolic na granicę z Ukraniną i z granicy mam 4 miejsca mam foteliki dla dzieci najleipiej w weekend',
      modifiedDate: '2022-03-16T14:43:15Z',
      origin: {
        region: 'Pomorskie',
        city: 'Gdańsk',
      },
      destination: {
        region: 'Podkarpackie',
        city: 'Warszawa',
      },
      capacity: 5,
      transportDate: '2022-03-18',
      phoneNumber: '48789123458',
      type: 'TRANSPORT',
    },
    {
      id: 79,
      userFirstName: 'Marta',
      title: 'Pomoc prawna dla obywateli Ukrainy',
      description: 'Oferuję pomoc prawną dla obywateli Ukrainy. Udzielę porad prawnych w zakresie prawa karnego.',
      modifiedDate: '2022-03-14T10:36:12Z',
      location: { region: 'woj. mazowieckie, pow. Warszawa, gm. Warszawa', city: 'Warszawa' },
      helpMode: ['STATIONARY', 'WITH_ACCESS', 'ONLINE', 'BY_EMAIL', 'BY_PHONE'],
      helpKind: ['LABOUR_LAW', 'IMMIGRATION_LAW', 'FAMILY_LAW', 'TAX_LAW', 'CIVIL_LAW', 'OTHER'],
      language: ['PL', 'UA'],
      phoneCountryCode: '48',
      phoneNumber: '48123456789',
      type: 'LAW',
    },
    {
      id: 777,
      userFirstName: 'Adam',
      title: 'Centrum psychologicze, oferuje pomoc',
      description: 'Oferujemy pomoc psychologiczną dla obywateli Ukrainy.',
      modifiedDate: '2022-03-14T10:36:12Z',
      location: { region: 'woj. mazowieckie, pow. Warszawa, gm. Warszawa', city: 'Warszawa' },
      mode: ['ONLINE', 'BY_PHONE'],
      specialization: 'PSYCHOLOGY',
      language: ['PL', 'UA'],
      phoneCountryCode: '48',
      phoneNumber: '48123456789',
      type: 'HEALTH',
    },
    {
      id: 888,
      userFirstName: 'User First Name',
      title: 'Programista Java',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      phoneNumber: '516999666',
      phoneCountryCode: '+48',
      modifiedDate: '2022-03-16T14:43:15Z',
      mode: 'ONSITE',
      location: { region: 'podkarpackie', city: 'Rzeszów' },
      industry: 'IT',
      workTime: ['FULL_TIME', 'PART_TIME'],
      contractType: ['B2B'],
      language: ['PL', 'UA'],
      type: 'JOB',
    },
  ],
  totalElements: 9,
  totalPages: 2,
};
