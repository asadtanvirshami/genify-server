const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Contract = sequelize.define("Contract", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
    hourlyRate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
  });

  return Contract;
};
