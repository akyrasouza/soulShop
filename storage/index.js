const Multer = require('multer')
const FirebaseStorage = require('multer-firebase-storage')
const {extname} = require('path')

const multer = Multer({
    storage: FirebaseStorage({
        public: true,
        bucketName: 'soulshop-33ba4.appspot.com',
        credentials: {
            privateKey: process.env.FIREBASE_PRIVATEKEY,
            projectId: process.env.FIREBASE_PROJECTID,
            clientEmail: process.env.FIREBASE_CLIENTEMAIL,
        },
        hooks: {
            beforeUpload(req,file){
                const randomName = 
                    Date.now()+
                    String(Math.floor(Math.random() * 1000))+
                    extname(file.originalname)

                    file.originalname = randomName;
                    file.name = randomName;
            },
        },
    }),
});

module.exports = multer;