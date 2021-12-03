const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('testimonial', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    details: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
  },

  company: {
    type: DataTypes.STRING,
    allowNull: false,
}
  });
};