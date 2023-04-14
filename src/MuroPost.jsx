import React, { useEffect, useState } from "react";
import "./muroPost.css";
import { auth, firestore } from "./config/firebase.js";

function MuroPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection("muroPost")
      .onSnapshot((snapshot) => {
        const newPosts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(newPosts);
      });
    return () => unsubscribe();
  }, []);

  return (
    <div className="muro-post">
      <h2>Muro de publicaciones</h2>
      <a href="/Agregar">Agregar</a>
      {posts.map((post) => (
        <div key={post.id} className="card">
          <div className="card-body">
            <h5 className="card-title">
              {post.Nombre} {post.Apellido}
            </h5>
            <p className="card-text">{post.Comentario}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MuroPost;
