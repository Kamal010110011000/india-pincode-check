# India Pincode Check

A simple Node.js library that checks pincode and returns postoffice location with that pincode

## Installation

Install the package using npm:

```sh
npm install india-pincode-check
```

## Usage

### Import the Library

```javascript
const PincodeFinder = require('india-pincode-lookup');
```

### Initialize with a CSV File

```javascript
const pincodeFinder = new PincodeFinder();
```

### Find Records

```javascript
csvQuery.findPincode(248001).then();
```

### Example Query Output

```json
[
  {
    circlename: 'Uttarakhand Circle',
    regionname: 'DivReportingCircle',
    divisionname: 'Dehradun Division',
    officename: 'Dehradun City SO',
    pincode: '248001',
    officetype: 'PO',
    delivery: 'Non Delivery',
    district: 'DEHRADUN',
    statename: 'UTTARAKHAND',
    latitude: '30.3215000',
    longitude: '78.0364722'
  },
  {
    circlename: 'Uttarakhand Circle',
    regionname: 'DivReportingCircle',
    divisionname: 'Dehradun Division',
    officename: 'Dehradun Kty SO',
    pincode: '248001',
    officetype: 'PO',
    delivery: 'Non Delivery',
    district: 'DEHRADUN',
    statename: 'UTTARAKHAND',
    latitude: '30.3157778',
    longitude: '78.0410833'
  }
]
```

## License

This project is licensed under nothing.

