const fs = require('fs');
const util = require('util');
const uuidv4 = require('uuid/v4')
const dotenv = require('dotenv');
const AWS = require('aws-sdk');

const readFile = util.promisify(fs.readFile);

const BUCKET_NAME = 'lost-and-found-images';

dotenv.config();
const s3 = new AWS.S3({
    secretAccessKey: 'K5Erc4X68+gnlC4ySInPDl+7YRefyw4cnRMIbipo',
    accessKeyId: 'AKIAJKXSTAT7G54ZMJLQ',
    region: 'us-west-1'
})

const uploadToS3 = async (data:Buffer): Promise<string> => {
    const name = uuidv4() + '.png'
    await s3.putObject({
        Key: name,
        Bucket: BUCKET_NAME,
        ContentType: 'image/png',
        Body: data,
        ACL: 'public-read'
    }).promise();
    return `https://${BUCKET_NAME}.s3.us-west-1.amazonaws.com/${name}`;
};

const main = async () => {
    try {
        const data = await readFile("../public/src/assets/images/skulls.png")
        const url = await uploadToS3(data);
        // console.log('Data:',data)

        // const name = uuidv4() + '.png'
        ///grab the url(uuidv4) from 'data' and send it
        // console.log('Picture Name',url)


        /// put res.json here and 
    } catch (err) {
        console.log(err)
    }
}

main();