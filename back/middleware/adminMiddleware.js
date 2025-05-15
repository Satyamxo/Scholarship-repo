import jwt from 'jsonwebtoken';


const isAdmin = async (req, res, next) => {
  const {adminToken} = req.headers
  console.log(adminToken)

  if (!adminToken) {
    return res.status(401).json({ message: 'No token provided, authorization denied.' });
  }

  try {
    const decoded = jwt.verify(adminToken, process.env.JWT_SECRET);

    if (decoded.adminEmail != process.env.ADMIN_EMAIL) {
        
        return res.status(404).json({ message: 'User not found.' });
    }

    
    

    next();

  } catch (error) {
    console.log(error)
    res.status(401).json({ message: 'Invalid token, authorization denied.' });
  }
};

export default isAdmin;
