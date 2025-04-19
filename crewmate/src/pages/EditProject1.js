import React from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { useState, useEffect } from 'react';
import { supabase } from '../client'




const EditProject1 = ({data}) => {


    const {id} = useParams();
    const [post, setPost] = useState({id: null, name: "", speed: "", color: ""});

    useEffect(() => {
        const fetchPost = async () => {
          const { data, error } = await supabase
            .from('crew')
            .select()
            .eq('id', id)
            .single();
    
          if (error) {
            console.error("Error fetching post:", error);
          } else {
            setPost(data); 
          }
        };
    
        fetchPost();
      }, [id]);


    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }


    const updatePost = async (event) => {
        event.preventDefault();


        await supabase
          .from('crew')
          .update({ name: post.name, speed: post.speed,  color: post.color})
          .eq('id', id);
     
        window.location = "/";


    }


    const deletePost = async (event) => {


        event.preventDefault();


            await supabase
                .from('crew')
                .delete()
                .eq('id', id);


            window.location = "http://localhost:3000/";
    }






    return (
        <div>
            <form>
                <label for="name">Name</label> <br />
                <input type="text" id="name" name="name" value={post.name} onChange={handleChange} /><br />
                <br/>


                <label for="speed">Speed</label><br />
                <input type="text" id="speed" name="speed" value={post.speed} onChange={handleChange} /><br />
                <br/>
                <label htmlFor="color">Color</label><br />
{["red", "green", "blue", "purple", "yellow", "orange", "pink", "rainbow"].map((colorOption) => (
  <div key={colorOption}>
    <input
      type="radio"
      id={colorOption}
      name="color"
      value={colorOption}
      checked={post.color === colorOption}
      onChange={handleChange}
    />
    <label htmlFor={colorOption} style={{ textTransform: "capitalize", marginLeft: "4px" }}>
      {colorOption}
    </label>
  </div>
))}
<br />
                <br/>
                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
                </form>
        </div>
    )
}


export default EditProject1
