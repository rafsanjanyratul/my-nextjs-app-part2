

const getPost =async ()=>{
try{
const res =await fetch("https://jsonplaceholder.typicode.com/posts")
return res.json()
}
catch(err){
    throw new Error("something went wrong")
}
}
const PostPage = async() => {
    const posts = await getPost()
    return (
        <div>
            <h2>this is from post {posts.length}</h2>
        </div>
    );
};

export default PostPage;