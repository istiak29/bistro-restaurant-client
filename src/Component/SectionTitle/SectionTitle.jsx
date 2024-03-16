
const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="text-center my-8  md:w-4/12 mx-auto">
            <p className="text-yellow-600 italic my-3">---{ subheading }---</p>
            <hr className="border-2 border-gray-300 " />
            <p className=" font-semibold text-4xl my-2">{heading}</p>
            <hr className="border-2 border-gray-300 "/>
        </div>
    );
};

export default SectionTitle;