type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}

let user: User = {
    id: 1,
    name: '방용환',
    nickname: 'yongss',
    birth: '1998-09-15',
    bio: 'hi',
    location: '오산시'
};

type CountryCodes = {
    [key: string]: string;
};

let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
    [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
};

let countryNumberCodes2: CountryNumberCodes = {};