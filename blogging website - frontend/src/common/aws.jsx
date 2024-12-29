import axios from "axios";

export const uploadImage = async (img) => {
    try {
        const { data: { uploadURL } } = await axios.get(import.meta.env.VITE_SERVER_DOMAIN + "/get-upload-url");
        
        await axios.put(uploadURL, img, {
            headers: { 'Content-Type': img.type || 'multipart/form-data' },
        });
        
        return uploadURL.split("?")[0];
    } catch (error) {
        console.error("Image upload failed:", error.message);
        throw new Error("Failed to upload image. Please try again.");
    }
};


// import axios from "axios";
// export const uploadImage = async (img) => {
//     let imgUrl = null;

//     await axios
//       .get(import.meta.env.VITE_SERVER_DOMAIN + "/get-upload-url")
//       .then(async ({ data: { uploadURL } }) => {
//         await axios({
//             method: "PUT",
//             url: uploadURL,
//             headers: { 'Content-Type': 'multipart/form-data' },
//             data: img
//         })
//         .then(() => {
//             imgUrl = uploadURL.split("?")[0];
//         })
//       })

//       return imgUrl;
// }






