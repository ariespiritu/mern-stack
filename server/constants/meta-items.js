/*
Constant Items/Options

Meta Items {
  Genders           : [],
  CivilStatuses     : [],
  IdTypes           : [],
  ContactNumberTypes: [],
  EmploymentTypes   : [],
  EmploymentStatuses: [],
  Industries        : [],
  Occupations       : [],
}

*/

/******************************************************************************/


/*
Gender {
  _id : Number,
  name: String
}
*/
var genders = [
  {
    _id : 1,
    name: 'Female'
  },
  {
    _id : 2,
    name: 'Male'
  },
  {
    _id : 3,
    name: 'Others'
  }
];


/*
Civil Status {
  _id : String,
  name: String
}
*/
var civilStatuses = [
  {
    _id : 'S',
    name: 'Single'
  },
  {
    _id : 'M',
    name: 'Married'
  },
  {
    _id : 'D',
    name: 'Divorced/Separated'
  },
  {
    _id : 'W',
    name: 'Widowed'
  }
];


/*
IdType {
  _id : String,
  name: String
}
*/
var idTypes = [
  {
    _id : 'SSS',
    name: 'Social Security System'
  },
  {
    _id : 'GSIS',
    name: 'Government Service Insurance System'
  },
  {
    _id : 'TIN',
    name: 'Tax Identification Number'
  },
  {
    _id : 'UMID',
    name: 'Unified Multi-Purpose Card'
  },
  {
    _id : 'PP',
    name: 'Passport'
  },
  {
    _id : 'DL',
    name: 'Driver\'s License'
  },
  {
    _id : 'PRC',
    name: 'Professional Regulation Commission'
  },
  {
    _id : 'NBI',
    name: 'National Bureau of Investigation'
  }
];


/*
Employment Status {
  _id : String,
  employmentType: String, // Ref to Employment Type
  name: String
}

*/
var employmentStatuses = [
  {
    _id           : 5,
    employmentType: 'E',
    name          : 'Consultant'
  },
  {
    _id           : 2,
    employmentType: 'E',
    name          : 'Contractual'
  },
  {
    _id           : 3,
    employmentType: 'E',
    name          : 'Probationary/Trainee'
  },
  {
    _id           : 4,
    employmentType: 'E',
    name          : 'Project Hired (Project Based)'
  },
  {
    _id           : 1,
    employmentType: 'E',
    name          : 'Regular'
  },
  {
    _id           : 6,
    employmentType: 'S',
    name          : 'Freelancer'
  },
  {
    _id           : 8,
    employmentType: 'S',
    name          : 'Professional'
  }
];


/*
Industries {
  _id : Number,
  name: String
}

*/

var industries = [
  {
    _id: 1,
    name: 'Agriculture'
  },
  {
    _id: 2,
    name: 'Mining and Quarrying'
  },
  {
    _id: 3,
    name: 'Manufacturing'
  },
  {
    _id: 4,
    name: 'Electricity, gas, steam, and air-conditioning supply'
  },
  {
    _id: 5,
    name: 'Water supply, sewerage, waste management and remediation activities'
  },
  {
    _id: 6,
    name: 'Construction'
  },
  {
    _id: 7,
    name: 'Wholesale and retail trade; repair of motor vehicles and motorcycles'
  },
  {
    _id: 8,
    name: 'Transportation and storage'
  },
  {
    _id: 9,
    name: 'Accommodation and food service activities'
  },
  {
    _id: 10,
    name: 'Information and communication '
  },
  {
    _id: 11,
    name: 'Financial and insurance activities'
  },
  {
    _id: 12,
    name: 'Real estate activities'
  },
  {
    _id: 13,
    name: 'Professional, scientific and technical services'
  },
  {
    _id: 14,
    name: 'Administrative and support service activities'
  },
  {
    _id: 15,
    name: 'Public administrative and defense; compulsory social security'
  },
  {
    _id: 16,
    name: 'Education'
  },
  {
    _id: 17,
    name: 'Human health and social work activities'
  },
  {
    _id: 18,
    name: 'Arts entertainment and recreation'
  },
  {
    _id: 19,
    name: 'Other service activities'
  },
  {
    _id: 20,
    name: 'Activities of private households as employers and undifferentiated goods and services and producing activities of households for own use'
  },
  {
    _id: 21,
    name: 'Activities of extraterritorial organizations and bodies'
  },
  {
    _id: 22,
    name: 'Administrative and Support Service Activities'
  },
  {
    _id: 99,
    name: 'Others'
  }
];

/*
PositionLevel = {
  _id : Number,
  name: String
}
*/
var positionLevels = [
  {
    _id : 4,
    name: 'AVP/VP/CEO'
  },
  {
    _id : 3,
    name: 'Manager'
  },
  {
    _id : 2,
    name: 'Supervisor'
  },
  {
    _id : 1,
    name: 'Rank and File'
  },
];

/*
Business Entities = {
  _id : Number,
  name: String
}
*/
var businessEntities = [
  {
    _id : 1,
    name: 'Sole Proprietorship'
  },
  {
    _id : 2,
    name: 'Partnership'
  },
  {
    _id : 3,
    name: 'Corporation'
  }
];


/*
Positions in Business = {
  _id : Number,
  name: String
}
*/
var positionsInBusiness = [
  {
    _id : 1,
    name: 'Proprietor'
  },
  {
    _id : 2,
    name: 'Partner'
  },
  {
    _id : 3,
    name: 'President'
  },
  {
    _id : 4,
    name: 'Chairman of the Board'
  }
];



/*
Business Loan Purposes = {
  _id : Number,
  name: String
}
*/
var purposes = [
  {
    _id : 1,
    type: 'Business Loan',
    name: 'Business Expansion'
  },
  {
    _id : 2,
    type: 'Business Loan',
    name: 'Capital Infusion'
  },
  {
    _id : 1,
    type: 'Personal Loan',
    name: 'Personal Expenses'
  },
  {
    _id : 2,
    type: 'Personal Loan',
    name: 'Education Fees'
  },
  {
    _id : 3,
    type: 'Personal Loan',
    name: 'House Improvements'
  },
  {
    _id : 4,
    type: 'Personal Loan',
    name: 'Medical Fees'
  },
  {
    _id : 5,
    type: 'Personal Loan',
    name: 'Bills Payments'
  },
  {
    _id : 6,
    type: 'Personal Loan',
    name: 'Business Capital'
  }
];



/*
Business Loan Purposes = {
  _id : Number,
  name: String
}
*/
var businessLoanPurposes = [
  {
    _id : 1,
    name: 'Business Expansion'
  },
  {
    _id : 2,
    name: 'Capital Infusion'
  }
];

/*
Residence Statuses = {
  _id : Number,
  name: String
}
*/
var residenceStatuses = [
  {
    _id : 1,
    name: 'Rented'
  },
  {
    _id : 2,
    name: 'Owned'
  },
  {
    _id : 3,
    name: 'Mortgaged'
  },
  {
    _id : 4,
    name: 'Living with Relatives'
  }
];


/*
Personal Loan Purposes = {
  _id : Number,
  name: String
}
*/
var personalLoanPurposes = [
  {
    _id : 1,
    name: 'Personal Expenses'
  },
  {
    _id : 2,
    name: 'Education Fees'
  },
  {
    _id : 3,
    name: 'House Improvements'
  },
  {
    _id : 4,
    name: 'Medical Fees'
  },
  {
    _id : 5,
    name: 'Bills Payments'
  },
  {
    _id : 6,
    name: 'Business Capital'
  }
];




// TODO: Use proper naming convention for constants
// Export all meta items
module.exports = Object.freeze({
  Genders              : genders,
  CivilStatuses        : civilStatuses,
  IdTypes              : idTypes,
  EmploymentStatuses   : employmentStatuses,
  Industries           : industries,
  PositionLevels       : positionLevels,
  BusinessEntities     : businessEntities,
  PositionsInBusiness  : positionsInBusiness,
  BusinessLoanPurposes : businessLoanPurposes,
  ResidenceStatuses    : residenceStatuses,
  PersonalLoanPurposes : personalLoanPurposes,
  Purposes             : purposes
});
