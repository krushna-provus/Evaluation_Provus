
import loader from "./loader.mjs";
import loading from "./loadingState.mjs";

//common fetch function as there are two API calls, One for weather details and Another for getting location via ISP. Both have same logic, so instead of calling async/await,fetch() twice, using a common function, achieving REUSABILITY.

async function fetchFunction(url){
    try {
        loading.state = true;
        loader();
        const response = await fetch(url);
        const result = await response.json();
        if(response.ok){
            return result;
        }else{
            return result.cod;
        }
    } catch (error) {
        return error.message;
    }finally{
        loading.state = false; //Using finally block bcoz if fetch throws error, loader can get stuck, and as finally block is executed regardless of success of failure, it will turn the loader off.
    }
}

export default fetchFunction;