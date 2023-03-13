import { useState } from "react";
// import { usePostImagesToDBMutation } from "./services/cerealsApi";

export default function testingbullshitdeletethis() {
  //////////////////////////--------------
  const [postImage, setPostImage] = useState({ myFile: "" });

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   postImagesToDB(postImage);
  // }

  async function handleFileUpload(e) {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage, myFile: base64 });
  }

  //////////////////////////------------

  const [postImagesToDB] = usePostImagesToDBMutation();
  const [img, setImg] = useState({
    title: "",
    price: "",
    image: "",
  });
  const [postCereals] = usePostCerealsMutation();
  const based = async (e) => {
    const file = e.target.files[0];
    const base64 = await convert(file);
    setImg((i) => ({
      ...i,
      image: base64,
    }));
  };
  const convert = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const addshit = (e) => {
    const { name, value } = e.target;
    setImg((i) => ({
      ...i,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    console.log(img);
    // await postCereals(img);
    // uploadCereal(img);
  };
  return (
    <>
      <form
        action="http://localhost:5150/cereals/upload"
        encType="multipart/form-data"
        method="POST"
        onSubmit={(e) => (e.preventDefault(), handleSubmit(e))}
      >
        <input type="text" name="title" id="title" value={img.title} placeholder="title" onChange={addshit} />
        <br />
        <input type="number" name="price" id="price" placeholder="price" value={img.price} onChange={addshit} />
        <br />
        <input type="file" label="image" name="image" id="file-upload" onChange={(e) => based(e)} />
        <input type="submit" />

        {/* <form onSubmit={(e) => handleSubmit(e)}>
          <p>upload pic here</p>

          <input
            type="file"
            label="image"
            name="image"
            accept=".jpeg, .jpg, .png"
            onChange={(e) => handleFileUpload(e)}
          />
          <input type="submit" />
        </form> */}
      </form>
    </>
  );
}
