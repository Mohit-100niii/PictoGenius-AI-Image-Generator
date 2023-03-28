import React from "react";
import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import DisplayPost from "./DisplayPost";
import { CircularIndeterminate } from "../loadanimation";

const Home = () => {
  const [allPost, setAllPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const postRef = collection(db, "post");

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

useEffect(() => {
    if(allPost && search){
        setSearchResult(allPost.filter((item) => item.user.toLowerCase().includes(search.toLowerCase()) || item.prompt.toLowerCase().includes(search.toLowerCase())));
    }
}, [search])


  useEffect(() => {
    setLoading(true);
    const getPosts = async () => {
      await getDocs(postRef).then((data) => {
        setAllPost(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
        setLoading(false);
      });
    };
    getPosts();
  }, []);
  return (
     
      <div className="container mt-2" style={{margin:"40px"}}>
      <section className="max-w-7xl max-38px-auto">
        <h1 className="font-extrabold text-[40px]">
        The Community <span> Showcase</span>
        </h1>
        <p className="mt-2 text-[15px] max-w-[500px]">
          Browse through a collection of imaginative and visually stunning
          images generated by <span>DALL-E AI</span>
        </p>

      <div className="mt-8">
        <input className="input-box"
            type="text"
            name="search"
            placeholder="Search Your prompt..." onChange={e=>setSearch(e.target.value)}
            value={search}
            />
           
      </div>

      <div className="m-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <CircularIndeterminate />
          </div>
        ) : (
            <div className="picture">
          { search && searchResult ? searchResult.map((post) => <DisplayPost post={post} />):
            allPost && allPost.map((post) => (<DisplayPost post={post} />
        ))}
        </div>
        )}
      </div>
      </section>
      </div>

    
  );
};

export default Home;