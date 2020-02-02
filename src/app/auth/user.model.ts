export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  get token() {
    console.log(this._tokenExpirationDate);
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      console.log('null?');
      return null;
    }
    return this._token;
  }
}
