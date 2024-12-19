// Headers for the ExerciseDB API
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, // Ensure the API key is correct
  },
};

// Headers for the YouTube Search API
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, // Ensure the API key is correct
  },
};

// Generalized fetch function for all API requests
export const fetchData = async (url, options) => {
  try {
    // Make the API request
    const res = await fetch(url, options);
    
    // Check if the response is OK (status 200-299)
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status} | URL: ${url}`);
    }

    // Convert response to JSON
    const data = await res.json();

    // Log the response for debugging
    console.log('API Response:', data);

    // Return data (default to an empty array if data is falsy)
    return data || [];
    
  } catch (error) {
    // Log the error to the console
    console.error('Error fetching data:', error);
    return []; // Return an empty array to prevent crashes
  }
};
