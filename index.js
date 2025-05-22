const pincodes = require('./pincodesAll.json')
function findPincode(pincode) {
    return pincodes[pincode]
}
module.exports = findPincode;
