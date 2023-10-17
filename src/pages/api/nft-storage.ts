import formidable from "formidable";
import { readFileSync, unlinkSync } from "fs";
import { NextApiHandler } from "next";
import { File, NFTStorage } from "nft.storage";
import { tmpdir } from "os";

const client = new NFTStorage({ token: `${process.env.NFT_STORAGE_KEY}` });

const handler: NextApiHandler = async (req, res) => {
  if (req.method != "POST") {
    return res.status(403).json({ error: `Unsupported method ${req.method}` });
  }
  try {
    
    const data: any = await new Promise((res, rej) => {
      const uploadDir = `${process.cwd()}/tmp`
      const form = formidable({ multiples: true, uploadDir});
      form.parse(req, (err, fields, files) => {
        if (err) rej(err);
         
        res({ ...fields, ...files });
      });
    });
    
    const filepath: string = data.image[0].filepath;
   
    const {
 
      originalFilename = "image",
      mimetype = "image",
    } = data.image;
    console.log('enter the buffer')
    const buffer = readFileSync(filepath);
    console.log('this is buffer',buffer)
    const arraybuffer = Uint8Array.from(buffer).buffer;
    const file = new File([arraybuffer], originalFilename, {
      type: mimetype,
    });
    
 
    // Upload data to nft.storage
    const { name, description } = data; // Assuming name and description are properties of your data object
 
    const metadata = await client.store({
      name: name[0],
      description: description[0],
      image: file,
    }); 
 
    // Delete tmp image
    unlinkSync(filepath);
    // return tokenURI
    
    res.status(201).json({ uri: metadata.url });
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};

// Must disable bodyParser for formidable to work
export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
 