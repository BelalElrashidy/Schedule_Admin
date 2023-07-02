import '../assets/css/main.css';


function Components(){
    return(
        <>
            {comp.map((item) => (
                <li key={item} className='component'>
                    {item}
                </li>
            ))}
        </>
    );
}