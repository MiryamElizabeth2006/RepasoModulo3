//Metodo GET
export const getAllPostsService=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {return response.json()})
    .then((json) => {console.log(json)});
}

//Metodo POST
export const createPostService=(post, fnExito)=>{
    const config={
        method:"POST",
        body:JSON.stringify({
            title: post.title,
            body: post.body,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json',
        }
    };

    fetch("https://jsonplaceholder.typicode.com/posts",config)
    .then((response) => {return response.json()})
    .then((json) => {console.log(json);fnExito();});
}

//Metodo PUT
export const updatePostService=(id)=>{
    const config={
        method:"PUT",
        body:JSON.stringify({
            id: 1,
            title: 'mensaje final',
            body: 'hasta la vista baby',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json',
        }
    };

    fetch('https://jsonplaceholder.typicode.com/posts/1',config)
    .then((response) => {return response.json()})
    .then((json) => {console.log(json)});
}

//Metodo GET
export const getByUserIdService =()=>{
    fetch("https://jsonplaceholder.typicode.com/posts?userId=2")
    .then((response) => {return response.json()})
    .then((json) => {console.log(json)});
}

//PARTE 6 PARA LOS BOTONES XXX, YYY, ZZZ

//Metodo GET DE la URL publica api Chiste en modo JSON

export const getAllServiceXXX=()=>{
    fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {return response.json()})
    .then((json) => {console.log(json)});
}

//Metodo POST 

export const createPostServiceYYY=()=>{
    const config={
        method:"POST",
        body:JSON.stringify({
            title: 'nuevo producto',
            price: 14.5,
            description: 'descripcion del producto',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }),
        headers:{
            'Content-type': 'application/json',
        }
    }
    fetch("https://fakestoreapi.com/products", config)
    .then((response) => {return response.json()})
    .then((json) => {console.log(json)});
}

//Metodo PUT

export const updatePostServiceZZZ=(id)=>{
    const config={
        method:"PUT",
        body:JSON.stringify({
            id: 21,
            title: 'SEGUNDO PRODUCTO',
            price: 20,
            description: 'BUENO',
            image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
            category: 'Cualquier cosa'
        }),
        headers:{
            'Content-type': 'application/json',
        }
    }
    fetch("https://fakestoreapi.com/products/21", config)
    .then((response) => {return response.json()})
    .then((json) => {console.log(json)});
}

//Funcion para recuperarDocumentos
export const getDocumentTypes=()=>{
    fetch("http://192.168.0.12:8080/inventarios/rest/tiposdocumento/recuperar")
    .then((response) => {return response.json()})
    .then((json) => {console.log(json)});
}


//funcion para insertar Documentos
export const createPostDocument=(post,fnExito)=>{
    const config={
        method: "POST",
        body: JSON.stringify({
           codigo_doc: post.codigo_doc,
           descripcion_doc: post.descripcion_doc,
        }),
        headers: {
            'Content-type': 'application/json',
        }
    }
    fetch("http://192.168.0.12:8080/inventarios/rest/tiposdocumento/insertarDocumento",config)
    .then((response) => {return response.json()})
    .then((json) => {console.log(json);fnExito();});
}
