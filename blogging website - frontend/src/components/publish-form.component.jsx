import React from "react";
import axios from "axios"

function PublishForm() {

  const publishBlog = () => {

    if(e.target.classList.includes("disable")){
      return;
    }

    if(!title.length){
      return toast.error("Writr blog title before publishing");
    }

    if(!des.length || des.length > CharacterLimit){
      return toast.error(`Write a description about your blog within ${CharacterLimit} characters to publish`)
    }

    if(!tags.length){
      return toast.error("Enter atleast 1 tag to help us rank your blog")
    }

    let loadingToast = toast.loading("Publishing...");

    e.target.classList.add('disable');

    let blogObj =

    axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/create-blog", )
  }

  return (
    <div>
      <h1>Publish editor</h1>
      <button
      className="btn-darkpx-8"
      onClick={publishBlog}
      >
        Publish
      </button>
    </div>
  );
}

export default PublishForm;
