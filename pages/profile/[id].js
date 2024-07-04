// /* /products/:id */ ->react maa yesto gartheyem ni haina

import { useRouter } from "next/router";


//get static path

export const getStaticPaths=async()=>{
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/`)

    const posts = await response.json()


    //yellai return ni garnu paryo return garna lai path linxam hai ..path haru returngarnu paryo

    const paths=posts.map(post=>{
        return { params: {id:post.id.toString() } }
        // hami sanga vaako sabai data ko id haru chai object banara return garni vayo
    })
    //ani yo path lai chai  function maa return garnu paryo
    return {
        paths,
        fallback:false,// vetiyena vani chai pagenot found
    }   
}
// ava path maatra return garayara vayena data ni chaiyo..
export const getStaticProps=async(props)=>{
    const id=props.params.id
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    const post = await response.json()


    return {
        // props maa post pass garnu paryo.
        // key ra value ko naam same xa vani euta maatra garda ni vayo natra post : maa post garda ni vayo
        // props:{post}
        // props:{post:post}
        props:{post}

    }


}
const profile_individual = (props) => {

    //useparams hudaina hai tyo chai react router dom baata import huntheyeo

    // useRouter chai next js ko hook
    // params maa object return garxa

    // return garni chai
    /*
        (id:1)
     */

        //id linu paryo vani chai
    // // // let params =useRouter().query
    
    // // // let id=params.id

    //destrucutre

    // let {id}=useRouter().query



    return (<>
        <h1 className="text-3xl text-center">
            post id  is {props.post.id}
        </h1>

        <h1>{props.post.title}</h1>
        <h1>{props.post.body}</h1>
    </> 
    
);
}
 
export default profile_individual;