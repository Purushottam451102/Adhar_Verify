import { DataTypes, Model } from "sequelize";
import { sequelize } from "../plugins/sequelize";

class AadhaarDetails extends Model {}

AadhaarDetails.init(
    {
     id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
      primaryKey: true,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    aadhaar_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // Store full address object here
    address: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: {},
    },

    face_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    face_score: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profile_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    has_image: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    email_hash: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mobile_hash: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    raw_xml: {
      type: DataTypes.TEXT, // raw XML could be long
      allowNull: true,
    },
    zip_data: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    care_of: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    share_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mobile_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    reference_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    aadhaar_pdf: {
      type: DataTypes.STRING,
      allowNull: true,
    },
        
    },
    {
        sequelize,
        tableName: "aadhaar_details",
        timestamps: false,
    }
)
sequelize.sync();
// AadhaarDetails.sync({ alter: true })
export default AadhaarDetails;