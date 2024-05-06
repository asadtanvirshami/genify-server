module.exports = (sequelize, DataTypes) => {
  const Agency = sequelize.define("Agency", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    profileImg: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return Agency;
};
