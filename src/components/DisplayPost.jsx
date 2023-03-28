import React from 'react'
import "../index.css"

// const DisplayPost = (props) => {
//   const {logo, image, prompt, user} = props.post;

//   return (
//     <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
//       <img 
//       className='w-full h-auto object-cover rounded-xl' 
//       src={image} 
//       alt={prompt} 
//       />
     
//     </div>
//   )
// }

const DisplayPost = ({ post }) => {
    return (
      <div className="post">
        <img
          className="post-image"
          src={post.image}
          alt={post.prompt}
          
  
        />
        
      </div>
    );
  };
  

  export default DisplayPost

  
