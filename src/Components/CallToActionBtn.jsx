
const CallToActionBtn = () => {
    return (

        <div className="flex gap-4 justify-center">
            <button className="bg-primary text-white hover:bg-secondary500 hover:text-primary px-4 py-2 rounded-full transition">
                Get a Free Demo
            </button>
            <button className="bg-secondary500 text-white px-4 py-2 rounded-full hover:bg-white hover:text-secondary500 transition">
                See Pricing
            </button>
        </div>
    );
};

export default CallToActionBtn;