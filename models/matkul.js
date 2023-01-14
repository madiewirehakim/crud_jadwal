import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Matkul = db.define('matakuliah',{
    matakuliah: DataTypes.STRING,
},{
    freezeTableName:true
});
 
export default Matkul;
 
(async()=>{
    await db.sync();
})();