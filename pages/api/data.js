import fs from 'fs';
import path from 'path';

const fileName = 'data.csv';

export default function handler(req, res) {

    const filePath = path.join(process.cwd(), 'mock', fileName);

    fs.readFile(filePath, (error, data) => {
        if(error){
          res.status(500).json({ error: "unable to read file!"});
        }

        const fileData = data.toString().split('\n').map((elem) => {
            const [created, name] = elem.split(';');
            return {created, name};
        });

        res.status(200).json(fileData);
    })
}
