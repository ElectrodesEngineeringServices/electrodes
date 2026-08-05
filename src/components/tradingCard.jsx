

const TradingCard = ({ image, name, description }) => 
    { return ( <div className="group w-[300px] rounded-3xl overflow-hidden bg-white shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_15px_40px_rgba(0,174,255,0.25)]"> 
    <div className="overflow-hidden"> <img src={image} alt={name} className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110" /> </div> 
    <div className="flex flex-col items-center justify-center text-center h-[320px] p-6"> 
        <h3 className="text-2xl font-bold text-secondary mb-4"> {name} </h3> 
        <p className="text-gray-600 leading-7"> {description} </p> </div> </div> ); };
        export default TradingCard;