import React from 'react'


const YtVideoCard = ({items}) => {
    // console.log(items);
    // if (!items || !items.statistics) {
    //     return <div className='text-white'>daa is loading </div>;
    //   }

      const {snippet  , statistics  } = items


    
function numberToString(input) {
    const num = typeof input === 'string' ? parseFloat(input) : input;

    // Check if the input is a valid number
    if (isNaN(num)) {
        return "Invalid input";
    }

    // Check for special cases like 0, negative numbers
    if (num === 0) {
        return "0";
    }

    // Define the suffixes and their corresponding divisor
    const suffixes = {
        "K": 1000,
        "M": 1000000,
        "B": 1000000000,
        "T": 1000000000000
        // Add more suffixes as needed
    };

    // Iterate through the suffixes
    for (const [suffix, divisor] of Object.entries(suffixes)) {
        if (Math.abs(num) >= divisor) {
            // Calculate the number with the suffix and return it
            const roundedNum = Math.round(num / divisor * 100) / 100; // Round to 1 decimal place
            // return roundedNum.toString() + suffix;
            return roundedNum.toFixed(2) + suffix;
        }
    }

    // If the number is smaller than the smallest suffix, return it as is
    // return num.toString();
    return num.toFixed(2);
}

// Given date string

const todate = (rawdate)=>{
    const dateString = rawdate;

// Parse the date string
const parsedDate = new Date(dateString);

// Format the parsed date to display only the date portion
const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
const formattedDate = parsedDate.toLocaleDateString('en-US', options);

 return formattedDate
}


const uplodetime = todate(snippet?.publishedAt)
// const views = numberToString(statistics.viewCount)
  return (
    <div className='hover:scale-105 transition-all ease-out duration-200 cursor-pointer text-white'>
        <div className='max-w-[380px]'>
            <img className='rounded-lg' src={(!snippet?.thumbnails?.maxres?.url )? snippet?.thumbnails?.high?.url : snippet?.thumbnails?.maxres?.url} alt="helo" />
        </div>
        <div>
        {snippet?.title.substring(0, 36)}...    
        <h3 className='font-bold text-sm text-[#7e7d7d] '> 
            {snippet.channelTitle}
        </h3> 
        {/* { statistics && <span>
        {views} views &nbsp; 
        </span>} */}
       
        <span>
             {uplodetime}
        </span>


        </div>
    </div>
  )
}

export default YtVideoCard


/**
 * thumbnails.maxres
 */