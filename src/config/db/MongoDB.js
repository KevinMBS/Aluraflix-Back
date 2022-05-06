import InterfaceDatabase from "./InterfaceDatabase.js";
import mongoose from "mongoose"

class MongoDB extends InterfaceDatabase{

   #connectionString
    constructor(connectionString){
        super()
        this.#connectionString = connectionString
    }
    connect(){
        mongoose.connect(this.#connectionString)
        const dbConnection = mongoose.connection
        
            dbConnection.on("error", console.log.bind(console, 'Database connection error'))
            dbConnection.once("open", () => {
                //throw error??
                console.log('Database successfully connected')
            })
        return dbConnection
    }
}

export default MongoDB