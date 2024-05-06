module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio:{ type: DataTypes.TEXT},
    avatar :{ type: DataTypes.STRING},
    password: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING },
    dob: { type: DataTypes.DATEONLY },
    gender: { type: DataTypes.STRING },
    approved: {
      type: DataTypes.BOOLEAN,
      defaultValue: "1",
    },
    location: DataTypes.JSON,
  });
  return User;
};
