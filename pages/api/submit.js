import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'I eat worksheets.' }));
});

handler.post(async (req, res) => {
    try {
        let data = req.body;
        data = JSON.parse(data);
        const d = new Date();
        data.date = d.toString();

        let doc = await req.db
            .collection('math')
            .updateOne({email: data.email, section: data.section},
                       {$set: data},
                       {upsert: true});
        res.status(201);
        return;
    } catch (err) {
        res.status(500).send("Error uploading worksheet.");
        return;
    }
});

export default handler;
