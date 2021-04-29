//import the file to test
import {checkForName} from '.vscode/src/client/js/urlChecker'

//test url check
describe("Testing to make sure input is url",()=>{
    test("Testing the checkForName() function", ()=>{
       expect(checkForName).toBeDefined();
        })})