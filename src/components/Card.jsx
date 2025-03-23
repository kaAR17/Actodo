const Card=() =>{
    return(
        <div className="flex justify-between gap-7 my-5 text-center flex-wrap ">
        <div className="bg-violet-800 px-10 py-10 border rounded-md flex-grow" >
            <h3 className="text-2xl font-medium">23</h3>
           <p> Chennai</p>
        </div>
        <div className="bg-red-700 px-10 py-10 border rounded-md flex-grow" >
        <h1 className="text-2xl font-medium">March 18</h1>
       <p>15:02:02 </p>
    </div>
    <div className="bg-orange-700  px-10 py-10 border rounded-md flex-grow">
    <h3 className="text-2xl font-medium ">Built Using</h3>
   <p>React</p>
</div>
</div>
    )
};
 export default Card