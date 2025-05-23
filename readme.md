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

### Find Records

```javascript
PincodeFinder(248001);
```

### Example Query Output

```json
[
  {
    officename: 'Dehradun City SO',
    pincode: '248001',
    district: 'DEHRADUN',
    statename: 'UTTARAKHAND'
  },
  {
    officename: 'Dehradun Kty SO',
    pincode: '248001',
    district: 'DEHRADUN',
    statename: 'UTTARAKHAND'
  }
]
```

## License

This project is licensed under nothing.

