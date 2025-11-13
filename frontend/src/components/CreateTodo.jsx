 export function CreateTodo(){
    return <div>
        <input style ={{
            padding:7,
            margin:4
        }}type="text" placeholder="title"></input> <br />
        <input style ={{
            padding:7,
            margin:4
        }} type="text" placeholder="description"></input> <br />
        <button style ={{
            padding:7,
            margin:4
        }}>Add a Todo</button>
    </div>
}