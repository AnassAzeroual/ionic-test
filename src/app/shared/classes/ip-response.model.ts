export class IpResponse {
    constructor(
        public ipAddress: string,
        public continentCode: string,
        public continentName: string,
        public countryCode: string,
        public countryName: string,
        public stateProv: string,
        public city: string,) {
        this.ipAddress = ipAddress;
        this.continentCode = continentCode;
        this.continentName = continentName;
        this.countryCode = countryCode;
        this.countryName = countryName;
        this.stateProv = stateProv;
        this.city = city;
    }
}