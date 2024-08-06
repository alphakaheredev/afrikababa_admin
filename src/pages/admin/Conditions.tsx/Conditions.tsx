import "./Conditions.css";

interface Conditions {
  title: string;
  content: string;
}

const Conditions = ({ title, content }: Conditions) => {
  return (
    <div className="condition">
      <h1 className="font-bold text-2xl xl:text-4xl text-center border-b-8 border-[#E6E6E6] pb-6 text-dark">
        {title}
      </h1>
      <div className="max-w-xl mx-auto pt-10">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Conditions;
