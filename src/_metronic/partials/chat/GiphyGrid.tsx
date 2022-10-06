import {
    Grid, // our UI Component to display the results
    SearchBar, // the search bar the user will type into
    SearchContext // the context that wraps and connects our components
} from '@giphy/react-components'
import { useContext } from 'react';
import { isBrowser } from 'react-device-detect';

const GiphyGrid: React.FC<{onGiphySelect?: any}> = ({onGiphySelect}) => {
    const { fetchGifs, searchKey } = useContext(SearchContext);
    const gifSend = (gif: any,e: { preventDefault: () => void; }) => {
        e.preventDefault();
        onGiphySelect(gif)
    }
    return (
        <>
        
            <div className='GifSearchbar mb-5 mt-5'>
                <SearchBar autoFocus={true} placeholder='Search Here' />
            </div>
            
            {/** 
                key will recreate the component, 
                this is important for when you change fetchGifs 
                e.g. changing from search term dogs to cats or type gifs to stickers
                you want to restart the gifs from the beginning and changing a component's key does that 
            **/}
            <Grid key={searchKey} hideAttribution={true} onGifClick={gifSend} columns={ isBrowser ? 6 : 2 } width={ isBrowser ? 1200 : 360} fetchGifs={fetchGifs} className="GifContainer" />
         
    
        </>
    )
}

export default GiphyGrid;