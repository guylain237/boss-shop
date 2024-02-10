import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import ImagetoBase64 from "../utility/ImagetoBase64";
import toast from "react-hot-toast";
function Product() {

    const [data, setData] = useState({
        nom: "",
        categorie: "",
        image: "",
        prix: "",
        description: "",
    });

    const handleOnchange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }


  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    
    setData((prev)=>{
        return {
            ...prev,
            image: data
        }
    })

  };  

  const onSubmit = async (e) => {
    e.preventDefault();
    const { nom, categorie, image, prix, description } = data;
  
    if (nom && categorie && image && prix && description) {
      const fetchdata = await fetch(
        `${import.meta.env.VITE_API_SERVER}/uploadProduct`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
  
      const response = await fetchdata.json();
      console.log(response);
  
      toast.success(response.message);
      
      setData(()=>{
        return{
          name : "",
          category : "",
          image : "",
          price : "",
          description : ""
        }
      })
    
    
    } else {
      toast.error("Veuillez remplir tous les champs");
    }
  };

  return (
    <div className="p-4">
      <form  className="m-auto w-full max-w-md shadow flex flex-col p-3"onSubmit={onSubmit}>
        <label htmlFor="nom">nom</label>
        <input
        onChange={handleOnchange}
          type="text"
          name="nom"
          placeholder="nom"
          className="bg-slate-200 p-1 my-1"
        />
        <label htmlFor="categorie">categorie</label>
<select 
  className="bg-slate-200 p-1 my-1" 
  id="categorie" 
  name="categorie" // Ajout de l'attribut name
  onChange={handleOnchange}
>
<option value="autres">selectionner une categorie</option>
  <option value="fruits">fruits</option> // Ajout de valeurs pour chaque option
  <option value="vegetable">vegetable</option>
  <option value="icecream">Icecream</option>
  <option value="desert">desert</option>
</select>
        <label htmlFor="image">
          Image
          <div
           
            className="h-40 w-full bg-slate-200 rounded flex items-center justify-center"
          >
            {data.image  ?
            (<span className="txt-5xl"><img src={data.image} className="h-full w-full object-cover" alt="image" /> </span>):( <span className="txt-5xl">
            <BsCloudUpload />
           
          </span>)
            }
           
            
            <input
              type={"file"}
              id="image"
              onChange={uploadImage}
              className="hidden"
            />
          </div>
        </label>
        <label htmlFor="prix" className="">
          prix
        </label>
        <input
          type="number"
          name="prix"
          placeholder="prix"
          className="bg-slate-200 p-1 my-1"
          onChange={handleOnchange}
        />

        <label htmlFor="description">description</label>
        <textarea
          name="description"
          placeholder="description"
          className="bg-slate-200 p-1 my-1 resize-none"
          rows={3}
          onChange={handleOnchange}
        />

        <button className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow p-2 rounded my-2">
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default Product;
