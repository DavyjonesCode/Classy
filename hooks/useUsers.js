import React, {useState, useEffect} from "react";

export default (url) => {
    const [loading, setLoading] = useState(true)
    const [post, setPosts] = useState()
  
    useEffect(() => {
      fetch(url)
       .then((res) => res.json())
       .then((resJson) => resJson.posts)
       .then((posts) => setPosts(posts))
       .then(() => setLoading(false))
    }, [])
    return [loading,posts];
  }