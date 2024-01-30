

export function PostItem({data}){
    return (
        <div id="OuterBox">
        {data.map((post)=>{
            return <div key={post.id}>
                <h1>{post.id}</h1>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        })}
        </div>
    )
     
    
}