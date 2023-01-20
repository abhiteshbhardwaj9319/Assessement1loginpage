import React from 'react';
// Use React functional component to do so.
// A prop named "name" will be passed to Welcome component use it in writing greeting text.👇

export default function welcome(name){
    return(
        <>

        
        {/*Ques 3:Output the welcome message "Hey !" where name is name of the student using h1 tag.👇 */}
        <h1 >Hey ! {name.name1}</h1>

        {/* Also render the "Welcome to College." using h2 tag. 👇*/}
        <h2>Welcome to the LPU College</h2>
        <h6>Assignment Done By {name.name1} with Reg. No {name.regno1}</h6>

        </>
    )
}