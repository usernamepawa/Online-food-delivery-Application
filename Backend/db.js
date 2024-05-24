
const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/gofoodmern"

// const mongoURI = "mongodb+srv://root:root@cluster0.h8mbxqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const fetchdata = async () => {
//     try {
//         const fetch_data = await mongoose.connection.db.collection("food_items");
//         const data = await fetch_data.find({}).toArray();
//         console.log(data);
//     } catch (err) {
//         console.error("Error fetching data:", err);
//     }
// };


const mongoDB = async () => {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected to MongoDB");

        console.log("Accessing food_items collection...");
        const fetch_data = await mongoose.connection.db.collection("food_items");
      //  console.log("Fetching data from food_items collection...");
        const data = await fetch_data.find({}).toArray();
      //  console.log("Data fetched from food_items:", data);
       
            global.food_items=data;
        
        console.log("The global data" ,global.food_items)
        console.log("Accessing foodCategory collection...");
        const foodCategory = await mongoose.connection.db.collection("foodCategory");
      //  console.log("Fetching data from foodCategory collection...");
        const catData = await foodCategory.find({}).toArray();
        global.foodCategory=catData;

        console.log("FoodCategory Data",global.foodCategory)
       // console.log("Data fetched from foodCategory:", catData);

        // Handle data and catData as needed

    } catch (err) {
        console.error("Error:", err);
    }
};

mongoDB();

module.exports = mongoDB;


// const mongoDB = async () => {

//     await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//         if (err) console.log("--", err)

//         else {
//             console.log("Connected");

//             const fetch_data = await mongoose.connection.db.collection("food_items");
//             fetch_data.find({}).toArray(async function (err, data) {
//                 const foodCategory = await mongoose.connection.db.collection("foodCategory");
//                 foodCategory.find({}).toArray(function (err, catData) {

                    
//                 })

//             })
//         }

    
//     })}






//      mongoDB()


        module.exports = mongoDB;



// const mongoose = require("mongoose");

// const mongoURI = "mongodb+srv://root:root@cluster0.h8mbxqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const fetchdata = async () => {
//     const fetch_data =  mongoose.connection.db.collection("food_items")
//     fetch_data.find({}).toArray(function (err, data) {
//         if (err) console.log("Error", err)
//         else {
//             console.log(data)
//         }
//     })
// }
// const mongoDB = () => {




//     mongoose.connect(mongoURI)
//         .then(() => {
//             console.log("Connected to MongoDB");
//             console.log("Data fetched")
//             fetchdata()





//         })

//         .catch((error) => {
//             console.error("Error connecting to MongoDB:", error);
//         });
// };

// module.exports = mongoDB;

