# escapist
A web-safe utility to quickly navigate users off the page.

(without just going to [Google](http://google.com))

## Usage 
```javascript
import "escapist";

// you can optionally configure the behavior
escapist.config = {
    engine: "bing",
    topics: ["cats", "dogs", "birds"],
}

escapist(); // will navigate to a page like 'cool birds' or 'cute cats'
```