import app from "./app";
import "dotenv/config";

const port = process.env.PORT;

app.listen(3000,()=>{
    console.log(`Server started on port ${port}.`);
});
