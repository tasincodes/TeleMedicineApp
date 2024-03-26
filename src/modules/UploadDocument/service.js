const Document = require('./model');

const uploadDocService = async(req,res)=>{
  try{
   
    const { docName, date,FileLink} = req.body;
    
    
    const newDocument = new Document({
      docName: docName,
      date: date,
      FileLink: FileLink // Assuming you're storing the file path in the database
    });
    
    const savedDocument = await newDocument.save();
  if (!savedDocument) {
    return res.status(500).json({ message: 'Failed to save document' });
  }
 return savedDocument;
  } catch (error) {
    
    next(error);
  }

}
module.exports = {uploadDocService}