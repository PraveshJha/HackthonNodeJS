import { ChainablePromiseElement } from 'webdriverio';
import SearchUnit from '../components/search/searchUnit';
class HomePage 
{

    async PopulateSearch(destination:string)
    { 
        await SearchUnit.PopulateSearch(destination)
    }


}

export default new HomePage();