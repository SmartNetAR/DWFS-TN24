async function getRepo() 
{
  try {
    const respuesta = await fetch("https://api.github.com/users/ayeAlvo");
    const data = await respuesta.json();
    console.log(data);
  }
  catch(error) {
    console.log("se produjo un error");
  }
}


getRepo();