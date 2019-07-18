export class User {
    constructor(
      public email: string,
      public id: string,
      private _token: string,
      private _tokenExpirationDate: Date
    ) {}
  
    get token() {
        return this._token;
    }
  }

  export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
  }
  