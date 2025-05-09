import { DataTypes, Model } from "sequelize";
import { sequelize } from "../plugins/sequelize";

class AddharModel extends Model {
    id!: string;
    addhar_number!: string;
}

AddharModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: true,
            primaryKey: true,
        },
        addhar_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_on: {
            type: DataTypes.DOUBLE,
            defaultValue: Date.now(),
            allowNull: true,
        },
        modified_on: {
            type: DataTypes.DOUBLE,
            defaultValue: Date.now(),
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: "addhar",
        timestamps: false,
    }
)

sequelize.sync();
export default AddharModel;


