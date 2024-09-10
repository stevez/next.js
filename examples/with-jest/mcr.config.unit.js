// https://github.com/cenfun/monocart-coverage-reports
const path = require("path");

module.exports = {
   // logging: 'debug',
    name: 'Unit Coverage Report',
    outputDir: './coverage/unit-monocart',

    reports: [
        'lcov',
        'json',
        'text',
        'text-summary',
        'v8',
        'raw'
    ],

    sourcePath: (filePath, info)=> {
        if (!filePath.includes('/') && info.distFile) {
            return `${path.dirname(info.distFile)}/${filePath}`;
        }
        return filePath;
    },

    all: {
        dir: ['./app', './pages'],
        filter: {
            // exclude files
            '**/__tests__/**': false,
            '**/*.test.*': false,
            '**/*.ts': true,
            '**/*.tsx': true
        }   
    },

    onEnd: () => {
        console.log('onEnd unit test');
    }
};