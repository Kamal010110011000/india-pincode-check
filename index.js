const fs = require('fs');
const csv = require('csv-parser');

class PincodeFinder {

    async loadData() {
        return new Promise((resolve, reject) => {
            const results = [];
            fs.createReadStream(__dirname + "/5c2f62fe-5afa-4119-a499-fec9d604d5bd.csv")
                .pipe(csv())
                .on('data', (data) => results.push(data))
                .on('end', () => resolve(results))
                .on('error', (err) => reject(err));
        });
    }

    async findPincode(pincode) {
        const records = await this.loadData();
        return records.filter(record => {
            return record.pincode == pincode;
        });
    }
}

module.exports = PincodeFinder;
