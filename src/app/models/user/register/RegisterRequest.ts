export interface RegisterRequest {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    userRole: string;
    addresses: AddressDto[];
    role: string;
    authorId?: string;
  }
  
export interface AddressDto {
    country: string;
    city: string;
    zipCode: string;
    street: string;
    buildingNumber: string;
  }
  