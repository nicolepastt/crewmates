import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client'


const ReadProject1 = (props) => {


    const [posts, setPosts] = useState([]);


    useEffect(() => {


        //setPosts(props.data);


        const fetchPost = async () => {


            const {data} = await supabase
                .from('crew')
                .select()
               .order('created_at', { ascending: true })


                // set state of posts
                setPosts(data);

        }


        fetchPost()
    }, []);
   
    return (
        <div className="ReadProject1">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) =>
                   <Card id={post.id} name={post.name} speed={post.speed} color={post.color}/>
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>  
    )
}


export default ReadProject1;
