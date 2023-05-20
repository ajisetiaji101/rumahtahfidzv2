const authRole = (roles) => {
  return (req, res, next) => {
    const userRole = req.user.role;

    if (!roles.includes(userRole)) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };
};

export default authRole;
