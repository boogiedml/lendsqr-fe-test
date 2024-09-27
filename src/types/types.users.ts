export interface User {
  _id: string;
  fullName: string;
  userTier: number;
  accountBalance: string;
  accountNumber: string;
  phoneNumber: number;
  email: string;
  BVN: number;
  gender: string;
  maritalStatus: string;
  children: number | "None";
  typeOfResidence: string;
  registered: string;
  status: string;
  organisation: string;
  savings: number | string;
  educationAndEmployment: EducationAndEmployment;
  socials: Socials;
  guarantor: Guarantor[];
  profilePicture: string;
}

export interface EducationAndEmployment {
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  officeEmail: string;
  monthlyIncome: number;
  loanRepayment: number;
}

export interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

export interface Guarantor {
  fullName: string;
  phoneNumber: number;
  email: string;
  relationship: string;
}
