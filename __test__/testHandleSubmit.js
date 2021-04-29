//import the file to test
import {handleSubmit} from '../src/client/js/formHandler';

//import "babel-polyfill";

//testing handle submit
describe("Testing the submit functionality", ()=>{
    test("Testing the handleSubmit() function",()=>{
        expect(handleSubmit).toBeDefined();
    })
})