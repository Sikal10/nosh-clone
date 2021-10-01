const ServicesCard = ({title, src, text}) => {
    return (
        <div className={"shadow-sm bg-nosh_blue-light rounded-lg px-10 py-5 md:mx-5 relative"}>
            <h2 className={"font-bold text-nosh_blue"}>{title}</h2>
            <div className={"border-b border-gray-100 mt-2"}/>
            <p className={"lg:w-[190px] text-base mt-1"}>{text}</p>

            <div className={"absolute top-[23px] -right-9 p-4 bg-white rounded-full shadow-xl"}>
                <img loading={"lazy"} src={src} alt="" />
            </div>
        </div>
    );
};

export default ServicesCard;