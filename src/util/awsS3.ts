import { S3 } from 'aws-sdk';

const s3 = new S3({
  accessKeyId: "AKIA5RGPWXNPZ5OGWOCE",
  secretAccessKey: "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",
  region: "us-east-1", 
});

export const uploadImageToS3 = async (file) => {
  const params = {
    Bucket: "rsb-football1",
    Key: file.name, 
    Body: file, 
    ContentType: file.type,
  };

  try {
    const data = await s3.upload(params).promise();
    console.log('Image uploaded successfully:', data.Location);
    return data.Location; 
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

