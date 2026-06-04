function Card({title,text,image}){
    return (
        <>
            <div className="card">
                <img src={image} alt="" />
                <h2 className="title">{title}</h2>
                <p className="p">{text}</p>
                <p className="start">Get Started</p>
            </div>
        </>
    )
}

export default Card