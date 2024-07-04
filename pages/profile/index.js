import Link from "next/link";
// import axios from "axios";
// sfc -> stateless functional component
export async function getStaticProps() {
    // data fetcj garyo ani json maa convert garyo
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()
   
    return { props: { posts } }

    // return garda chai euta props xa tyo vitra projects xa projects nagaram yeslai posts use gardim

    // tyo props lai chai page maa linu paryo ani map garera display garnu paryo...

    // tala function maa porps use garam

  }


const  profile_main=(props) => {

    let posts=props.posts
    return ( 
        <>
            <h1 className="text-3xl tex-center">Profile MAIN</h1>


          
      <br />
        {
                        posts.map(post=>{
                return <li><Link href={`/profile/${post.id}`}>{post.title}</Link></li>
            })
        }

        
        </>
     );
}
 
export default profile_main;


