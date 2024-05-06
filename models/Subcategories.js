module.exports = (sequelize, DataTypes) => {
    const Subcategory = sequelize.define("Subcategory", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        categoryId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Category',
            key: 'id',
          },
        },
      });
      
    return Subcategory;
  };
  