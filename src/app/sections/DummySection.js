import Section from '../components/Section';

const DummySection = ({ 
  title = "DUMMY HEADER", 
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
  imageUrl = "chemotion_ELN.png", 
  listItems = [
    { label: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { label: "Curabitur Elit", description: "Vivamus pharetra nisi at tortor facilisis, at aliquam justo convallis." },
    { label: "Donec Vulputate", description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames." },
    { label: "Etiam Consectetur", description: "Nulla facilisi. Sed id tortor non urna convallis dapibus." },
  ]
}) => (
  <Section id="dummy" title={title}>
    <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-12">
      <div className="w-full md:w-6/12">
        <h2 className="text-2xl font-semibold mb-4 text-800">
          {title}
        </h2>
        <p className="text-base mb-6 text-600 leading-relaxed">
          {content}
        </p>
        <ul className="list-disc list-inside text-700 space-y-3">
          {listItems.map((item, index) => (
            <li key={index}>
              <span className="font-semibold">{item.label}:</span> {item.description}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-6/12 flex justify-center items-center">
        <img
          src={imageUrl}
          alt="Section illustration"
          className="rounded-lg shadow-lg object-cover max-h-96"
        />
      </div>
    </div>
  </Section>
);

export default DummySection;
